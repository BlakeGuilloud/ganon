const { areaOfCircleSector } = require("../lib");

describe("areaOfCircleSector", () => {
  test("throws an error for invalid types", () => {
    expect(() => areaOfCircleSector("pizza", 60)).toThrow("Invalid Argument");
    expect(() => areaOfCircleSector(5, "pizza")).toThrow("Invalid Argument");
  });

  test("throws an error for out of bounds arguments", () => {
    expect(() => areaOfCircleSector(5, 361)).toThrow("Argument sectorDegrees must not be greater than 360.");
    expect(() => areaOfCircleSector(5, -1)).toThrow("Argument sectorDegrees not be less than zero.");
    expect(() => areaOfCircleSector(-1, 60)).toThrow("Argument radius must not be less than zero.");
  });

  test("returns the area of the sector", () => {
    expect(areaOfCircleSector(5, 60)).toBe(13.09);
  });
});
