const { slopeOfLine } = require("../lib");

describe("slopeOfLine", () => {
  test("throws when given invalid arguments", () => {
    expect(() => slopeOfLine({}, {})).toThrow();
    expect(() => slopeOfLine(123, "123")).toThrow();
    expect(() => slopeOfLine(123, {x: 0, y: 0})).toThrow();
    expect(() => slopeOfLine({x: 123, y: 13}, {})).toThrow();
    expect(() => slopeOfLine({x: 0, y: -4}, {x: 4})).toThrow();
    expect(() => slopeOfLine({x: 4, y: 2}, [3, 4])).toThrow();
    expect(() => slopeOfLine({x: "123a", y: 4}, {x: 4, y: 1})).toThrow();
    expect(() => slopeOfLine(null, null)).toThrow();
    expect(() => slopeOfLine(NaN, {x: 5, y: ""})).toThrow();
  });

  test("returns slope when given positive integers", () => {
    const A = {
      x: 1,
      y: 2
    };
    const B = {
      x: 2,
      y: 4
    };
    expect(slopeOfLine(A, B)).toBe(2);
  });

  test("returns slope when called with positive and negative integers", () => {
    const A = {
      x: -5,
      y: 10
    };
    const B = {
      x: 123,
      y: -321
    };
    expect(slopeOfLine(A, B)).toBeCloseTo(-2.5859, 4);
  });

  test("returns slope when called with real values", () => {
    const A = {
      x: 13.67,
      y: 9.41
    };
    const B = {
      x: -49.31,
      y: 12
    };
    expect(slopeOfLine(A, B)).toBeCloseTo(-0.0411, 4);
  });

  test("returns slope when called with number strings", () => {
    const A = {
      x: "123",
      y: 512
    };
    const B = {
      x: "-1241.412",
      y: 3.15
    };
    expect(slopeOfLine(A, B)).toBeCloseTo(0.3729, 4);
  });

  test("returns slope when called with number strings and numbers", () => {
    const A = {
      x: "123",
      y: 512
    };
    const B = {
      x: -1241.412,
      y: 3.15
    };
    expect(slopeOfLine(A, B)).toBeCloseTo(0.3729, 4);
  });
});
