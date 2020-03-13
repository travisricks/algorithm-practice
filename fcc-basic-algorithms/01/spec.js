const { expect } = require("chai");
const convertToF  = require("./01-convert-celsius-to-fahrenheit");

describe("convertToF", () => {
  it("should return the original target object", () => {
    const result = convertToF(-30);

    expect(result).to.eql(-22);
  });

  
});
