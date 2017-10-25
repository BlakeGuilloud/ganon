const { areaOfCircleSector } = require("../lib");

describe("areaOfCircleSector", () => {
  test("throws an error for invalid types", () => {
    expect(() => areaOfCircleSector("pizza", 60)).toThrow("Invalid Argument");
    expect(() => areaOfCircleSector(5, "pizza")).toThrow("Invalid Argument");
  });

  test("returns the area of the sector", () => {
    expect(areaOfCircleSector(5, 60)).toBe(13.09);
  });
});
