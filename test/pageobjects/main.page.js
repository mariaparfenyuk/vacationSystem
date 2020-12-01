const TemplatePage = require('./templatePage') 

class MainPage extends TemplatePage {
  constructor(url) {
    super({url, otherParams: {}})
  }

  get title () { return $("//span[text()='Vacations']") }
  get addVacationButton () { return $("//*[@id='add-new-vac']") }
  get closeTogle () {return $("span.mdl-switch__ripple-container.mdl-js-ripple-effect.mdl-ripple--center")}
  get closedStatus () {return $("//*[@id='vacation-list']/tbody/tr/td[5]")}

  get popup () { return $("dialog.mdl-dialog.add-modal")}
  get popupCheckBox () { return $("span.mdl-checkbox__ripple-container.mdl-js-ripple-effect.mdl-ripple--center")}
  get fromDate () { return $("//*[@id='from']")}
  get endDate () { return $("//*[@id='to']")}
  get errorMessage () {return $("//*[@id='errorMessage']/span")}
  get saveButton () { return $("//*[@id='save']")}
    
  clickAddVacation () {
    this.addVacationButton.click()
  }

  addVacationInPopup(from, end) {
    this.popupCheckBox.click()
    this.fromDate.setValue(from)
    this.endDate.setValue(end)
    this.saveButton.click()
  }

  closeVacation() {
    this.closeTogle.click()
  }
}

module.exports = new MainPage()
