describe("User can see a list of projects", () => {
  before(() => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=projects-tab]").click();
  });

  it("displays the first project", () => {
    cy.get("[data-cy=project-1]").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "My First Website");
      cy.get(".description").should(
        "contain",
        "Was practicing some HTML and CSS during the prep course"
      );
      cy.get("[data-cy=button-weblink]").should("contain", "Website");
      cy.get("[data-cy=button-github]").should("contain", "Github");
    });
  });

  it("displays the second project", () => {
    cy.get("[data-cy=project-2]").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Impossible FizzBuzz");
      cy.get(".description").should(
        "contain",
        "Play FizzBuzz against computer. Answer time is limited so don't think for too long."
      );
      cy.get("[data-cy=button-github]").should("contain", "Github");
    });
  });

  it("displays the third project", () => {
    cy.get("[data-cy=project-3]").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Address Book");
      cy.get(".description").should(
        "contain",
        "Simple app that lets you to save contacts. Practiced working with LocalStorage"
      );
      cy.get("[data-cy=button-github]").should("contain", "Github");
      cy.get("[data-cy=button-weblink]").should("contain", "Website");
    });
  });

  it("displays the fourth project", () => {
    cy.get("[data-cy=project-4]").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "BMI Calculator");
      cy.get(".description").should(
        "contain",
        "App that lets you calculate your BMI and returns your health status"
      );
      cy.get("[data-cy=button-github]").should("contain", "Github");
    });
  });

  it("displays the fifth project", () => {
    cy.get("[data-cy=project-5]").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Library Challenge");
      cy.get(".description").should(
        "contain",
        "Practiced making backend application in Ruby during the week 1 of Bootcamp"
      );
      cy.get("[data-cy=button-github]").should("contain", "Github");
    });
  });

  it("displays the sixth project", () => {
    cy.get("[data-cy=project-6]").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "ATM Challenge");
      cy.get(".description").should(
        "contain",
        "Practiced making backend application in Ruby during the week 1 of Bootcamp"
      );
      cy.get("[data-cy=button-github]").should("contain", "Github");
    });
  });
});

describe("Buttons on Project Cards link to external resources", () => {
  before(() => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=projects-tab]").click();
  });

  it("checks the first projects links", () => {
    cy.get("[data-cy=project-1]").within(() => {
      cy.get("[data-cy=button-github]")
        .should("have.attr", "href")
        .and("equal", "https://github.com/SevaDer14/sevader14.github.io");
      cy.get("[data-cy=button-weblink]")
        .should("have.attr", "href")
        .and("equal", "https://sevader14.github.io/");
    });
  });

  it("checks the second projects links", () => {
    cy.get("[data-cy=project-2]").within(() => {
      cy.get("[data-cy=button-github]")
        .should("have.attr", "href")
        .and("equal", "https://github.com/SevaDer14/fizz_buzz");
    });
  });

  it("checks the third projects links", () => {
    cy.get("[data-cy=project-3]").within(() => {
      cy.get("[data-cy=button-github]")
        .should("have.attr", "href")
        .and("equal", "https://github.com/SevaDer14/address_book/tree/master");
      cy.get("[data-cy=button-weblink]")
        .should("have.attr", "href")
        .and("equal", "https://sevader14-address-book.netlify.app/");
    });
  });

  it("checks the fourth projects links", () => {
    cy.get("[data-cy=project-4]").within(() => {
      cy.get("[data-cy=button-github]")
        .should("have.attr", "href")
        .and(
          "equal",
          "https://github.com/SevaDer14/bmi_calculator/tree/functionality"
        );
    });
  });

  it("checks the fifth projects links", () => {
    cy.get("[data-cy=project-5]").within(() => {
      cy.get("[data-cy=button-github]")
        .should("have.attr", "href")
        .and("equal", "https://github.com/SevaDer14/library-challenge");
    });
  });

  it("checks the sixth projects links", () => {
    cy.get("[data-cy=project-6]").within(() => {
      cy.get("[data-cy=button-github]")
        .should("have.attr", "href")
        .and("equal", "https://github.com/SevaDer14/library-challenge");
    });
  });
});
