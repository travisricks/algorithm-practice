const { expect } = require("chai");
const getIndexToIns = require(".");

describe("getIndexToIns", () => {
  it("test if value is larger than all array values", () => {
    const result = getIndexToIns([2, 5, 10], 15);

    expect(result).to.deep.equal(3);
  });
  it("test if value is smaller than all array values", () => {
    const result = getIndexToIns([3, 10, 5], 2);

    expect(result).to.deep.equal(0);
  });
  it("test if value is duplicates another array values", () => {
    const result = getIndexToIns([3, 10, 5], 10);

    expect(result).to.deep.equal(1);
  });
});
