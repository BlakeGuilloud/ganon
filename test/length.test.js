const { length } = require("../lib");

describe("length", () => {
  test("length of [] to be 0", () => {
    expect(length([])).toBe(0);
  });

  test("length of [1, 2, 3, 4, 5] to be 5", () => {
    expect(length([1, 2, 3, 4, 5])).toBe(5);
  });

  test("length of 'length' to be 5", () => {
    expect(length("length")).toBe(5);
  });

  test("length of null to be undefined", () => {
    expect(length(null)).toBe(undefined);
  });
});
