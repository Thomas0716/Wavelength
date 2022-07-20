const PRE_CHECKOUT ='[data-testid="basket-bar-key-facts-container"]';
// const CONSENT_CHK1='#key-facts-drawer > div:nth-child(2) > label > svg';
// const CONSENT_CHK2='#key-facts-drawer > div:nth-child(3) > label > svg';
// const CONSENT_CHK3='#key-facts-drawer > div:nth-child(4) > label > svg';
// const CONSENT_CHK4='#key-facts-drawer > div:nth-child(5) > label > svg';
// const CONSENT_CHK5='#key-facts-drawer > div:nth-child(6) > label > svg';
// const CONSENT_CHK6='#key-facts-drawer > div:nth-child(7) > label > svg';
// const CONSENT_CHK7='[data-testid="accept-contract-0"]';
const CHECKOUT_BTN='[data-testid="basket-bar-products-button"]';
const KEYFACT='[id="keyfacts-icon-text-text"]';
const CONSENT_CHK= '//*[@id="key-facts-drawer"]/div/label';
const CONSENT_CHK1='//*[@id="accept-contract-0"]/div/label';

export async function GlassBuyCheckout(){
    await page.waitForSelector(PRE_CHECKOUT);
    await page.click(PRE_CHECKOUT);
    await page.waitForSelector(KEYFACT);
    const CON_LEN= await page.$$(CONSENT_CHK); 
let i=0;
    while (i<CON_LEN.length) {
    await page.locator(CONSENT_CHK).first().click();
    await page.waitForTimeout(3000);
    i++;
    await page.waitForSelector(KEYFACT);
    } 
    await page.check(CONSENT_CHK1);
    await page.waitForSelector(CHECKOUT_BTN);
    await page.click(CHECKOUT_BTN);
    await page.waitForTimeout(3000);
   
    // await page.waitForTimeout(3000);
    // await page.waitForSelector(PRE_CHECKOUT);
    // await page.click(PRE_CHECKOUT);
    // await page.waitForSelector(CONSENT_CHK1);
    // await page.click(CONSENT_CHK1);
    // await page.waitForSelector(CONSENT_CHK2);
    // await page.click(CONSENT_CHK2);
    // await page.waitForSelector(CONSENT_CHK3);
    // await page.click(CONSENT_CHK3);
    // await page.waitForSelector(CONSENT_CHK4);
    // await page.click(CONSENT_CHK4);
    // await page.waitForSelector(CONSENT_CHK5);
    // await page.click(CONSENT_CHK5);
    // await page.waitForSelector(CONSENT_CHK6);
    // await page.click(CONSENT_CHK6);
    // await page.waitForSelector(CONSENT_CHK7);
    // await page.click(CONSENT_CHK7);
    // await page.waitForTimeout(2000);
    // await page.waitForSelector(CHECKOUT_BTN);
    // await page.click(CHECKOUT_BTN);
    // await page.waitForTimeout(3000);
}
