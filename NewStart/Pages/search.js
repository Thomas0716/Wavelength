const SEARCH_TEXT= 'input[id="customer-lookup-quick-search"]';
const SEARCH_BTN='[id="quick-search-button"]';
const CREATE_NEW_SKY_CUS='[id="menu-button--menu--1"]';
const SKY_GLASS_CUS='text="Sky Glass"';
const CONTACT_TYPE='[id="channel-select-id"]';
const ROI_RADIO='input[label="country-radio-IRL-label"]';
const COUNTINUE_BTN='[id="prospect-channel-overlay-continue-button"]';
 

export async function search(){
    await page.waitForTimeout(2000);
    await page.click(SEARCH_TEXT);
    await page.fill(SEARCH_TEXT, 'xx');
    //await page.screenshot({path:'screen4.png', fullPage: true});
    await page.click(SEARCH_BTN);
}
export async function newcustomer(){
            await page.waitForSelector(CREATE_NEW_SKY_CUS);
            await page.click(CREATE_NEW_SKY_CUS);
            await page.hover(SKY_GLASS_CUS);
            await page.click(SKY_GLASS_CUS);
            await page.waitForTimeout(1000);
            await page.click(CONTACT_TYPE);
            const CONTACT_DPD = await page.$(CONTACT_TYPE);
            await CONTACT_DPD.selectOption({ value: 'email' });
            await page.hover('text="UK"');
            await page.click('text="UK"');
            await page.click(COUNTINUE_BTN);
}