module.exports = {
  async searchArrayForRequiredElement(array, text, index) 
  {
    for (let i = index; i < array.length; i++) {
      const txt = await array[i].innerText();
      if (txt.includes(text)) {
        testContext.addVariable('displayedText', txt);
        return array[i];
      }
    }
  }
}