from selenium.webdriver.common.by import By
from pages.base_page import BasePage


class HomePage(BasePage):
    KEYWORD_INPUT = (By.ID, 'keyword')
    SEARCH_BTN = (By.XPATH, "//button[text()='검색']")
    CONTENT_LIST = (By.ID, 'contentList')
    LIKE_BTN_XPATH = "//li[contains(., '{title}')]//button[contains(@class,'like-btn')]"

    def search(self, keyword):
        self.type_text(self.KEYWORD_INPUT, keyword)
        self.click(self.SEARCH_BTN)

    def get_content_list_text(self):
        return self.driver.find_element(*self.CONTENT_LIST).text

    def select_content(self, title_keyword):
        item = self.wait.until(
            lambda d: d.find_element(By.XPATH, f"//li[contains(., '{title_keyword}')]")
        )
        item.click()

    def get_like_button(self, title_keyword):
        return self.driver.find_element(By.XPATH, self.LIKE_BTN_XPATH.format(title=title_keyword))

    def toggle_like(self, title_keyword):
        self.get_like_button(title_keyword).click()

    def is_liked(self, title_keyword):
        return "liked" in self.get_like_button(title_keyword).get_attribute("class")
