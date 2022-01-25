describe('Fixture Tests', () => {

  beforeEach(() => {
    cy.visit("/")
      .intercept("GET", "**/random_name*", {fixture: "names.json"})
      .as("fetchedNames");
    cy.get("button#friendFetcher").as("friendFetcher");

  });

  it("fetch random friends", () => {
    cy.get("@friendFetcher").click();

    cy.get("li").should("have.length", 5);

    cy.wait("@fetchedNames");
  });

});