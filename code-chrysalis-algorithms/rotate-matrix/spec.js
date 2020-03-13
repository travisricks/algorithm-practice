const { expect } = require("chai");
const rotateMatrix = require("./rotate-matrix");

xdescribe("rotateMatrix", () => {
  it("should return the expected result", () => {
    const result = rotateMatrix(75);

    expect(result).to.deep.equal("foo");
  });
});
