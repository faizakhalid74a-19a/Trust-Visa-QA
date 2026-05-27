const { test, expect } = require('@playwright/test');
const BASE_URL = 'https://trustvisanewzealand.com/';

test.describe('Trust Visa NZ - Basic Tests', () => {

  test('Homepage loads successfully', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page).toHaveTitle(/.+/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('No broken page - status 200', async ({ page }) => {
    const response = await page.goto(BASE_URL);
    expect(response.status()).toBe(200);
  });

  test('Navigation menu is visible', async ({ page }) => {
    await page.goto(BASE_URL);
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });

  test('Page has contact section', async ({ page }) => {
    await page.goto(BASE_URL);
    const contact = page.getByText(/contact|enquiry|get in touch/i);
    await expect(contact.first()).toBeVisible();
  });

  test('Page loads within 10 seconds', async ({ page }) => {
    const start = Date.now();
    await page.goto(BASE_URL);
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(10000);
  });

});
