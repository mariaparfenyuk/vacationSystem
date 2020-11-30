import {pageElements, vacationPopUp} from '../config/selectors.js'
// import {vacationSystemUrl}
import TemplatePage from '../pages/templatePage.js'
import MainPage from '../pages/main.page.js'

export default class VacationApp {
  constructor(url) {
    this.url = url
    this.pageElements = pageElements
    this.vacationPopUp = vacationPopUp
    this.templatePage = new TemplatePage(this.url)
    this.mainPage = new MainPage(this.url)
  }

}