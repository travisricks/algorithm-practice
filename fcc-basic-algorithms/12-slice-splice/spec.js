const { expect } = require("chai");
const frankenSplice = require(".");

describe("frankenSplice", () => {
  it("should return the expected result", () => {
    const result = frankenSplice([1, 2, 3], [4, 5], 1);

    expect(result).to.deep.equal([4, 1, 2, 3, 5]);
  });
});

