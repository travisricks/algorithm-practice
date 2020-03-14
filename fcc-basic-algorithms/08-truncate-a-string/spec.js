const { expect } = require("chai");
const truncateString = require(".");

describe("truncateString", () => {
  it("should return the expected result if num < string length", () => {
    const result = truncateString(
      "A-tisket a-tasket A green and yellow basket",
      8
    );

    expect(result).to.deep.equal("A-tisket...");
  });
  it("should return full string if num = string length", () => {
    const result = truncateString(
      "A-tisket a-tasket A green and yellow basket",
      "A-tisket a-tasket A green and yellow basket".length
    );

    expect(result).to.deep.equal("A-tisket a-tasket A green and yellow basket");
  });
  it("should return full string if num > string length", () => {
    const result = truncateString(
      "A-tisket a-tasket A green and yellow basket",
      "A-tisket a-tasket A green and yellow basket".length + 2
    );

    expect(result).to.deep.equal("A-tisket a-tasket A green and yellow basket");
  });
});
