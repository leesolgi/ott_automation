"""
tests/test_bookmark.py
콘텐츠 찜하기 토글 자동화 테스트

마커 체계 (pytest.ini 기준):
  @pytest.mark.regression → 전체 회귀, 배포 전 실행
"""
import pytest
from pages.home_page import HomePage
from conftest import TEST_CONTENT


class TestBookmarkToggle:

    @pytest.mark.regression
    def test_like_toggle_add(self, logged_in_driver):
        """찜하기 버튼 클릭 시 찜 상태(liked 클래스)로 전환되는지 확인"""
        home = HomePage(logged_in_driver)
        assert not home.is_liked(TEST_CONTENT), "초기 상태는 찜 해제 상태여야 합니다"
        home.toggle_like(TEST_CONTENT)
        assert home.is_liked(TEST_CONTENT), "클릭 후 찜 상태로 전환되어야 합니다"

    @pytest.mark.regression
    def test_like_toggle_remove(self, logged_in_driver):
        """찜한 콘텐츠를 다시 클릭하면 찜 해제되는지 확인"""
        home = HomePage(logged_in_driver)
        home.toggle_like(TEST_CONTENT)
        assert home.is_liked(TEST_CONTENT)
        home.toggle_like(TEST_CONTENT)
        assert not home.is_liked(TEST_CONTENT), "다시 클릭 시 찜 해제되어야 합니다"
