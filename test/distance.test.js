const { distance } = require("../lib");

describe("measures the distance between two points", () => {
  test("distance between 0,0 and 1,1", () => {
    expect(distance({ x: 0, y: 0 }, { x: 1, y: 1 })).toBeGreaterThanOrEqual(1.41);
    expect(distance({ x: 0, y: 0 }, { x: 1, y: 1 })).toBeLessThanOrEqual(1.42);
  });

  test("distance between 0,0 and -1,-1", () => {
    expect(distance({ x: 0, y: 0 }, { x: -1, y: -1 })).toBeGreaterThanOrEqual(1.41);
    expect(distance({ x: 0, y: 0 }, { x: -1, y: -1 })).toBeLessThanOrEqual(1.42);
  });

  test("distance between 0,0 and 1,-1", () => {
    expect(distance({ x: 0, y: 0 }, { x: 1, y: -1 })).toBeGreaterThanOrEqual(1.41);
    expect(distance({ x: 0, y: 0 }, { x: 1, y: -1 })).toBeLessThanOrEqual(1.42);
  });

  test("distance between 2,12 and 3,13", () => {
    expect(distance({ x: 2, y: 12 }, { x: 3, y: 13 })).toBeGreaterThanOrEqual(1.41);
    expect(distance({ x: 2, y: 12 }, { x: 3, y: 13 })).toBeLessThanOrEqual(1.42);
  });

  test("distance between 172,200 and 5,57", () => {
    expect(distance({ x: 172, y: 200 }, { x: 5, y: 57 })).toBeGreaterThanOrEqual(219.85);
    expect(distance({ x: 172, y: 200 }, { x: 5, y: 57 })).toBeLessThanOrEqual(219.86);
  });
});
