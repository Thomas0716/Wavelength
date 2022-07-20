const USER_NAME= 'input[id="username"]';
const PASSWORD='input[id="password"]';
const CHECKBOX='input[id="agree-user-policy-checkbox"]';
const LOGIN_BTN = 'input[id="login-button"]';
export async function loginNext(){
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
       //await page.screenshot({path:'screen2.png', fullPage: true});
        await Submit.click();
        //await page.screenshot({path:'screen3.png', fullPage: true});
    }
        else {
            throw new Error('No Frame Displayed');
            
          }
}