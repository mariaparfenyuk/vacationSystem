module.exports = class TemplatePage {
  constructor({url, otherParams}) {
    this.url = url
  }
  
  isOpen() {
    if (browser.getUrl() === this.url) return true
  }

  open() {
    if (!this.isOpen()) browser.url('https://test.webtech.by/vac-system/')
  }
}
