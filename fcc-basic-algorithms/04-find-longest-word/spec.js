const { expect } = require("chai");
const algorithm = require(".");

describe("find the longest string", () => {
  it("should return the expected result", () => {
    const result = algorithm("The quick brown fox jumped over the lazy dog");
    
    expect(result).to.deep.equal(6);
  });
});
