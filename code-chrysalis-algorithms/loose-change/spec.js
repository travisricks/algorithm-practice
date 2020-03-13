const { expect } = require("chai");
const looseChange = require("./loose-change");

describe("looseChange", () => {
  it("should return the expected result", () => {
    const result = looseChange(75);

    expect(result).to.deep.equal({
      quarters: 3,
      dimes: 0,
      nickels: 0,
      pennies: 0
    });
  });
  it("should return the expected result", () => {
    const result = looseChange(76);

    expect(result).to.deep.equal({
      quarters: 3,
      dimes: 0,
      nickels: 0,
      pennies: 1
    });
  });
  it("should return the expected result", () => {
    const result = looseChange(34);

    expect(result).to.deep.equal({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 4
    });
  });
  it("should return the expected result", () => {
    const result = looseChange(44);

    expect(result).to.deep.equal({
      quarters: 1,
      dimes: 1,
      nickels: 1,
      pennies: 4
    });
  });
});
