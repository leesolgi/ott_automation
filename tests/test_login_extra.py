"""
tests/test_login_extra.py
- MockOTT-Auth 프로젝트(dockauth.html 대상)의 TC-LOGIN-xxx 시나리오 중
  mockott.html에도 유효한 항목을 이식/결합한 테스트입니다.
- TC03은 기존 README에는 있었지만 테스트 코드가 없던 항목을 보강한 것입니다.
- TC12~15는 MockOTT-Auth의 TC-LOGIN-004/005/007/008을 mockott.html 기준으로 재작성한 것입니다.
"""
import pytest
from pages.login_page import LoginPage
from conftest import BASE_URL


@pytest.mark.regression
def test_login_fail_empty_fields_TC03(driver):
    """TC03: 아이디/비밀번호 공백 상태로 로그인 시도 시 안내 alert 노출"""
    page = LoginPage(driver)
    page.open(BASE_URL)
    page.login('', '')
    alert = driver.switch_to.alert
    assert '아이디와 비밀번호를 입력하세요' in alert.text
    alert.accept()


@pytest.mark.regression
def test_login_fail_unregistered_user_TC12(driver):
    """TC12: 동등분할 - 미등록 계정으로 로그인 시 잘못된 비밀번호와 동일한 에러 노출
    (MockOTT-Auth TC-LOGIN-004 이식)"""
    page = LoginPage(driver)
    page.open(BASE_URL)
    page.login('nouser', '1234')
    alert = driver.switch_to.alert
    assert '아이디 또는 비밀번호가 틀렸습니다' in alert.text
    alert.accept()


@pytest.mark.regression
def test_auth_button_state_toggle_TC13(driver):
    """TC13: 로그인 전에는 로그아웃 버튼 비활성, 로그인 후에는 로그인 버튼 비활성
    (MockOTT-Auth TC-LOGIN-005 이식)"""
    page = LoginPage(driver)
    page.open(BASE_URL)
    assert page.is_login_btn_enabled() is True
    assert page.is_logout_btn_enabled() is False

    page.login('qatest', '1234')
    assert page.is_login_btn_enabled() is False
    assert page.is_logout_btn_enabled() is True

    page.logout()
    assert page.is_login_btn_enabled() is True
    assert page.is_logout_btn_enabled() is False


@pytest.mark.regression
def test_fields_cleared_after_logout_TC14(driver):
    """TC14: 로그아웃 후 아이디/비밀번호 입력값이 초기화되는지 확인
    (MockOTT-Auth TC-LOGIN-008 이식)"""
    page = LoginPage(driver)
    page.open(BASE_URL)
    page.login('qatest', '1234')
    page.logout()
    assert page.get_username_field_value() == ''
    assert page.get_password_field_value() == ''


@pytest.mark.smoke
def test_illustration_shown_when_logged_out_TC15(driver):
    """TC15: 로그인 전/로그아웃 후 안내 일러스트(.empty-state)가 노출되는지 확인
    (MockOTT-Auth TC-LOGIN-007 이식)"""
    page = LoginPage(driver)
    page.open(BASE_URL)
    assert page.is_empty_state_visible() is True

    page.login('qatest', '1234')
    assert page.is_empty_state_visible() is False

    page.logout()
    assert page.is_empty_state_visible() is True


@pytest.mark.regression
def test_reset_purchases_TC16(driver):
    """TC16: 구매 초기화 버튼 클릭 시 구매 내역이 사라지고 콘텐츠가 다시 잠금(가격) 상태로 표시된다"""
    from pages.home_page import HomePage
    from pages.payment_page import PaymentPage

    page = LoginPage(driver)
    page.open(BASE_URL)
    page.login('qatest', '1234')

    home = HomePage(driver)
    home.select_content('액션 영화')
    PaymentPage(driver).confirm_purchase()
    assert '보유중' in home.get_content_list_text()

    page.reset_purchases()
    assert '3000원' in home.get_content_list_text()
    assert '보유중' not in home.get_content_list_text()