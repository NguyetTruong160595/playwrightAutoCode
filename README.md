 1. Initialize a Node.js project
First, create a new project folder and initialize it with npm:
mkdir playwright-ts-project
cd playwright-ts-project
npm init -y

✅ 2. Install Playwright with TypeScript

npm install -D playwright typescript ts-node @playwright/test
Install Playwright dependencies (like Chromium, Firefox, WebKit):


npx playwright install

✅ 3. Initialize Playwright Test project
npx playwright test init

This creates:
playwright.config.ts

Example tests under tests/

Adds scripts to package.json

✅ 4. Configure TypeScript
Create a tsconfig.json:

{
  "compilerOptions": {
    "target": "ESNext",
    "module": "CommonJS",
    "lib": ["ESNext", "DOM"],
    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "outDir": "dist",
    "rootDir": ".",
    "types": ["node", "playwright"]
  },
  "include": ["tests/**/*.ts", "playwright.config.ts"]
}

✅ 5. Create a sample test file
Example tests/example.spec.ts:

import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.locator('text=Get started')).toBeVisible();
});

✅ 6. Run the tests
npx playwright test
Optional: Run with UI
npx playwright test --ui

✅ 7. Add scripts to package.json
"scripts": {
  "test": "npx playwright test",
  "test:headed": "npx playwright test --headed",
  "test:debug": "npx playwright test --debug"
}
