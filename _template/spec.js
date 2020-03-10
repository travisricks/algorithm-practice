const { expect } = require("chai");
const algorithm = require(".");

describe("algorithm", () => {
  it("should return the expected result", () => {
    const result = algorithm('foo');

    expect(result).to.deep.equal("foo");
  });
});
