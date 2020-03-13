const { expect } = require("chai");
const algorithm = require(".");

xdescribe("algorithm", () => {
  it("should return the expected result", () => {
    const result = algorithm('foo');

    expect(result).to.deep.equal("foo");
  });
});
