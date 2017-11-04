const { nearestPoint } = require("../lib");

describe("nearestPoint", () => {
  test("direct hit", () => {
    expect(nearestPoint([0, 0, 0], [ [0, 0, 0], [0, 0, 1] ])).toBe([0, 0, 0]);
  });

  test("nearest", () => {
    expect(nearestPoint([10, 15], [ [10, 100], [9, 14] ])).toBe([9, 14]);
  });

  test("negative", () => {
    expect(nearestPoint([-5, 5], [ [-3.5, 2.3], [-15, 4] ])).toBe([-3.5, 2.3]);
  });

  test("error handling", () => {
    expect(nearestPoint([-5, 5], [ [0], [-15] ])).toThrow("Invalid arguments");
  });
});
