const { expect } = require("chai");
const repeatStringNumTimes = require(".");

describe("repeatStringNumTimes", () => {
  it("should return the expected result", () => {
    const result = repeatStringNumTimes("abc", 3);

    expect(result).to.deep.equal("abcabcabc");
  });
  it("should return an empty string if number is negative", () => {
    const result = repeatStringNumTimes("abc", -2);

    expect(result).to.deep.equal("");
  });
});
