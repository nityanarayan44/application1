export class Application1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('application1-app h1')).getText();
  }
}
