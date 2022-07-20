//const {loginPage}

//test('test', async ({ page }) => {
const Search=require('./Pages/search');

const page= await browser.newPage();
//Search Wavelength
await Search.search();
await Search.newcustomer();



  // Go to https://dthing01u01.bskyb.com/residential/?channel=DIRECT
  await page.goto('https://dthing01u01.bskyb.com/residential/?channel=DIRECT');

  // Click [placeholder="Username"]
  await page.frameLocator('#iframe-signin-node').locator('[placeholder="Username"]').click();

  // Fill [placeholder="Username"]
  await page.frameLocator('#iframe-signin-node').locator('[placeholder="Username"]').fill('tan13');

  // Click [placeholder="Password"]
  await page.frameLocator('#iframe-signin-node').locator('[placeholder="Password"]').click();

  // Fill [placeholder="Password"]
  await page.frameLocator('#iframe-signin-node').locator('[placeholder="Password"]').fill('Password!');

  // Check input[type="checkbox"]
  await page.frameLocator('#iframe-signin-node').locator('input[type="checkbox"]').check();

  // Click text=Login
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dthing01u01.bskyb.com/residential/customerLookup' }*/),
    page.frameLocator('#iframe-signin-node').locator('text=Login').click()
  ]);

  // Click [data-testid="customer-lookup-quick-search"]
  await page.locator('[data-testid="customer-lookup-quick-search"]').click();

  // Fill [data-testid="customer-lookup-quick-search"]
  await page.locator('[data-testid="customer-lookup-quick-search"]').fill('xx');

  // Click [data-testid="quick-search-button"]
  await page.locator('[data-testid="quick-search-button"]').click();

  // Click [data-testid="create-new-customer-menu-dataTestId-button"]
  await page.locator('[data-testid="create-new-customer-menu-dataTestId-button"]').click();

  // Click text=Sky Glass
  await page.locator('text=Sky Glass').click();

  // Select email
  await page.locator('[data-testid="channel-select-testid"]').selectOption('email');

  // Click [data-testid="country-radio-IRL-label"] svg:has-text("Radio Circle")
  await page.locator('[data-testid="country-radio-IRL-label"] svg:has-text("Radio Circle")').click();

  // Click [data-testid="prospect-channel-overlay-continue-button-testid"]
  await page.locator('[data-testid="prospect-channel-overlay-continue-button-testid"]').click();
  await expect(page).toHaveURL('https://dthing01u01.bskyb.com/residential/prospect/shop');
  
  //await page.waitForSelector();
  //await page.$


  // Click [data-testid="soip-product-tile-0"] svg:has-text("Radio Circle")
  await page.locator('[data-testid="soip-product-tile-0"] svg:has-text("Radio Circle")').click();

  // Click [data-testid="soip-frame-colour-tile-0"] svg:has-text("Radio Circle")
  await page.locator('[data-testid="soip-frame-colour-tile-0"] svg:has-text("Radio Circle")').click();

  // Click [data-testid="soip-payment-tile-2"] svg:has-text("Radio Circle")
  await page.locator('[data-testid="soip-payment-tile-2"] svg:has-text("Radio Circle")').click();

  // Click [data-testid="devices-confirm-button-test"]
  await page.locator('[data-testid="devices-confirm-button-test"]').click();

  // Click [data-testid="basket-bar-key-facts-container"]
  await page.locator('[data-testid="basket-bar-key-facts-container"]').click();
  page.waitForTimeout(1000);
  // Click text=Tick(Read word for word)Based on the products you have selected we recommend tha >> svg
  await page.locator('text=Tick(Read word for word)Based on the products you have selected we recommend tha >> svg').click();
  page.waitForTimeout(1000);
  // Click text=Tick(Read word for word)Your 31 day cooling off period starts when your Sky devi >> svg
  await page.locator('text=Tick(Read word for word)Your 31 day cooling off period starts when your Sky devi >> svg').click();
  page.waitForTimeout(1000);
  // Click text=Tick(Read word for word)Only read the rating relevant to the TV the customer is  >> svg
  await page.locator('text=Tick(Read word for word)Only read the rating relevant to the TV the customer is  >> svg').check();
  page.waitForTimeout(1000);
  // Click text=Tick(Conversational - Must be covered with the customer)Monthly Cost of Subscrip >> svg
  await page.locator('text=Tick(Conversational - Must be covered with the customer)Monthly Cost of Subscrip >> svg').check();
  page.waitForTimeout(1000);
  // Click text=Tick(Read word for word)If you don't have one, you'll need to create a Sky ID an >> svg
  await page.locator('text=Tick(Read word for word)If you don\'t have one, you\'ll need to create a Sky ID an >> svg').check();
  page.waitForTimeout(1000);
  // Click [data-testid="key-facts-drawer"] svg:has-text("Tick")
  await page.locator('[data-testid="key-facts-drawer"] svg:has-text("Tick")').check();
  page.waitForTimeout(1000);
  // Click [data-testid="accept-contract-0"] svg:has-text("Tick")
  await page.locator('[data-testid="accept-contract-0"] svg:has-text("Tick")').check();
  page.waitForTimeout(1000);
  // Click [data-testid="basket-bar-products-button"]
  await page.locator('[data-testid="basket-bar-products-button"]').click();

  // Click [data-testid="marketing-preferences-radio-testid-OPTED_IN-label"]
  await page.locator('[data-testid="marketing-preferences-radio-testid-OPTED_IN-label"]').click();

  // Select MR
  await page.locator('[data-testid="select-title-testid"]').selectOption('MR');

  // Click [data-testid="first-name-input-testid"]
  await page.locator('[data-testid="first-name-input-testid"]').click();

  // Fill [data-testid="first-name-input-testid"]
  await page.locator('[data-testid="first-name-input-testid"]').fill('sandwich');

  // Press Tab
  await page.locator('[data-testid="first-name-input-testid"]').press('Tab');

  // Fill [data-testid="last-name-input-testid"]
  await page.locator('[data-testid="last-name-input-testid"]').fill('testabc');

  // Press Tab
  await page.locator('[data-testid="last-name-input-testid"]').press('Tab');

  // Fill [data-testid="email-address-input-testid"]
  await page.locator('[data-testid="email-address-input-testid"]').fill('sandwichtestabcd@sky.uk');

  // Press Tab
  await page.locator('[data-testid="email-address-input-testid"]').press('Tab');

  // Fill [data-testid="confirm-email-address-input-testid"]
  await page.locator('[data-testid="confirm-email-address-input-testid"]').fill('sandwichtestabcd@sky.uk');

  // Press Tab
  await page.locator('[data-testid="confirm-email-address-input-testid"]').press('Tab');

  // Click [data-testid="mobile-number-input-testid"]
  await page.locator('[data-testid="mobile-number-input-testid"]').click();

  // Fill [data-testid="mobile-number-input-testid"]
  await page.locator('[data-testid="mobile-number-input-testid"]').fill('0878768678');

  // Click [data-testid="customer-details-checkout-card"] div:has-text("TitleSelectMrMrsMissMsDoctorBrotherBrigadierBaronBaronessBishopCanonCaptainCareC") >> nth=2
  await page.locator('[data-testid="customer-details-checkout-card"] div:has-text("TitleSelectMrMrsMissMsDoctorBrotherBrigadierBaronBaronessBishopCanonCaptainCareC")').nth(2).click();

  // Click [data-testid="date-of-birth-input-testid-day"]
  await page.locator('[data-testid="date-of-birth-input-testid-day"]').click();

  // Fill [data-testid="date-of-birth-input-testid-day"]
  await page.locator('[data-testid="date-of-birth-input-testid-day"]').fill('01');

  // Press Tab
  await page.locator('[data-testid="date-of-birth-input-testid-day"]').press('Tab');

  // Fill [data-testid="date-of-birth-input-testid-month"]
  await page.locator('[data-testid="date-of-birth-input-testid-month"]').fill('01');

  // Press Tab
  await page.locator('[data-testid="date-of-birth-input-testid-month"]').press('Tab');

  // Fill [data-testid="date-of-birth-input-testid-year"]
  await page.locator('[data-testid="date-of-birth-input-testid-year"]').fill('2000');

  // Press Tab
  await page.locator('[data-testid="date-of-birth-input-testid-year"]').press('Tab');

  // Click [data-testid="postcode-address"]
  await page.locator('[data-testid="postcode-address"]').click();

  // Click [data-testid="postcode-address"]
  await page.locator('[data-testid="postcode-address"]').click();

  // Fill [data-testid="postcode-address"]
  await page.locator('[data-testid="postcode-address"]').fill('D08A006');

  // Click [data-testid="search-address"]
  await page.locator('[data-testid="search-address"]').click();

  // Click [data-testid="address-search-item-D08A006"]
  await page.locator('[data-testid="address-search-item-D08A006"]').click();

  // Click [data-testid="confirm-customer-address"]
  await page.locator('[data-testid="confirm-customer-address"]').click();

  // Click [data-test-id="slot-0-0"]
  await page.locator('[data-test-id="slot-0-0"]').click();

  // Click [data-testid="basket-bar-checkout-button"]
  await page.locator('[data-testid="basket-bar-checkout-button"]').click();

  // Click text=Customer
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

  // Click [data-testid="authoriseButton"]
  await page.frameLocator('#payment-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="authoriseButton"]').click();

  // Click [data-testid="crpdAccountHolderNameInput"]
  await page.frameLocator('#billing-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="crpdAccountHolderNameInput"]').click();

  // Fill [data-testid="crpdAccountHolderNameInput"]
  await page.frameLocator('#billing-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="crpdAccountHolderNameInput"]').fill('Sanwich');

  // Press Tab
  await page.frameLocator('#billing-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="crpdAccountHolderNameInput"]').press('Tab');

  // Press CapsLock
  await page.frameLocator('#billing-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="changePaymentBICInput"]').press('CapsLock');

  // Fill [data-testid="changePaymentBICInput"]
  await page.frameLocator('#billing-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="changePaymentBICInput"]').fill('AIBKIE2DXXX');

  // Press Tab
  await page.frameLocator('#billing-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="changePaymentBICInput"]').press('Tab');

  // Fill [data-testid="changePaymentIBANInput"]
  await page.frameLocator('#billing-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="changePaymentIBANInput"]').fill('IE18AIBK93111871303833');

  // Press Tab
  await page.frameLocator('#billing-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="changePaymentIBANInput"]').press('Tab');

  // Click text=Confirm the caller has authority to use these payment details
  await page.frameLocator('#billing-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('text=Confirm the caller has authority to use these payment details').click();

  // Click [data-testid="submitButton"]
  await page.frameLocator('#billing-iframe-node').frameLocator('[data-testid="capture-payment-details-module"]').locator('[data-testid="submitButton"]').click();

  // Click [data-testid="basket-bar-payment-button"]
  await page.locator('[data-testid="basket-bar-payment-button"]').click();

  // Click [data-testid="name-panel-container"]
  await page.locator('[data-testid="name-panel-container"]').click();

  // Click [data-testid="customer-account-details"] >> nth=0
  await page.locator('[data-testid="customer-account-details"]').first().click();
  await page.waitForTimeout(20000);

  // Double click text=430000942051
  //await page.locator('text=430000942051').dblclick();

