const { expect } = require("chai");
const bouncer = require(".");

describe("bouncer", () => {
  it("should return the expected result", () => {
    const result = bouncer([7, "ate", "", false, 9]);

    expect(result).to.deep.equal([7, "ate", 9]);
  });
  it("should return empty array if all values are falsy", () => {
    const result = bouncer([false, null, 0, NaN, undefined, ""]);

    expect(result).to.deep.equal([]);
  });
});

