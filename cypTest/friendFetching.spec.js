describe('Friend Fetch Tests', () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("button#friendFetcher").as("friendFetcher");

  });

  it("fetch random friends", () => {
    cy.get("@friendFetcher").click();

    cy.get("li").should("have.length", 5);
  });

});