const { expect } = require("chai");
const largestOfArray = require(".");

describe("largestOfArray", () => {
  it("should return the largest number in each array", () => {
    const result = largestOfArray([
      [13, 27, 18, 26],
      [4, 5, 1, 3],
      [32, 35, 37, 39],
      [1000, 1001, 857, 1]
    ]);

    expect(result).to.deep.equal([27, 5, 39, 1001]);
  });
});
