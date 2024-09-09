import { test, expect, chromium } from '@playwright/test';



test('should show the correct message', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await expect(page.getByText('Hello, World!')).toBeVisible();
});
