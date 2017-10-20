const { areaOfCircle } = require("../lib");

describe("areaOfCircle", () => {
  test("area of circle with radius 7 is 153.9380400", () => {
    expect(areaOfCircle(7)).toBeCloseTo(153.9380400, 4);
  });

  test("area of circle with radius 125 is 49087.3852123", () => {
    expect(areaOfCircle(125)).toBeCloseTo(49087.38521230, 4);
  });

  test("area of circle with radius 0.789 is 1.95570740", () => {
    expect(areaOfCircle(0.789)).toBeCloseTo(1.95570740, 4);
  });

  test("area of circle with radius 0 is 0.000000", () => {
    expect(areaOfCircle(0)).toBeCloseTo(0.000000, 4);
  });

  test("area of circle with radius 5827 is 106669413.906909", () => {
    expect(areaOfCircle(5827)).toBeCloseTo(106669413.906909, 4);
  });
});