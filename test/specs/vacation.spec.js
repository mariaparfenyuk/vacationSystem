const MainPage = require('../pageobjects/main.page')

describe('Vacation system', () => {
  it('Vacation system page is open', () => {
    MainPage.open()
    expect(browser.getUrl()).toEqual('https://test.webtech.by/vac-system/')
  })

  it('Check title on vacation system page', () => {
    MainPage.open()
    expect(MainPage.title.isDisplayed()).toEqual(true);
  })

  it('Check Add vacation button on vacation system page', () => {
    MainPage.open()
    expect(MainPage.addVacationButton.isDisplayed()).toEqual(true);
  })

  it('Popup add vacation open', () => {
    MainPage.open()
    MainPage.addVacationButton.waitForDisplayed()
    MainPage.clickAddVacation()
    expect(MainPage.popup.isDisplayed())
  })

  it('Add vacation', () => {
    MainPage.open()
    MainPage.addVacationButton.waitForDisplayed()
    MainPage.clickAddVacation()
    MainPage.addVacationInPopup('12/12/2021', '12/20/2021')
    expect(MainPage.closeTogle.isDisplayed())
    })

  it('Close vacation', () => {
    MainPage.closeVacation()
    expect(MainPage.closedStatus.isDisplayed())
    })
})


