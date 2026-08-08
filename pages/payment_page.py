from selenium.webdriver.common.by import By
from pages.base_page import BasePage


class PaymentPage(BasePage):
    CONFIRM_BTN = (By.XPATH, "//button[text()='구매하기']")

    def confirm_purchase(self):
        self.click(self.CONFIRM_BTN)

    def accept_alert_and_get_text(self):
        alert = self.driver.switch_to.alert
        text = alert.text
        alert.accept()
        return text
