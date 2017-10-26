const { convertInchesToCentimeters } = require("../lib");

describe("convertInchesToCentimeters", () => {
  it("Should return converted inches to centimeters", () => {
    expect(() => convertInchesToCentimeters(5).toBe(12.7000254000508));
    expect(() => convertInchesToCentimeters(7).toBe(17.78003556007112));
    // add more cases
  });

  it("Should check if parameter is valid", () => {
    expect(() => convertInchesToCentimeters({})).toThrow("Invalid Argument");
    expect(() => convertInchesToCentimeters([1,2])).toThrow("Invalid Argument");
    // add more cases
  });
});
