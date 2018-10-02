const { distanceN } = require("../lib");

describe("measures the distance between two points", () => {
  test("distance between 0 and 1", () => {
    expect(distanceN([0], [1])).toBe(1);
  });

  test("distance between 0,0,0 and 1,1,1", () => {
    expect(distanceN([0, 0, 0], [1, 1, 1])).toBeGreaterThanOrEqual(1.73);
    expect(distanceN([0, 0, 0], [1, 1, 1])).toBeLessThanOrEqual(1.74);
  });

  test("distance between 0,0,0,0,0 and 1,1,1,1,1", () => {
    expect(distanceN([0, 0, 0, 0, 0], [1, 1, 1, 1, 1])).toBeGreaterThanOrEqual(2.23);
    expect(distanceN([0, 0, 0, 0, 0], [1, 1, 1, 1, 1])).toBeLessThanOrEqual(2.24);
  });

  test("distance between 0,0,0 and -1,-1,-1", () => {
    expect(distanceN([0, 0, 0], [-1, -1, -1])).toBeGreaterThanOrEqual(1.73);
    expect(distanceN([0, 0, 0], [-1, -1, -1])).toBeLessThanOrEqual(1.74);
  });

  test("distance between 0,-1,6 and -1,1,71", () => {
    expect(distanceN([0, -1, 6], [-1, 1, 71])).toBeGreaterThanOrEqual(65.03);
    expect(distanceN([0, -1, 6], [-1, 1, 71])).toBeLessThanOrEqual(65.04);
  });

  test("mis-matching array length throws", () => {
    expect(() => distanceN([0, 1], [1, 2, 3])).toThrow();
  });

  test("empty points throw", () => {
    expect(() => distanceN([], [])).toThrow();
  });

  test("invalid points throw", () => {
    expect(() => distanceN([0, 0, "foo"], [1, "bar", 1])).toThrow();
  });
});
