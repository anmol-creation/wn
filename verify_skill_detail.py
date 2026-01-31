
from playwright.sync_api import sync_playwright

def verify_skill_detail_ui(page):
    page.goto("http://localhost:5173/")

    # Welcome
    page.fill("input[placeholder='Your Full Name']", "Test User")
    page.click("button:has-text('Get Started')")

    # Step 1: Education -> Next
    page.click("button:has-text('Next Step')")

    # Step 2: Skills
    # Expand Digital & Tech Skills
    page.click("text=Digital & Tech Skills")

    # Expand Web Development
    page.click("text=Web Development")

    # Select HTML
    page.click("text=HTML")

    # Verify SkillDetailCard appears
    page.wait_for_selector("text=Proficiency Checklist")

    # Verify dropdown structure
    assert page.is_visible("text=Basic Structure")

    # Click the select-all button.
    # The structure is: div > div(flex gap-3) > button, span(Basic Structure).
    # We want the button.
    # We can locate the group header by text, then find the button inside it.

    # This locator finds the container of the button and text
    header_group = page.locator("div.flex.items-center.gap-3").filter(has_text="Basic Structure")

    # The button is the first child (or we can find by role button)
    select_all_btn = header_group.locator("button")
    select_all_btn.click()

    # Wait for React state update
    page.wait_for_timeout(500)

    # Verify items checked
    # "<html>" should have the checked style (bg-blue-50 text-blue-700 border-blue-200)
    # The class string might vary in order, so we check for 'bg-blue-50'.

    html_label = page.locator("label").filter(has_text="<html>").first
    class_attr = html_label.get_attribute("class")
    print(f"Class attribute for <html> label: {class_attr}")

    assert "bg-blue-50" in class_attr

    page.screenshot(path="verification_skill_detail.png", full_page=True)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_skill_detail_ui(page)
        finally:
            browser.close()
