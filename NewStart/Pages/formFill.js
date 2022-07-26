import { assert } from "chai";
import {generic} from "../Helper/Test Data/generic";

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
const SLOT='[id="slot-0-0"]';
const PAYMENT_BTN='[id="basket-bar-consent-button"]';
const TITLE_BOX='[data-testid="select-title-field"]';

export async function form_fill(){
    await page.waitForSelector(MARKETING_RADIO);
    await page.click(MARKETING_RADIO);
    await page.waitForTimeout(2000);
    await page.waitForSelector(PRE_NAME);
    await page.click(PRE_NAME);
    const PreName = await page.$(PRE_NAME);
    await PreName.selectOption({ value: 'MR' });
    await page.fill(FORE_NAME, 'sandwich');
    await page.fill(FAMILY_NAME, 'xyz');
    await page.fill(EMAIL_ADD, 'sandwichtest111@sky.uk');
    await page.fill(CONFIRM_EMAIL_ADD,'sandwichtest111@sky.uk');
    await page.fill(MOBILE_NO, '07587578573');
    await page.fill(DATE, '01');
    await page.fill(MONTH, '01');
    await page.fill(YEAR, '2000');
    await page.fill(POST_CODE, 'EH88BA');
    await page.click(SEARCH_ADD_BTN);
    await page.waitForTimeout(2000);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Enter');
    await page.waitForSelector(CONFIRM_ADD_BTN);
    await page.click(CONFIRM_ADD_BTN);
    await page.waitForTimeout(2000);
    await page.click(SLOT);
    await page.waitForTimeout(2000);
    await page.waitForSelector(PAYMENT_BTN);
    await page.click(PAYMENT_BTN);
    await page.waitForTimeout(3000);

}
