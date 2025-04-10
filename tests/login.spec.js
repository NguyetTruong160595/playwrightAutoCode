import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User can login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('nguyettruong+1@freec.asia', '12345678');

  await expect(page).toHaveURL(/.*dashboard/);
});
