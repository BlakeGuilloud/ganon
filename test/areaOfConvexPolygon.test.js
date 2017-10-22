const {
  areaOfConvexPolygon
} = require("../lib");

describe("areaOfConvexPolygon", () => {
  test("simple triangle: [[0, 0], [1, 0], [1, 1]] -- area must be 1/2", () => {
    expect(areaOfConvexPolygon([
      [0, 0],
      [1, 0],
      [1, 1]
    ])).toBeCloseTo(0.50000, 4);
  });

  test("simple square: [[0, 0], [1, 0], [1, 1], [0, 1]] -- area must be 1", () => {
    expect(areaOfConvexPolygon([
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 1]
    ])).toBeCloseTo(1.000000000, 4);
  });

  test("simple 5 sided figure: [[0, 0], [1, 0], [1, 1], [0.5, 2], [0, 1] ] -- area must be 1.5", () => {
    expect(areaOfConvexPolygon([
      [0, 0],
      [1, 0],
      [1, 1],
      [0.5, 2],
      [0, 1]
    ])).toBeCloseTo(1.5000000, 4);
  });

  test("simple 6 sided figure: [[0, 0], [1, 0], [1, 1], [0.75, 2], [0.25, 2], [0, 1] ] -- area must be 1.75", () => {
    expect(areaOfConvexPolygon([
      [0, 0],
      [1, 0],
      [1, 1],
      [0.5, 2],
      [0, 1]
    ])).toBeCloseTo(1.7500000, 4);
  });
});