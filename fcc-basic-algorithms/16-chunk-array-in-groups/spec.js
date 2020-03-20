const { expect } = require("chai");
const chunkArrayInGroups = require(".");

describe("chunkArrayInGroups", () => {
  it("should return the expected result", () => {
    const result = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);

    expect(result).to.deep.equal([[0, 1], [2, 3], [4, 5], [6, 7], [8]]);
  });
});
