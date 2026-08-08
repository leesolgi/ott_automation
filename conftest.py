import pytest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from pages.login_page import LoginPage
from pages.home_page import HomePage
from pages.player_page import PlayerPage

BASE_URL = 'http://localhost:8000/mockott.html'

# 테스트 계정 (mockott.html 기준)
TEST_USER = 'qatest'
TEST_PASS = '1234'
TEST_CONTENT = '우주 다큐멘터리'


@pytest.fixture
def driver():
    """Chrome WebDriver 초기화 — 모든 테스트 공통 픽스처"""
    service = Service(ChromeDriverManager().install())
    d = webdriver.Chrome(service=service)
    d.implicitly_wait(3)
    yield d
    d.quit()


@pytest.fixture
def logged_in_driver(driver):
    """
    로그인 상태의 드라이버 반환
    - LoginPage.open()이 localStorage를 초기화하므로 각 테스트는 독립 실행됨
    """
    LoginPage(driver).open(BASE_URL)
    LoginPage(driver).login(TEST_USER, TEST_PASS)
    yield driver


@pytest.fixture
def player(logged_in_driver):
    """
    로그인 + '우주 다큐멘터리' 콘텐츠 진입 후 PlayerPage 반환
    TC09(배속) / TC10(재생) / TC11(이어보기) 테스트에서 사용
    """
    HomePage(logged_in_driver).select_content(TEST_CONTENT)
    return PlayerPage(logged_in_driver)
