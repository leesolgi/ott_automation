from selenium.webdriver.common.by import By
from pages.base_page import BasePage


class LoginPage(BasePage):
    USERNAME_INPUT = (By.ID, 'username')
    PASSWORD_INPUT = (By.ID, 'password')
    LOGIN_BTN = (By.ID, 'loginBtn')
    LOGOUT_BTN = (By.ID, 'logoutBtn')
    USER_INFO = (By.ID, 'userInfo')
    EMPTY_STATE = (By.CSS_SELECTOR, '.empty-state')

    def open(self, url):
        self.driver.get(url)
        self.driver.execute_script("window.localStorage.clear();")

    def login(self, username, password):
        self.type_text(self.USERNAME_INPUT, username)
        self.type_text(self.PASSWORD_INPUT, password)
        self.click(self.LOGIN_BTN)

    def logout(self):
        self.click(self.LOGOUT_BTN)

    def get_user_info(self):
        return self.driver.find_element(*self.USER_INFO).text

    def get_username_field_value(self):
        # TC-15: 로그아웃 후 아이디 입력값이 초기화됐는지 확인할 때 사용
        return self.driver.find_element(*self.USERNAME_INPUT).get_attribute('value')

    def get_password_field_value(self):
        # TC-15: 로그아웃 후 비밀번호 입력값이 초기화됐는지 확인할 때 사용
        return self.driver.find_element(*self.PASSWORD_INPUT).get_attribute('value')

    def is_login_btn_enabled(self):
        return self.driver.find_element(*self.LOGIN_BTN).is_enabled()

    def is_logout_btn_enabled(self):
        return self.driver.find_element(*self.LOGOUT_BTN).is_enabled()

    def is_empty_state_visible(self):
        # TC-16: 로그아웃/초기 진입 시 안내 일러스트(.empty-state)가 노출되는지 확인
        return self.is_visible(self.EMPTY_STATE)

    def reset_purchases(self):
        # TC-17: 구매 초기화 버튼 클릭 (브라우저 confirm() 창은 자동 수락 처리 필요)
        self.driver.find_element(By.ID, 'resetBtn').click()
        self.driver.switch_to.alert.accept()
