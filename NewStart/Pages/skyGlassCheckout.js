const PRE_CHECKOUT ='[data-testid="basket-bar-key-facts-container"]';
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
   
}
