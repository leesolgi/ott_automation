"""
tests/test_player.py
VOD 플레이어 자동화 테스트 — TC09 ~ TC11

마커 체계 (pytest.ini 기준):
  @pytest.mark.smoke      → 핵심 Happy Path, PR마다 실행
  @pytest.mark.regression → 전체 회귀, 배포 전 실행

대상: MockOTT (mockott.html) — 로컬 서버 필요
  cd ott_automation && python -m http.server 8000
실행:
  pytest tests/test_player.py -v
  pytest tests/test_player.py -m smoke -v
"""
import pytest


# ══════════════════════════════════════════════════════════════════
# TC09 | 배속 옵션 변경
# ══════════════════════════════════════════════════════════════════
class TestTC09Speed:

    @pytest.mark.smoke
    def test_speed_change_1_5x(self, player):
        """[TC09] 1.5배속 선택 후 select value 확인"""
        player.set_speed("1.5")
        assert player.get_current_speed_value() == "1.5", \
            "배속 1.5x 선택 후 value가 '1.5'여야 합니다"

    @pytest.mark.regression
    @pytest.mark.parametrize("value,label", [
        ("0.5", "0.5x"),
        ("1",   "1.0x"),
        ("1.5", "1.5x"),
        ("2",   "2.0x"),
    ])
    def test_speed_option_applied(self, player, value, label):
        """각 배속 선택 후 value와 레이블 텍스트 확인"""
        player.set_speed(value)
        player.wait_seconds(0.3)
        assert player.get_current_speed_value() == value
        assert player.get_current_speed_label() == label

    @pytest.mark.regression
    def test_default_speed_is_1x(self, player):
        """플레이어 진입 시 기본 배속이 1.0x인지 확인"""
        assert player.get_current_speed_value() == "1", \
            "기본 배속은 1.0x(value='1')여야 합니다"

    @pytest.mark.regression
    def test_speed_change_during_play(self, player):
        """재생 중 배속 변경 후 재생 상태 유지 확인"""
        player.play()
        player.set_speed("1.5")
        player.wait_seconds(0.3)
        assert player.get_current_speed_value() == "1.5"
        assert player.is_playing(), \
            "배속 변경 후 재생 상태가 유지되어야 합니다"


# ══════════════════════════════════════════════════════════════════
# TC10 | 재생/일시정지 토글
# ══════════════════════════════════════════════════════════════════
class TestTC10PlayPause:

    @pytest.mark.smoke
    def test_play_button_toggles_to_pause(self, player):
        """[TC10] 재생 클릭 후 버튼 텍스트가 '일시정지'로 전환 확인"""
        player.toggle_play()
        assert player.is_playing(), \
            "재생 클릭 후 버튼 텍스트가 '일시정지'여야 합니다"

    @pytest.mark.regression
    def test_initial_state_is_paused(self, player):
        """플레이어 진입 시 초기 상태가 일시정지인지 확인"""
        assert not player.is_playing(), \
            "진입 직후 버튼 텍스트는 '재생'이어야 합니다"
        assert player.is_paused_by_class(), \
            "playerScreen에 'paused' 클래스가 있어야 합니다"

    @pytest.mark.regression
    def test_pause(self, player):
        """재생 → 일시정지 전환 확인"""
        player.play()
        player.wait_seconds(0.3)
        player.toggle_play()
        assert not player.is_playing(), \
            "일시정지 클릭 후 버튼 텍스트가 '재생'이어야 합니다"
        assert player.is_paused_by_class(), \
            "일시정지 후 playerScreen에 'paused' 클래스가 있어야 합니다"

    @pytest.mark.regression
    def test_rapid_toggle_5times(self, player):
        """재생/일시정지 0.5초 간격 5회 반복 — UI 상태 불일치 없음"""
        initial_playing = player.is_playing()
        for _ in range(5):
            player.toggle_play()
            player.wait_seconds(0.5)
        assert player.is_playing() == (not initial_playing), \
            "5회 토글 후 재생 상태와 UI가 불일치합니다"

    @pytest.mark.regression
    def test_button_text_and_class_in_sync(self, player):
        """버튼 텍스트와 playerScreen 클래스가 항상 동기화되는지 확인"""
        player.play()
        assert player.is_playing() != player.is_paused_by_class(), \
            "재생 중: 버튼 텍스트와 playerScreen 클래스가 불일치합니다"

        player.pause()
        assert (not player.is_playing()) == player.is_paused_by_class(), \
            "일시정지 중: 버튼 텍스트와 playerScreen 클래스가 불일치합니다"


# ══════════════════════════════════════════════════════════════════
# TC11 | 이어보기 (나가기 → 재진입 시 저장 시점 복원)
# ══════════════════════════════════════════════════════════════════
class TestTC11Resume:
    """
    MockOTT 이어보기 동작:
    - exitPlayer() 호출 시 진행률 30%를 localStorage에 저장
    - 재진입 시 saved > 0 && saved < 100 이면 이어보기 배지 표시
    - resumeMessage: "이어보기: 30% 지점부터 이어서 재생합니다."
    """
    EXPECTED_PROGRESS = 30  # mockott.html 고정값

    @pytest.mark.smoke
    def test_resume_message_contains_progress(self, player):
        """[TC11] 나가기 → 재진입 후 resumeMessage에 30% 포함 확인"""
        from pages.home_page import HomePage
        player.exit_player()
        HomePage(player.driver).select_content('우주 다큐멘터리')
        assert str(self.EXPECTED_PROGRESS) in player.get_resume_message(), \
            f"resumeMessage에 '{self.EXPECTED_PROGRESS}'가 포함되어야 합니다"

    @pytest.mark.regression
    def test_resume_badge_shown_after_exit(self, player):
        """나가기 후 재진입 시 이어보기 배지가 표시되는지 확인"""
        from pages.home_page import HomePage
        player.exit_player()
        player.wait_seconds(0.5)
        HomePage(player.driver).select_content('우주 다큐멘터리')
        assert player.is_resume_badge_visible(), \
            "재진입 후 이어보기 배지(resumeBadge)가 표시되어야 합니다"

    @pytest.mark.regression
    def test_progress_restored_on_resume(self, player):
        """재진입 후 progressText가 30%로 복원되는지 확인"""
        from pages.home_page import HomePage
        player.exit_player()
        player.wait_seconds(0.5)
        HomePage(player.driver).select_content('우주 다큐멘터리')
        assert player.get_progress_percent() == self.EXPECTED_PROGRESS, \
            f"재진입 후 진행률이 {self.EXPECTED_PROGRESS}%여야 합니다"

    @pytest.mark.regression
    def test_no_resume_badge_on_first_visit(self, player):
        """localStorage 초기화 후 재진입 시 이어보기 배지 미표시 확인"""
        from pages.login_page import LoginPage
        from pages.home_page import HomePage
        from conftest import BASE_URL, TEST_USER, TEST_PASS

        player.driver.execute_script("window.localStorage.clear();")
        LoginPage(player.driver).open(BASE_URL)
        LoginPage(player.driver).login(TEST_USER, TEST_PASS)
        HomePage(player.driver).select_content('우주 다큐멘터리')

        assert not player.is_resume_badge_visible(), \
            "이어보기 이력 없는 최초 진입 시 배지가 표시되면 안 됩니다"
