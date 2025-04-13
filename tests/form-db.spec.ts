//import { expect, test } from '@playwright/test';
//import { connectViaSSHTunnel } from '../utils/ssh-db';

//test('Check DB via SSH tunnel', async () => {
//  const pool = await connectViaSSHTunnel();
//  const result = await pool.query('SELECT * FROM users WHERE mail = $1', ['nguyettruong+90@freec.asia']);

//  expect(result.rows.length).toBe(1);
//  expect(result.rows[0].email).toBe('nguyettruong+90@freec.asia');

//  await pool.end();
//});
