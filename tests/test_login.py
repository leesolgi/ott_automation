import pytest
from pages.login_page import LoginPage
from conftest import BASE_URL

@pytest.mark.smoke
def test_login_success_TC01(driver):
    page = LoginPage(driver)
    page.open(BASE_URL)
    page.login('qatest','1234')
    assert '로그인됨' in page.get_user_info()

@pytest.mark.regression
def test_login_fail_wrong_password_TC02(driver):
    page = LoginPage(driver)
    page.open(BASE_URL)
    page.login('qatest','wrongpw')
    alert = driver.switch_to.alert
    assert '아이디 또는 비밀번호가 틀렸습니다' in alert.text
    alert.accept()

@pytest.mark.smoke
def test_logout_TC04(driver):
    page = LoginPage(driver)
    page.open(BASE_URL)
    page.login('qatest','1234')
    page.logout()
    assert page.get_user_info() == ''
