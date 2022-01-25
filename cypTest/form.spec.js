describe('Form Tests', () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get(".input-form input").as("inputField");

  });

  const friend = "Freddie Mercury";

  it("can add a friend", () => {
    cy.get("@inputField")
      .type(friend)
      .should("have.value", friend);

    cy.get(".input-form button")
      .click();

    cy.get("ul").should("contain", friend);
  });

  it("can add multiple friends", () => {
    cy.get("@inputField")
      .type(friend)
      .should("have.value", friend);

    cy.get(".input-form button")
      .click();

    cy.get("ul").should("contain", friend);

    const secondFriend = "Deadpool"
    cy.get("@inputField")
      .type(secondFriend);

    cy.get(".input-form button")
      .click();

    cy.get("li").should("have.length", 2).last().should("contain", secondFriend);
  });

  it("can add multiple friends and delete first", () => {
    cy.get("@inputField")
      .type(friend)
      .should("have.value", friend);

    cy.get(".input-form button")
      .click();

    cy.get("ul").should("contain", friend);

    const secondFriend = "Deadpool"
    cy.get("@inputField")
      .type(secondFriend);

    cy.get(".input-form button")
      .click();

    cy.get("li").should("have.length", 2).last().should("contain", secondFriend);
    cy.get("li").first.click();
    cy.get("li").should("have.length", 1).first().should("contain", secondFriend);
  });

});