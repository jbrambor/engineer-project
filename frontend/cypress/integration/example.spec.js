describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/');

        cy.findByText("Learn React").should("be.visible");
    });
});
