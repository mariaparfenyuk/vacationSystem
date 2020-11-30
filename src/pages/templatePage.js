export default class TemplatePage {
  constructor({url, otherParams}) {
    this.url = url
  }

  isOpen() {
    if (browser.getUrl() === this.url) return true
  }

  open() {
    if (!this.isOpen()) browser.url(this.url)
  }

//   changeInputValue(selector, value) {
//     return $(selector).setValue(value)
//   }

//   clickButton(selector) {
//     return $(selector).click()
//   }

//   notEmptySelector(selector) {
//     if ($(selector) !== '') return true
//   }

//   checkSelector(selector) {
//     return $(selector)
//   }

//   checkElements(selector) {
//     let result = []
//     for (let [selectorName, selector] of Object.entries(selectors)) {
//       try {
//         $(selector).isExisting() ? true : result.push(`${selectorName} = ${selector}`)
//       }
//       catch(e) {
//         console.log(e)
//       }
//     }
//     return result
//   }
 }