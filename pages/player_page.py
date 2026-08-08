"""
pages/player_page.py
VOD 플레이어 Page Object — TC09~TC11 자동화용

MockOTT(mockott.html) DOM 기준 로케이터 사용
실제 서비스 적용 시 CSS_SELECTOR 값만 교체하면 됩니다.

재생 상태 판별:
  - playBtn 텍스트 == '일시정지'  → 재생 중
  - playBtn 텍스트 == '재생'      → 일시정지 상태
배속 상태:
  - speedSelect 의 selected option value 로 확인
이어보기:
  - resumeMessage 텍스트 존재 여부 / resumeBadge 표시 여부
"""
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from pages.base_page import BasePage


class PlayerPage(BasePage):

    # ── 로케이터 ──────────────────────────────────────────────────
    PLAY_BTN        = (By.ID, "playBtn")
    SPEED_SELECT    = (By.ID, "speedSelect")
    PLAYER_SCREEN   = (By.ID, "playerScreen")   # paused 클래스로 재생 상태 확인
    PROGRESS_TEXT   = (By.ID, "progressText")   # "30%" 형태 텍스트
    PROGRESS_BAR    = (By.ID, "playerProgressBar")
    RESUME_MESSAGE  = (By.ID, "resumeMessage")
    RESUME_BADGE    = (By.ID, "resumeBadge")
    EXIT_BTN        = (By.XPATH, "//button[contains(text(),'나가기')]")
    CONTENT_ITEM    = (By.CSS_SELECTOR, "#contentList li")
    # ──────────────────────────────────────────────────────────────

    # ── 재생 제어 (TC10) ─────────────────────────────────────────

    def is_playing(self) -> bool:
        """playBtn 텍스트가 '일시정지'이면 재생 중"""
        return self.get_text(self.PLAY_BTN) == "일시정지"

    def is_paused_by_class(self) -> bool:
        """playerScreen에 'paused' 클래스가 있으면 일시정지 상태"""
        screen = self.find(self.PLAYER_SCREEN)
        return "paused" in screen.get_attribute("class")

    def toggle_play(self):
        self.click(self.PLAY_BTN)

    def play(self):
        if not self.is_playing():
            self.toggle_play()

    def pause(self):
        if self.is_playing():
            self.toggle_play()

    # ── 배속 제어 (TC09) ─────────────────────────────────────────

    def set_speed(self, value: str):
        """
        value 예시: '0.5', '1', '1.5', '2'
        (mockott.html option value 기준)
        """
        el = self.find(self.SPEED_SELECT)
        Select(el).select_by_value(value)

    def get_current_speed_value(self) -> str:
        """현재 선택된 배속 value 반환 (예: '1.5')"""
        el = self.find(self.SPEED_SELECT)
        return Select(el).first_selected_option.get_attribute("value")

    def get_current_speed_label(self) -> str:
        """현재 선택된 배속 텍스트 반환 (예: '1.5x')"""
        el = self.find(self.SPEED_SELECT)
        return Select(el).first_selected_option.text

    # ── 진행률 ───────────────────────────────────────────────────

    def get_progress_text(self) -> str:
        """progressText 텍스트 반환 (예: '30%')"""
        return self.get_text(self.PROGRESS_TEXT)

    def get_progress_percent(self) -> int:
        """진행률 정수 반환 (예: 30)"""
        text = self.get_progress_text().replace("%", "").strip()
        return int(text) if text.isdigit() else 0

    # ── 이어보기 (TC11) ──────────────────────────────────────────

    def exit_player(self):
        """나가기 클릭 → 진행률 30% 저장 (mockott 고정값)"""
        self.click(self.EXIT_BTN)

    def open_first_content(self):
        """콘텐츠 목록에서 첫 번째 항목 클릭 → 플레이어 진입"""
        items = self.driver.find_elements(*self.CONTENT_ITEM)
        if items:
            items[0].click()

    def is_resume_badge_visible(self) -> bool:
        return "hidden" not in self.find(self.RESUME_BADGE).get_attribute("class")

    def get_resume_message(self) -> str:
        return self.get_text(self.RESUME_MESSAGE)
