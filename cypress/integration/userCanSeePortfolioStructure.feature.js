describe("Portfolio interface", () => {
  it("successfully renders and redirects to About page", () => {
    cy.visit("http://localhost:3000");
    cy.url().should("contain", "about");
    cy.get("[data-cy=my-name]").should("contain", "SEVA DERIUSHKIN");
    cy.get("[data-cy=footer]").should(
      "contain",
      "Made with Semantic UI for React 17.0.2"
    );
    cy.get("[data-cy=about-header]").should("contain", "About Me");
  });
});
