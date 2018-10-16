const { circumferenceOfTriangle } = require("../lib");

describe("circumferenceOfTriangle", () => {
  it("should throw an error if either base or height is not a positive number", () => {
    expect(() => circumferenceOfTriangle(5, 0, 5)).toThrow();
    expect(() => circumferenceOfTriangle(0, 5, -5)).toThrow();
    expect(() => circumferenceOfTriangle(-5, 5, 0)).toThrow();
    expect(() => circumferenceOfTriangle(5, -5, 0)).toThrow();
    expect(() => circumferenceOfTriangle(5, 5, -1)).toThrow();
    expect(() => circumferenceOfTriangle("five", "five", "zero")).toThrow();
  });

  it("sides 10, 5, and 2 should have a circumference of 17", () => {
    expect(circumferenceOfTriangle(10, 5, 2)).toBe(17);
  });

  it("sides 100, 50, and 20 should have a circumference of 170", () => {
    expect(circumferenceOfTriangle(100, 50, 20)).toBe(170);
  });

  it("sides 1, 3, and 4 should have a circumference of 17", () => {
    expect(circumferenceOfTriangle(1, 3, 4)).toBe(8);
  });

});
