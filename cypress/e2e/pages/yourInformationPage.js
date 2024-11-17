// cypress/e2e/pages/LoginPage.js
class yourInformationPage {
    // Selectores
    firstNameField = '#first-name';
    lastNameField = '#last-name';
    zipCodeField = '#postal-code';

    continueButton = '.cart_button';
  
    // Métodos llenar información
    llenarFormulario(firstNameField, lastNameField, zipCodeField ) {
        cy.get(this.firstNameField).type(firstNameField);
        cy.get(this.lastNameField).type(lastNameField);
        cy.get(this.zipCodeField).type(zipCodeField);
    }
   
    clicContinue() {
      cy.get(this.continueButton).click();
    }
      
    }
    
  export default new yourInformationPage();