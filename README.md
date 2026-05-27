# Trust Visa NZ - Playwright Automation Tests

Automated tests for [trustvisanewzealand.com](https://trustvisanewzealand.com/) using Playwright and GitHub Actions.

## Tests Included
- ✅ Homepage loads successfully
- ✅ No broken page (status 200)
- ✅ Navigation menu is visible
- ✅ Page has contact section
- ✅ Page loads within 10 seconds

## How to Run
Tests run automatically on every push to `main` via GitHub Actions.

To trigger manually:
1. Go to the **Actions** tab
2. Click **Playwright Tests**
3. Click **Run workflow**

## View Results
After tests run, download the **playwright-report** artifact from the Actions tab to see the full HTML report.
