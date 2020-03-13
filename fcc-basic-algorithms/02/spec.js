const { expect } = require("chai");
const reverseString = require("./02-reverse-a-string");

describe("reverseString", () => {
  it("should return the original string in reverse", () => {
    const result = reverseString("hello");

    expect(result).to.eql("olleh");
  });
});
