class cartPage {
    checkoutButton = '.btn_action'
    cartItem= '.inventory_item_name';

clickCheckout(){
    cy.get(this.checkoutButton).click();
}

validarcarritoElemento1() {
      cy.get(this.cartItem).should('contain.text', 'Sauce Labs Bike Light')
      }
}

export default new cartPage();
