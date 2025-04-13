import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
require('dotenv').config();

test('User can login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.BASE_URL, '12345678');

  await expect(page).toHaveURL(/.*dashboard/);
});
