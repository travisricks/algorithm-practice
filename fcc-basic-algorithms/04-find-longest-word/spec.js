const { expect } = require("chai");
const algorithm = require(".");

describe.only("find the longest string", () => {
  console.log('start');
  it("should return the expected result", () => {
    console.log('a', algorithm("this thisssss"));
    const result = algorithm("The quick brown fox jumped over the lazy dog");

    console.log('result', result)

    expect(result).to.deep.equal(6);
  });
});
