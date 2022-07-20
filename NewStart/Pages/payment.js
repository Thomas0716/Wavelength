    
    const CONSENT1= '[id="use-details-question-true-label"]';
    const CONSENT2= '[id="previous-address-required-question-true-label"]';
    const CONSENT_BTN='[id="confirm-affordability-check"]';
    const PAYMENT_BTN='[id="basket-bar-checkout-button"]';

    const customer_radio='[data-testclass="Customer"]';
    const CC='[data-testid="paymentAuthCreditCardNumberInput"]';
    const SecurityCode='[data-testid="paymentAuthSecurityCodeInput"]';
    const CardHolderName='[data-testid="paymentAuthCardHolderNameInput"]';
    const yearExpiry='[data-testid="paymentAuthExpiryDateInput_2"]';
    const monthExpiry='[data-testid="paymentAuthExpiryDateInput_1"]';
    const store_card='text=Store card details for future use';
    const consent_cardpayment='text=Read word for word - These card details can be used for future one off payments';
    const authorise_card='[data-testid="authoriseButton"]';
    // const AccountHolderName='[data-testid="crpdAccountHolderNameInput"]';
    // //await frame1(this.AccountHolderName,'sandwich');
    // const sortcode='[data-testid="changePaymentBICInput"]';
    // //await frame1(this.sortcode,'AIBKIE2DXXX');
    // const AccountNo='[data-testid="changePaymentIBANInput"]';
    // //await frame1(this.AccountNo,'IE18AIBK93111871303833');
    // const consent_order='text=Confirm the caller has authority to use these payment details';
    // const SubmitBtn='[data-testid="submitButton"]';
  // await cardMonth.selectOption({ value: '02' });
  // const cardYear = await frame2.$(this.cardYear);

export async function ConsentUpdate(){
    await page.waitForTimeout(1000);
    await page.click(CONSENT1);
    await page.click(CONSENT2);
    await page.click(CONSENT_BTN);
    await page.waitForTimeout(2000);
    await page.waitForSelector(PAYMENT_BTN);
    await page.click(PAYMENT_BTN);
    await page.waitForTimeout(5000);
}
export async function CardPayment(){

    // //const frame = page.frameLocator('#billing-iframe-node');
    // const frame = page.frameLocator('//*[@id="payment-iframe-node"]');
    

    await page.frameLocator('#payment-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('text=Customer').click();

  // Click [data-testid="paymentAuthCreditCardNumberInput"]
  await page.frameLocator('#payment-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="paymentAuthCreditCardNumberInput"]').click();

  // Fill [data-testid="paymentAuthCreditCardNumberInput"]
  await page.frameLocator('#payment-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="paymentAuthCreditCardNumberInput"]').fill('4111111111111111');

  // Press Tab
  await page.frameLocator('#payment-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="paymentAuthCreditCardNumberInput"]').press('Tab');

  // Click [data-testid="paymentAuthSecurityCodeInput"]
  await page.frameLocator('#payment-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="paymentAuthSecurityCodeInput"]').click();

  // Fill [data-testid="paymentAuthSecurityCodeInput"]
  await page.frameLocator('#payment-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="paymentAuthSecurityCodeInput"]').fill('987');

  // Press Tab
  await page.frameLocator('#payment-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="paymentAuthSecurityCodeInput"]').press('Tab');

  // Fill [data-testid="paymentAuthCardHolderNameInput"]
  await page.frameLocator('#payment-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="paymentAuthCardHolderNameInput"]').fill('Sandwich');

  // Press Tab
  await page.frameLocator('#payment-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="paymentAuthCardHolderNameInput"]').press('Tab');

  // Fill [data-testid="paymentAuthExpiryDateInput_1"]
  await page.frameLocator('#payment-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="paymentAuthExpiryDateInput_1"]').fill('08');

  // Press Tab
  await page.frameLocator('#payment-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="paymentAuthExpiryDateInput_1"]').press('Tab');

  // Fill [data-testid="paymentAuthExpiryDateInput_2"]
  await page.frameLocator('#payment-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="paymentAuthExpiryDateInput_2"]').fill('27');

  // Press Tab
  await page.frameLocator('#payment-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="paymentAuthExpiryDateInput_2"]').press('Tab');

  // Click text=Store card details for future use
  await page.frameLocator('#payment-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('text=Store card details for future use').click();

  // Click text=Read word for word - These card details can be used for future one off payments.
  await page.frameLocator('#payment-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('text=Read word for word - These card details can be used for future one off payments.').click();

  await page.frame({name: 'capture-payment-details-module'}).click('[data-testid="authoriseButton"]');
  await page.waitForTimeout(2000);
  // Click text=Continuous Card
  await page.frame({
    name: 'capture-payment-details-module'
  }).click('text=Continuous Card');
  // Click text=Existing Cards (1)
  await page.frame({
    name: 'capture-payment-details-module'
  }).click('text=Existing Cards (1)');
  // Click [data-testid="storedCards_creditCardLogo_0"]
  await page.frame({
    name: 'capture-payment-details-module'
  }).click('[data-testid="storedCards_creditCardLogo_0"]');
  // Click text=Read word for word - These card details will be used for your monthly payments,
  await page.frame({
    name: 'capture-payment-details-module'
  }).click('text=Read word for word - These card details will be used for your monthly payments, ');
  // Click [data-testid="submitButton"]
  await page.frame({
    name: 'capture-payment-details-module'
  }).click('[data-testid="submitButton"]');
  // Click [data-testid="basket-bar-payment-button"]
  await page.click('[data-testid="basket-bar-payment-button"]');
  // Click [data-testid="name-panel-container"]
  await page.click('[data-testid="name-panel-container"]');
  // Click [data-testid="customer-account-details"] >> nth=0
  await page.locator('[data-testid="customer-account-details"]').first().click();
  await page.waitForTimeout(20000);
  
    //const frame2 = await page.$('[data-testid="capture-payment-details-module"]');
  
// if (frame != null) {
//     const frame2 = frame.frameLocator('[data-testid="capture-payment-details-module"]');
//     const usr_rd= await frame.frame2.locator(customer_radio);
//     const usr_card= await frame.frame2.locator(CC);
  
//     usr_rd.click()
//     usr_card.fill('4111111111111111')
  
  
   
    //const frames = frame.childFrames();
    //console.log(frames.length);
    //await frames[0].click(customer_radio);
  


    // const frame3 = await frame1.contentFrame();
    //       if(frame2){
    //       const frame4=await frame2.contentFrame();
    //       const customerRadio=frame3.frame4.$(customer_radio);
    //       await page.click(customerRadio);
    //       const CCard=frame3.frame4.$(CC);
    //       await page.fill(CCard);
    //       const security_code=frame3.frame4.$(SecurityCode);
    //       await page.fill(security_code);
    //       const customer_name=frame3.frame4.$(CardHolderName);
    //       await page.fill(customer_name);
    //       const year_expiry=frame3.frame4.$(yearExpiry);
    //       await page.fill(year_expiry);
    //       const month_expiry=frame3.frame4.$(monthExpiry);
    //       await page.fill(month_expiry);
    //       const card_store=frame3.frame4.$(store_card);
    //       await page.click(card_store);
    //       const card_consent=frame3.frame4.$(consent_cardpayment);
    //       await page.click(card_consent);
    //       const Authorise_btn=frame3.frame4.$(authorise_card);
    //       await page.click(Authorise_btn);
              }
              
        //   else{
        //       throw new Error('No Frame Displayed');
                  
        //       }
    
  

//   }
//   export async function CardPayment(){
//     if (frame) {
//       const frame2 = await frame.contentFrame();
//       const frame3= await frame2.contentFrame();
//       const customerRadio=frame3.$(customer_radio);
      
//     }
//     else {
//       throw new Error('No Frame Displayed');
      
//     }
//}