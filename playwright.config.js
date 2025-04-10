import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://app.secapa.jp/',
    workers: process.env.CI ? 4 : undefined,
  },
  projects: [
    {
      name: 'API Tests',
      testMatch: /.*api\.spec\.ts/,
    },
    {
      name: 'UI Tests',
      testMatch: /.*\.spec\.ts/,
      grepInvert: /api/, // Exclude API specs from UI project
    },
    ],
  retries: 1,
});