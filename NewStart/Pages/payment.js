    
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
  
  await page.click('[data-testid="basket-bar-payment-button"]');
  await page.click('[data-testid="name-panel-container"]');
  await page.locator('[data-testid="customer-account-details"]').first().click();
  await page.waitForTimeout(20000);
}
