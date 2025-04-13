import { test, expect, request } from '@playwright/test';

test('GET heathly - status 200', async ({ }) => {
    const apiContext = await request.newContext();
    const response = await apiContext.get('https://api.stg.secapa.jp/health');
  
    expect(response.status()).toBe(200);
  
    const responseBody = await response.json();
    expect(responseBody.data).toBeOK();
  });

test('GET user - status 200', async ({ }) => {
    const apiContext = await request.newContext();
    const response = await apiContext.get('https://api.stg.secapa.jp/');
  
    expect(response.status()).toBe(200);
  
    const responseBody = await response.json();
    expect(responseBody.data).toBeOK();
  });

test('POST login - status 201 and data check', async ({ }) => {
    const apiContext = await request.newContext();
    const response = await apiContext.post('https://api.stg.secapa.jp/auth/login',
    {
        data: {
            "mail": "nguyettruong+2000@freec.asia",
            "password": "12345678"
        },
    });
  
    expect(response.status()).toBe(201);
  
    const responseBody = await response.json();
    expect(responseBody.data).toHaveProperty('user_id');
  });

test('POST create user - status 201', async ({ }) => {
  const apiContext = await request.newContext();
  const response = await apiContext.post('https://api.stg.secapa.jp/auth/upsertRegistration', {
    data: {
        "mail": "nguyettruong+2000@freec.asia",
        "password": "12345678",
        "gender_code": "1",
        "is_terms_consented": true,
        "utm": "",
        "media": "",
        "adid": "",
        "lp": "",
        "referral_code": ""
      },
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body.data).toHaveProperty('mail', "nguyettruong+1008@freec.asia");
});
