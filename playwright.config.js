// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Specify the directory where your tests are located
  timeout: 30000, // Global timeout for each test (in milliseconds)
  expect: {
    timeout: 5000, // Timeout for each expectation (assertion) in milliseconds
  },
  reporter: [
    ['list'], // Basic console output
    ['junit', { outputFile: 'test-results/test-report.xml' }], // Generate JUnit report (for CI/CD integration)
  ],
  use: {
    headless: true, // Run tests in headless mode for CI/CD
    viewport: { width: 1280, height: 720 }, // Set the browser viewport size
    actionTimeout: 5000, // Timeout for actions like clicks, typing
    ignoreHTTPSErrors: true, // Ignore SSL errors (useful in CI environments)
    baseURL: process.env.BASE_URL || 'https://your-application-url.com', // Use environment variable for base URL
  },
  projects: [
    {
      name: 'firefox', // Run tests on Firefox
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit', // Run tests on WebKit (Safari)
      use: { browserName: 'webkit' },
    },
    {
      name: 'chrome', // Run tests on Chrome
      use: { browserName: 'chromium' },
    },
  ],
  workers: process.env.CI ? 2 : undefined, // Adjust the number of parallel workers for CI/CD (set lower for CI environments)
});
