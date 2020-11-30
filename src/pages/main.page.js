import TemplatePage from '../pages/templatePage.js'
import vacationSystemUrl from '../config/urlConfig.js'

export default class MainPage extends TemplatePage {
  constructor(url) {
    super({url: vacationSystemUrl, otherParams: {}})
  }
}