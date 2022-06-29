describe('empty spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza")
  })

  it("sanity check", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5); 
    expect({}).not.to.equal({});
    expect({}).to.eql({});
  })

  const nameInput = () => cy.get("input[name=name]");
  const extraCheeseInput = () => cy.get("input[name=extraCheese]");
  const pepperoniInput = () => cy.get("input[name=pepperoni]");
  const addToOrderInput = () => cy.get("input[name=add]");

  it("can type in the inputs", () => {
    nameInput()
      .should("have.value", "")
      .type("testing...")
      .should("have.value", "testing...")
  })

  it("toppings can be selected", () => {
    extraCheeseInput().click();
    extraCheeseInput().should("have.value", "on")
    pepperoniInput().click();
    pepperoniInput().should("have.value", "on")
  })

  it("cant add to order without size", () => {
    nameInput().type("something");
    addToOrderInput().should("be.disabled")
  })
})