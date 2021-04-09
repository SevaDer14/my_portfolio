describe("Portfolio interface", () => {
  it("successfully renders and redirects to About page", () => {
    cy.visit("http://localhost:3000");
    cy.url().should('contain','about')
    cy.get("#my-name").should("contain", "SEVA DERIUSHKIN");
    cy.get("#footer").should("contain", "Made with Semantic UI for React 17.0.2");
    cy.get("#about-header").should("contain", "About Me");
  });
});

describe("User can navigate the app", () => {
  before(() => {
    cy.visit("http://localhost:3000")
  })  

  describe("to My Projects tab and it", () => {
    before(() => {
      cy.get("#projects-tab").click()
    })

    it("changes url", () => {
      cy.url().should('contain','projects')
    });
  
    it("displays My Projects header", () => {
      cy.get("#projects-header").should("contain", "My Projects");
    });

    it("does not display About Me header", () => {
      cy.get("#about-header").should("not.exist");
    });

    it("does not display My CV", () => {
      cy.get("#cv-header").should("not.exist");
    });
  });

  describe("to My CV tab and it", () => {
    before(() => {
      cy.get("#cv-tab").click()
    })

    it("changes url", () => {
      cy.url().should('contain','cv')
    });
  
    it("displays Hello World", () => {
      cy.get("#cv-header").should("contain", "My CV");
    })

    it("does not display About Me header", () => {
      cy.get("#about-header").should("not.exist");
    })

    it("does not display Hello world", () => {
      cy.get("#projects-header").should("not.exist");
    })
  })

  describe("Back to About tab and it", () => {
    before(() => {
      cy.get("#about-tab").click()
    })
  
    it("displays About Me header", () => {
      cy.get("#about-header").should("contain", "About Me");
    })

    it("does not display My Projects header", () => {
      cy.get("#projects-header").should("not.exist");
    })

    it("does not display Hello world", () => {
      cy.get("#cv-header").should("not.exist");
    })

    it("has a picture", () => {
      cy.get("#photo-of-me").should("exist")
    })    
  });
})

describe('About Me page is properly formatted:', () => {
  before(() => {
    cy.visit("http://localhost:3000")
  })

  it("has a picture of me", () => {
    cy.get("#photo-of-me").should("exist")
  })

  it("has a description", () => {
    cy.get("#about-me-paragraph").should("exist")
  })
})

describe("User can see a list of projects", () => {
  before(() => {
    cy.visit('http://localhost:3000')
    cy.get('#projects-tab').click()
  })

  it("displays the first project", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").should("exist")
      cy.get(".header").should("contain", "My First Website")
      cy.get(".description").should("contain", "Was practicing some HTML and CSS during the prep course")
      cy.get("#buttonWeblink").should("contain", "Website")
      cy.get("#buttonGithub").should("contain", "Github")      
    })
  })

  it("displays the second project", () => {
    cy.get("#project-2").within(() => {
      cy.get(".image").should("exist")
      cy.get(".header").should("contain", "Impossible FizzBuzz")
      cy.get(".description").should("contain", "Play FizzBuzz against computer. Answer time is limited so don't think for too long.")
      cy.get("#buttonGithub").should("contain", "Github") 
    })
  })

  it("displays the third project", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist")
      cy.get(".header").should("contain", "Address Book")
      cy.get(".description").should("contain", "Simple app that lets you to save contacts. Practiced working with LocalStorage")
      cy.get("#buttonGithub").should("contain", "Github")
      cy.get("#buttonWeblink").should("contain", "Website")
    })
  })

  it("displays the fourth project", () => {
    cy.get("#project-4").within(() => {
      cy.get(".image").should("exist")
      cy.get(".header").should("contain", "BMI Calculator")
      cy.get(".description").should("contain", "App that lets you calculate your BMI and returns your health status")
      cy.get("#buttonGithub").should("contain", "Github")      
    })
  })

  it("displays the fifth project", () => {
    cy.get("#project-5").within(() => {
      cy.get(".image").should("exist")
      cy.get(".header").should("contain", "Library Challenge")
      cy.get(".description").should("contain", "Practiced making backend application in Ruby during the week 1 of Bootcamp")
      cy.get("#buttonGithub").should("contain", "Github")      
    })
  })

  it("displays the sixth project", () => {
    cy.get("#project-6").within(() => {
      cy.get(".image").should("exist")
      cy.get(".header").should("contain", "ATM Challenge")
      cy.get(".description").should("contain", "Practiced making backend application in Ruby during the week 1 of Bootcamp")
      cy.get("#buttonGithub").should("contain", "Github")      
    })
  })
})

describe('Buttons on Project Cards link to external resources', () => {
  before(() => {
    cy.visit('http://localhost:3000')
    cy.get('#projects-tab').click()
  })

  it('checks the first projects links', () => {
    cy.get("#project-1").within(() => {
      cy.get("#buttonGithub").should('have.attr','href').and('equal','https://github.com/SevaDer14/sevader14.github.io')
      cy.get("#buttonWeblink").should('have.attr','href').and('equal','https://sevader14.github.io/')   
    })
  })
  
  it('checks the second projects links', () => {
    cy.get("#project-2").within(() => {
      cy.get("#buttonGithub").should('have.attr','href').and('equal',"https://github.com/SevaDer14/fizz_buzz")        
    })
  }) 

  it('checks the third projects links', () => {
    cy.get("#project-3").within(() => {
      cy.get("#buttonGithub").should('have.attr','href').and('equal',"https://github.com/SevaDer14/address_book/tree/master")
      cy.get("#buttonWeblink").should('have.attr','href').and('equal',"https://sevader14-address-book.netlify.app/")   
    })
  }) 

  it('checks the fourth projects links', () => {
    cy.get("#project-4").within(() => {
      cy.get("#buttonGithub").should('have.attr','href').and('equal',"https://github.com/SevaDer14/bmi_calculator/tree/functionality")        
    })
  }) 

  it('checks the fifth projects links', () => {
    cy.get("#project-5").within(() => {
      cy.get("#buttonGithub").should('have.attr','href').and('equal',"https://github.com/SevaDer14/library-challenge")        
    })
  }) 

  it('checks the sixth projects links', () => {
    cy.get("#project-6").within(() => {
      cy.get("#buttonGithub").should('have.attr','href').and('equal',"https://github.com/SevaDer14/library-challenge")        
    })
  }) 
})



