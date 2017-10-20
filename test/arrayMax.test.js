const { arrayMax } = require("../lib");

describe("arrayMax", () => {
  test("returns 24 as the max of the array", () => {
    expect(arrayMax([5, 12, 3, 24])).toBe(24);
  });

  test("returns undefined with empty array", () => {
    expect(arrayMax([])).toBe(undefined);
  });

  test("returns 0 with array of negatives and other types", () => {
    expect(arrayMax([-8, 0, "hacktober", -2])).toBe(undefined);
  });
});
