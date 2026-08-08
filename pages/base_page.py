"""
pages/base_page.py
- 모든 Page 객체가 상속받는 부모 클래스
- 공통 동작(클릭/입력/대기)을 한 곳에서 관리 (POM 구조의 핵심)
- MockOTT-Auth 프로젝트에서 이식: find_element만 쓰던 기존 코드를
  명시적 대기(WebDriverWait) 기반으로 바꿔 타이밍 이슈로 인한 flaky 테스트를 줄인다.
"""
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class BasePage:
    def __init__(self, driver):
        self.driver = driver
        self.wait = WebDriverWait(driver, 10)

    def find(self, by_locator):
        """요소가 DOM에 존재할 때까지 대기 후 반환"""
        return self.wait.until(EC.presence_of_element_located(by_locator))

    def click(self, by_locator):
        el = self.wait.until(EC.element_to_be_clickable(by_locator))
        el.click()
        return el

    def type_text(self, by_locator, text):
        el = self.wait.until(EC.visibility_of_element_located(by_locator))
        el.clear()
        el.send_keys(text)
        return el

    def get_text(self, by_locator):
        el = self.wait.until(EC.visibility_of_element_located(by_locator))
        return el.text

    def is_visible(self, by_locator, timeout=5) -> bool:
        try:
            WebDriverWait(self.driver, timeout).until(
                EC.visibility_of_element_located(by_locator)
            )
            return True
        except Exception:
            return False

    def wait_seconds(self, sec: float):
        """명시적 슬립 — 애니메이션·진행률 갱신 대기 시 사용"""
        time.sleep(sec)
