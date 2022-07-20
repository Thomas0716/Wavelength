
const { chromium } = require('playwright');
//Login
const USER_NAME= 'input[id="username"]';
const PASSWORD='input[id="password"]';
const CHECKBOX='input[id="agree-user-policy-checkbox"]';
const LOGIN_BTN = 'input[id="login-button"]';
const url='https://dthing01u01.bskyb.com/residential/?channel=DIRECT';
//Search
const SEARCH_TEXT= 'input[id="customer-lookup-quick-search"]';
const SEARCH_BTN='[id="quick-search-button"]';
const CREATE_NEW_SKY_CUS='[id="menu-button--menu"]';
const SKY_GLASS_CUS='text="Sky Glass"';
const CONTACT_TYPE='[id="channel-select-id"]';
const ROI_RADIO='input[label="country-radio-IRL-label"]';
const COUNTINUE_BTN='[id="prospect-channel-overlay-continue-button"]';
//Buy Journey Sky Glass Select
const SKYGLASS_TV_SIZE='[data-testid="soip-product-tile-0"]';
const SKYGLASS_FRAME_SIZE='[data-testid="soip-frame-colour-tile-0"]';
const PAYMENT_UPFRONT='[data-testid="soip-payment-tile-2"]';
const CONFIRM_BTN='[data-testid="devices-confirm-button-test"]';

//check out Sky Glass
const PRE_CHECKOUT ='[data-testid="basket-bar-key-facts-container"]';
const CONSENT_CHK1='#key-facts-drawer > div:nth-child(2) > label > svg';
const CONSENT_CHK2='#key-facts-drawer > div:nth-child(3) > label > svg';
const CONSENT_CHK3='#key-facts-drawer > div:nth-child(4) > label > svg';
const CONSENT_CHK4='#key-facts-drawer > div:nth-child(5) > label > svg';
const CONSENT_CHK5='#key-facts-drawer > div:nth-child(6) > label > svg';
const CONSENT_CHK6='#key-facts-drawer > div:nth-child(7) > label > svg';
const CONSENT_CHK7='[data-testid="accept-contract-0"]';
const CHECKOUT_BTN='[data-testid="basket-bar-products-button"]';

//Form Fill
const MARKETING_RADIO='[data-testid="marketing-preferences-radio-testid-OPTED_IN-label"]';
const PRE_NAME='[data-testid="select-title-testid"]';
const FORE_NAME='[data-testid="first-name-input-testid"]';
const FAMILY_NAME='[data-testid="last-name-input-testid"]';
const EMAIL_ADD='[data-testid="email-address-input-testid"]';
const CONFIRM_EMAIL_ADD='[id="confirm-email-address-input-id-two"]'
const MOBILE_NO='[data-testid="mobile-number-input-testid"]';
const DATE='[data-testid="date-of-birth-input-testid-day"]';
const MONTH='[data-testid="date-of-birth-input-testid-month"]';
const YEAR='[data-testid="date-of-birth-input-testid-year"]';
const POST_CODE='[data-testid="postcode-address"]';
const SEARCH_ADD_BTN='[id="search-address"]';
const CONFIRM_ADDRESS='[data-testid="confirm-customer-address"]';
const CONFIRM_ADD_BTN='[id="confirm-customer-address-button"]';
const SLOT=id='[id="slot-0-0"]';
const PAYMENT_BTN='[id="basket-bar-checkout-button"]';

// Consent Update
const CONSENT1= '[id="use-details-question-true-label"]';
const CONSENT2= '[id="previous-address-required-question-true-label"]';
const CONSENT_BTN='[id="confirm-affordability-check"]';

//payment 1
    // const frame = await page.$('#payment-iframe-node');
    // const frame1=frame.frameLocator('[data-testid="capture-payment-details-module"]');
    // const customer_radio='text=Customer';
    // const CC='[data-testid="paymentAuthCreditCardNumberInput"]';
    // const SecurityCode='[data-testid="paymentAuthSecurityCodeInput"]';
    // const CardHolderName='[data-testid="paymentAuthCardHolderNameInput"]';
    // const yearExpiry='[data-testid="paymentAuthExpiryDateInput_2"]';
    // const monthExpiry='[data-testid="paymentAuthExpiryDateInput_1"]';
    // const store_card='text=Store card details for future use';
    // const consent_cardpayment='text=Read word for word - These card details can be used for future one off payments';
    // const authorise_card='[data-testid="authoriseButton"]';
    
// }

(async () => {
    const browser = await chromium.launch({
        headless: false,
        //slowMo : 10000
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url);
    await page.waitForTimeout(2000);
    const frame1 = await page.$('iframe[title="SignIn"]');
    if (frame1) {
        const frame = await page.$('iframe[title="SignIn"]');
        const frame2 = await frame.contentFrame();
        const usr = await frame2.$(USER_NAME);
        await usr.fill('tan13');
        const pass = await frame2.$(PASSWORD);
        await pass.fill('Password!');
        const Check = await frame2.$(CHECKBOX);
        await Check.click();
        const Submit = await frame2.$(LOGIN_BTN);
        await Submit.click();
    }
        else {
            throw new Error('No Frame Displayed');
          }
    //Search Wavelength
            await page.waitForTimeout(2000);
            await page.click(SEARCH_TEXT);
            await page.fill(SEARCH_TEXT, 'xx');
            await page.click(SEARCH_BTN);

      //Select New Customer Type
            await page.click(CREATE_NEW_SKY_CUS);
            await page.hover(SKY_GLASS_CUS);
            await page.click(SKY_GLASS_CUS);
            await page.waitForTimeout(1000);
            await page.click(CONTACT_TYPE);
            const CONTACT_DPD = await page.$(CONTACT_TYPE);
            await CONTACT_DPD.selectOption({ value: 'email' });
            await page.hover('text="ROI"');
            await page.click('text="ROI"');
           // Sky Glass Selection
            
            await page.click(COUNTINUE_BTN);
            await page.waitForTimeout(2000);
            await page.waitForSelector(SKYGLASS_TV_SIZE);
            await page.click(SKYGLASS_TV_SIZE);
            await page.waitForTimeout(1000);
            await page.click(SKYGLASS_FRAME_SIZE);
            await page.waitForTimeout(1000);
            await page.click(PAYMENT_UPFRONT)
            await page.waitForSelector(CONFIRM_BTN);
            await page.click(CONFIRM_BTN);
//Check out SKy Glass
            await page.waitForTimeout(3000);
            await page.waitForSelector(PRE_CHECKOUT);
            await page.click(PRE_CHECKOUT);
            await page.waitForTimeout(2000);
            await page.click(CONSENT_CHK1);
            await page.waitForSelector(CONSENT_CHK2);
            await page.click(CONSENT_CHK2);
            await page.waitForSelector(CONSENT_CHK3);
            await page.click(CONSENT_CHK3);
            await page.waitForSelector(CONSENT_CHK4);
            await page.click(CONSENT_CHK4);
            await page.waitForSelector(CONSENT_CHK5);
            await page.click(CONSENT_CHK5);
            await page.waitForSelector(CONSENT_CHK6);
            await page.click(CONSENT_CHK6);
            await page.waitForSelector(CONSENT_CHK7);
            await page.click(CONSENT_CHK7);
            await page.waitForSelector(CHECKOUT_BTN);
            await page.click(CHECKOUT_BTN);
            await page.waitForTimeout(3000);

         //Form FIll
        await page.waitForSelector(MARKETING_RADIO);
        await page.click(MARKETING_RADIO);
        await page.waitForTimeout(2000);
        await page.waitForSelector(PRE_NAME);
        await page.click(PRE_NAME);
        const PreName = await page.$(PRE_NAME);
        await PreName.selectOption({ value: 'MR' });
        await page.fill(FORE_NAME, 'sandwich');
        await page.fill(FAMILY_NAME, 'xyz');
        await page.fill(EMAIL_ADD, 'sandwichtestxyz@sky.uk');
        await page.fill(CONFIRM_EMAIL_ADD,'sandwichtestxyz@sky.uk');
        await page.fill(MOBILE_NO, '0878768678');
        await page.fill(DATE, '01');
        await page.fill(MONTH, '01');
        await page.fill(YEAR, '2000');
        await page.fill(POST_CODE, 'D08A006');
        await page.click(SEARCH_ADD_BTN);
        await page.waitForTimeout(2000);
        await page.keyboard.press('Tab');
        await page.waitForTimeout(1000);
        await page.keyboard.press('Enter');


       // await page.waitForSelector(CONFIRM_ADDRESS);
        // await page.click(CONFIRM_ADDRESS);
        await page.waitForSelector(CONFIRM_ADD_BTN);
        await page.click(CONFIRM_ADD_BTN);
        await page.waitForTimeout(2000);
        await page.click(SLOT);
        await page.waitForTimeout(2000);
        await page.waitForSelector(PAYMENT_BTN);
        await page.click(PAYMENT_BTN);
        await page.waitForTimeout(3000);

  //Consent Update
  await page.click(CONSENT1);
  await page.click(CONSENT2);
  await page.click(CONSENT_BTN);


//Payment 1
// if (frame) {
//     const frame2 = await frame.contentFrame();
//     const frame3= await frame1.contentFrame();
//     const customerRadio=frame3.$(customer_radio);
//     await page.click(customerRadio);
//     const CCard=frame3.$(CC);
//     await page.fill(CCard);
//     const security_code=frame3.$(SecurityCode);
//     await page.fill(security_code);
//     const customer_name=frame3.$(CardHolderName);
//     await page.fill(customer_name);
//     const year_expiry=frame3.$(yearExpiry);
//     await page.fill(year_expiry);
//     const month_expiry=frame3.$(monthExpiry);
//     await page.fill(month_expiry);
//     const card_store=frame3.$(store_card);
//     await page.click(card_store);
//     const card_consent=frame3.$(consent_cardpayment);
//     await page.click(card_consent);
//     const Authorise_btn=frame3.$(authorise_card);
//     await page.click(Authorise_btn);
//   }
//   else {
//     throw new Error('No Frame Displayed');
    
//   }
    
})();
// await page.click('input[id="customer-lookup-quick-search"]');
//   await page.fill('input[id="customer-lookup-quick-search"]', '8BA');
//   await page.click('button[data-testid="quick-search-button"]');
//   await page.click('button[id="menu-button--menu"]');
//   await page.hover('text="Broadband and talk"');
//   await page.click('text="Broadband and talk"');

//to handle Dropdown
// const addressDropdown = await page.$(this.dropdownAddress);
//     await addressDropdown.selectOption({ index: 10 });
//to handle radio button
// const radio = await page.$$(this.customerLiving);
//     await radio[0].check();