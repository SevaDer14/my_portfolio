describe("User can navigate the app", () => {
  before(() => {
    cy.visit("/");
  });

  describe("to My Projects tab and it", () => {
    before(() => {
      cy.get("[data-cy=projects-tab]").click();
    });

    it("changes url", () => {
      cy.url().should("contain", "projects");
    });

    it("displays My Projects header", () => {
      cy.get("[data-cy=projects-header]").should("contain", "My Projects");
    });

    it("does not display About Me header", () => {
      cy.get("[data-cy=about-header]").should("not.exist");
    });

    it("does not display My CV", () => {
      cy.get("[data-cy=cv-header]").should("not.exist");
    });
  });

  describe("to My CV tab and it", () => {
    before(() => {
      cy.get("[data-cy=cv-tab]").click();
    });

    it("changes url", () => {
      cy.url().should("contain", "cv");
    });

    it("displays My CV", () => {
      cy.get("[data-cy=cv-header]").should("contain", "My CV");
    });

    it("does not display About Me header", () => {
      cy.get("[data-cy=about-header]").should("not.exist");
    });

    it("does not display My Projects", () => {
      cy.get("[data-cy=projects-header]").should("not.exist");
    });
  });

  describe("Back to About tab and it", () => {
    before(() => {
      cy.get("[data-cy=about-tab]").click();
    });

    it("displays About Me header", () => {
      cy.get("[data-cy=about-header]").should("contain", "About Me");
    });

    it("has a picture of me", () => {
      cy.get("[data-cy=photo-of-me]").should("exist");
    });

    it("has a description", () => {
      cy.get("[data-cy=about-me-paragraph]").should("exist");
    });

    it("does not display My Projects header", () => {
      cy.get("[data-cy=projects-header]").should("not.exist");
    });

    it("does not display My CV", () => {
      cy.get("[data-cy=cv-header]").should("not.exist");
    });

    it("has a picture", () => {
      cy.get("[data-cy=photo-of-me]").should("exist");
    });
  });
});
