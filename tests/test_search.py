import pytest
from pages.login_page import LoginPage
from pages.home_page import HomePage
from conftest import BASE_URL

@pytest.mark.smoke
def test_search_found_TC05(driver):
    LoginPage(driver).open(BASE_URL)
    LoginPage(driver).login('qatest','1234')
    home = HomePage(driver)
    home.search('액션')
    assert '액션' in home.get_content_list_text()

@pytest.mark.regression
def test_search_found_TC06(driver):
    LoginPage(driver).open(BASE_URL)
    LoginPage(driver).login('qatest','1234')
    home = HomePage(driver)
    home.search('없는 콘텐츠')
    assert '검색 결과가 없습니다' in home.get_content_list_text()
