describe('Input Tests', () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get(".input-form input").as("inputField");
  });

  const text = "Freddie Mercury";

  it("can enter text", () => {
    cy.visit("http://localhost:3000");
    cy.get(".input-form")
      .type(text)
      .should("have.value", text);
  });

  it("can visit alias and enter text", () => {
    cy.visit("http://localhost:3000");
    cy.get("@inputField")
      .type(text)
      .should("have.value", text);
  });

  it("can enter text and backspace", () => {
    cy.visit("http://localhost:3000");
    cy.get("@inputField")
      .type("G-Mane{backspace}")
      .should("have.value", text);
  });
});