const { distance } = require("../lib");

describe("measures the distance between two points", () => {
  test("distance between 0,0 and 1,1", () => {
    expect(distance({ x: 0, y: 0}, { x: 1, y: 1})).toBe(1.41);
  });

  test("distance between 0,0 and -1,-1", () => {
    expect(distance({ x: 0, y: 0}, { x: -1, y: -1})).toBe(1.41);
  });

  test("distance between 0,0 and 1,-1", () => {
    expect(distance({ x: 0, y: 0}, { x: 1, y: -1})).toBe(1.41);
  });

  test("distance between 2,12 and 3,13", () => {
    expect(distance({ x: 2, y: 12 }, { x: 3, y: 13})).toBe(1.41);
  });

  test("distance between 172,200 and 5,57", () => {
    expect(distance({ x: 172, y: 200}, { x: 5, y: 57})).toBe(219.85);
  });
});
