describe("User can see CV", () => {
  before(() => {
    cy.visit("/")
    cy.get("[data-cy=cv-tab]").click();
  })

  it("displays headers for cv sections", () => {
    cy.get(['data-cy=personal-info-header']).should('contain.text', 'Personal Info')
    cy.get(['data-cy=work-experience-header']).should('contain.text', 'Work Experience')
    cy.get(['data-cy=education-header']).should('contain.text', 'Education')
  })

  it("displays content for personal info", () => {
    cy.get("[data-cy=personal-info]").within(() => {
      cy.get("[data-cy=adress]").should("contain.text","Knektebacken 12")
      cy.get("[data-cy=city]").should("contain.text","Billdal")
      cy.get("[data-cy=country]").should("contain.text","Sweden")
      cy.get("[data-cy=phone]").should("contain.text","+46793064348")
      cy.get("[data-cy=email]").should("contain.text","vsevolod.deriushkin@gmail.com")
      cy.get("[data-cy=github]").should("contain.text","SevaDer14")
    })
  })

  it("displays content for work experience", () => {
    cy.get("[data-cy=work-experience]").within(() => {
      cy.get("[data-cy=job-1]").should("contain.text","Lifeguard")
      cy.get("[data-cy=job-2]").should("contain.text","Research Engineer")
      cy.get("[data-cy=job-3]").should("contain.text","Junior Researcher")      
    })
  })

  it("displays content for education", () => {
    cy.get("[data-cy=education]").within(() => {
      cy.get("[data-cy=education-1]").should("contain.text","Bachelors")
      cy.get("[data-cy=education-2]").should("contain.text","Masters")
      cy.get("[data-cy=education-3]").should("contain.text","Fullstack Web Developer")      
    })
  })  
})