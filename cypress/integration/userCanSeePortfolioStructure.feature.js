describe("Portfolio interface", () => {
  it("successfully renders", () => {
    cy.visit("http://localhost:3000");
    cy.get("#header").should("contain", "SEVA DERIUSHKIN");
    cy.get("#footer").should("contain", "Made with React 17.0.2");
    cy.get("#hello").should("contain", "Hello World");
  });
});

describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  describe("to About tab and it", () => {
    beforeEach(() => {
      cy.get("#about-tab").click()
    })
  
    it("displays About Me header", () => {
      cy.get("#about-header").should("contain", "About Me");
    })

    it("does not display My Projects header", () => {
      cy.get("#projects-header").should("not.exist");
    })

    it("does not display Hello world", () => {
      cy.get("#hello").should("not.exist");
    })
  });

  describe("to My Projects tab and it", () => {
    beforeEach(() => {
      cy.get("#projects-tab").click()
    })
  
    it("displays My Projects header", () => {
      cy.get("#projects-header").should("contain", "My Projects");
    });

    it("does not display About Me header", () => {
      cy.get("#about-header").should("not.exist");
    });

    it("does not display Hello world", () => {
      cy.get("#hello").should("not.exist");
    });
  });

  describe("to Hello World tab and it", () => {
    beforeEach(() => {
      cy.get("#hello").click()
    })
  
    it("displays Hello World", () => {
      cy.get("#hello").should("contain", "Hello World");
    })

    it("does not display About Me header", () => {
      cy.get("#about-header").should("not.exist");
    })

    it("does not display Hello world", () => {
      cy.get("#projects-header").should("not.exist");
    })
  })
})