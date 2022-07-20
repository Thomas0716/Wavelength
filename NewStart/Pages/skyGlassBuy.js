
const SKYGLASS_TV_SIZE='[data-testid="soip-product-tile-0"]';
const SKYGLASS_FRAME_SIZE='[data-testid="soip-frame-colour-tile-0"]';
const PAYMENT_UPFRONT='[data-testid="soip-payment-tile-2"]';
const CONFIRM_BTN='[data-testid="devices-confirm-button-test"]';

export async function skyGlassSelect(){
await page.waitForTimeout(2000);
            await page.waitForSelector(SKYGLASS_TV_SIZE);
            await page.click(SKYGLASS_TV_SIZE);
            await page.waitForTimeout(1000);
            await page.click(SKYGLASS_FRAME_SIZE);
            await page.waitForTimeout(1000);
            await page.click(PAYMENT_UPFRONT)
            await page.waitForSelector(CONFIRM_BTN);
            await page.click(CONFIRM_BTN);
            await page.waitForTimeout(3000); 
}