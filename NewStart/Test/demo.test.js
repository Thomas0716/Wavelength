 const launchWave=require('../Pages/launch');
 const loginWave=require('../Pages/login');
 const searchWave=require('../Pages/search');
 const glassSelectWave=require('../Pages/skyGlassBuy');
 const glassCheckoutWave=require('../Pages/skyGlassCheckout');
 const formWave=require('../Pages/formFill');
 const consentWave=require('../Pages/payment');
 import { assert, expect } from 'chai';
 
// const loginWave=require('../Pages/login_1');
// const iSearch =require('./Pages/search');
// await launchWave.launch();
// await loginWave.Login_wave();

describe('Sky App test', () => {
  beforeAll(async () => {
    await launchWave.launch();
  });
  it('Login test', async () => {
    await loginWave.loginNext();
  });
  it('Search test', async () => {
    await searchWave.search();
    await searchWave.newcustomer();
  
    await page.waitForTimeout(5000);
  });
  it('Sky Glass Select test', async () => {
    await glassSelectWave.skyGlassSelect();
  });
  it('Sky Glass Checkout test', async () => {
    await glassCheckoutWave.GlassBuyCheckout();
  });
  it('Sky Glass Form test', async () => {
    await formWave.form_fill();
  });
  it('Sky Glass consent Payment test', async () => {
    await consentWave.ConsentUpdate();
    await consentWave.CardPayment();
})
  
});
