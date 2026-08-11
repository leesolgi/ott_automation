import pytest
from selenium.webdriver.common.by import By
from pages.login_page import LoginPage
from pages.home_page import HomePage
from pages.payment_page import PaymentPage
from conftest import BASE_URL

@pytest.mark.regression
def test_payment_insufficient_balance_TC07(driver):
    LoginPage(driver).open(BASE_URL)
    LoginPage(driver).login('qatest','1234')
    home = HomePage(driver)
    home.select_content('사극 드라마')  # 잔액 15,000원 - 10,000원 구매 = 남은 잔액 5,000원
    payment = PaymentPage(driver)
    payment.confirm_purchase()
    home.select_content('황금관 특별판')  # 20,000원 추가 구매 시도 > 남은 잔액(5,000원) 부족
    payment.confirm_purchase()
    result = payment.accept_alert_and_get_text()
    assert '잔액이 부족합니다' in result

@pytest.mark.regression
def test_payment_duplicate_purchase_TC08(driver):
    LoginPage(driver).open(BASE_URL)
    LoginPage(driver).login('qatest','1234')
    home = HomePage(driver)
    home.select_content('액션 영화')
    payment = PaymentPage(driver)
    payment.confirm_purchase()
    home.select_content('액션 영화')  # 이미 구매한 콘텐츠 재선택
    # 실제 앱 동작: 이미 구매한 콘텐츠는 결제창 없이 바로 재생 화면으로 이동함
    assert driver.find_element(By.ID, 'playerTitle').text == '액션 영화'
