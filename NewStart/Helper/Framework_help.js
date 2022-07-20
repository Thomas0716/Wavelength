
//   it('BB Line Check', async () => {
//     await home.postcodeAndAddress();
//     await home.customerLivingStatus('MOVING');
//     const imgURL = await page.$('img');
//     expect(await imgURL.getAttribute('src')).not.toBeNull();
//   });

//   it('Product Selection', async () => {
//     await product.productSelection(bbProduct);
//     await product.talkPackage();
//     await product.productSubmit();
//     expect(await product.getTitle()).toBe('Scroll if you want to go');
//   });

//   it('YourDetails', async () => {
//     await yourDetails.checkout();
//     expect(await yourDetails.getTitle()).toBe('Checkout');
//   });

//   it('Additional Details Page', async () => {
//     await additionalDetails.addressSelection();
//     await additionalDetails.customerProfile();
//     await additionalDetails.takeScreenshot();
//     await additionalDetails.submitAdditionalDetails();
//     expect(await page.title()).not.toBeNull();
//   });

//   it('Review Order Page', async () => {
//     await reviewOrder.takeScreenshot();
//     await reviewOrder.orderSubmit();
//     expect(await page.title()).not.toBeNull();
//   });

//   it('Payments Page', async () => {
//     await payments.enterPaymentDetails();
//     expect(await page.title()).not.toBeNull();
//   });

//   it('Order Details Page', async () => {
//     await orderDetails.orderConfirmation();
//     await orderDetails.takeScreenshot();
//     expect(await page.title()).not.toBeNull();
//   });

// const selectTimeSlotisVisible = await page.isVisible(this.TIMESLOTSELECTOR);
//     assert.isTrue(selectTimeSlotisVisible, 'Time slot is visible');
//     const selectTimeOption = await page.selectOption(this.SELECTTIMEDROPDOWN, { index: 1 });
//     assert.isArray(selectTimeOption, 'Time slot is selected from the array list');

// function to press button -------

// async clickContinueButton() {
//     await page.isVisible(this.CONTINUEBUTTON);
//     const continueButtonText = await page.innerText(this.CONTINUEBUTTON);
//     assert.equal(continueButtonText, 'Continue', 'Continue button not seen on the page');
//     await page.click(this.CONTINUEBUTTON);
//     page.once('load', () => log('Summary Page loaded!', LogType.Success));
//   }

// function to confirm the page loads -------
// async navigatetoBroadbandPageToConfirmPageLoads(): Promise<void> {
//     await page.goto(journeyUrlChecksBroadband, { waitUntil: 'domcontentloaded' });
//     page.once('load', () => log('Broadband Checks Page loaded!', LogType.Success));
//   }

// OVERALL
//     const overallGreyMot = await page.isChecked(this.OVERALL_GREY_ID);
//     assert.isTrue(overallGreyMot, 'Broadband Overall rag status is not set to Grey');


// function to select required button from an array ------
// async checkTheCheckboxButtonForWifiAndVerifyProductInSummary(wifi: string): Promise<void> {
//     await page.waitForSelector(this.PRODUCTS);
//     const productCheckbox = await generic.getRequiredArrayType(this.PRODUCTS);
//     /**
//        Total products are 7, need to check the Wifi which is index = 1
//      */
//     for (let index = 1; index < productCheckbox.length - 5; index++) {
//       await productCheckbox[index].click();
//       const displayedArray = await page.$$(this.PREVIEW_SUMMARY);
//       assert.isArray(displayedArray, 'array of products displayed under Summary');
//       const requiredSummary = await generic.arrayToSearchRequiredElement(displayedArray, 'WiFi');
//       assert.isOk(requiredSummary, this.PREVIEW_SUMMARY);
//       const innerText = await requiredSummary.innerText();
//       assert.include(innerText, wifi, 'WiFi is not seen under Summary');
//     }
//   }

// Function to check page title ------------
// async navigatetoServiceCheckerPageToConfirmPageLoads(pageTitle: string): Promise<void> {
//     await page.goto(journeyUrlServiceChecker, { waitUntil: 'domcontentloaded' });
//     page.once('load', () => log('Service Checker Page loaded!', LogType.Success));
//     const header: string = await generic.requiredScreenDisplayed(this.HEADERBANNER);
//     assert.equal(header, pageTitle, 'Expected header not displayed');
//   }



// async pendingVisitScreenDisplayed() {
//   const displayedArray = await page.$$(this.IN_FLIGHT_ORDERS);
//   assert.isArray(displayedArray, 'array of visit event title displayed');
//   const requiredRow = await generic.searchArrayForRequiredElement(displayedArray, 'visit');
//   assert.isOk(requiredRow, this.REQUIRE_ROW);
//   const innerText = await requiredRow.innerText();
//   assert.include(innerText.toLowerCase(), 'visit', 'Expected visit not seen');
// }