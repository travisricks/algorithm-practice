const { expect } = require("chai");
const factorialize = require("./factorialize-a-number");

describe("factorialize", () => {
  it("should return the factorial of the input", () => {
    const result = factorialize(5);

    expect(result).to.eql(120);
  });
});
