await page.frame({
    name: 'capture-payment-details-module'
  }).click('text=Store card details for future use');
  // Click text=Read word for word - These card details can be used for future one off payments.
  await page.frame({
    name: 'capture-payment-details-module'
  }).click('text=Read word for word - These card details can be used for future one off payments.');
  // Click [data-testid="authoriseButton"]
  await page.frame({
    name: 'capture-payment-details-module'
  }).click('[data-testid="authoriseButton"]');
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
  // Double click text=430000999473
  await page.dblclick('text=430000999473');
  // Click [data-testid="customer-account-details"]
  await page.click('[data-testid="customer-account-details"]');