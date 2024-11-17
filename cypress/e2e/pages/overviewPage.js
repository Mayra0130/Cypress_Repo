// cypress/e2e/pages/LoginPage.js
class overviewPage {
  finishButton = '.cart_button'

  clickFinish() {
    cy.get(this.finishButton).click();
  }

}

export default new overviewPage();