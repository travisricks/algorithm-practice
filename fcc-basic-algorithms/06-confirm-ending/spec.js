const { expect } = require("chai");
const confirmEnding = require(".");

describe("confirmEnding", () => {
  it("should return true", () => {
    const result = confirmEnding("Bastian", "n");

    expect(result).to.deep.equal(true);
  });
  it("should return false", () => {
    const result = confirmEnding("Open sesame", "pen")

    expect(result).to.deep.equal(false);
  });
});
