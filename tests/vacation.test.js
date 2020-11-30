import VacationApp from '../src/pages/vacation.js'
import {pageElements, vacationPopUp} from '../src/config/selectors.js'
import {vacationSystemUrl} from '../src/config/urlConfig.js'
import assert from 'assert'

const vacationApp = new VacationApp (vacationSystemUrl.urlVacation)

describe('Vacation System', () => {
  it ('just for test launcher', () => {
    console.log('Yes!')
  })
  it('Vacation system page is open', () => {
    vacationApp.mainPage.open()
    assert.strictEqual(vacationApp.mainPage.isOpen(), true, 'Main page did not open')
  })
})