const { geometricMean } = require("../lib");

describe("geometricMean", () => {
  test("geometric mean of [2,18] to equal 6", () => {
    expect(geometricMean([2,18])).toEqual(6);
  });

  test("geometric mean of [10, 51.2, 8] to equal 16", () => {
    expect(geometricMean([10, 51.2, 8])).toEqual(16);
  });

  test("geometric mean of [10, 30, 100] to equal 31.07233", () => {
    expect(geometricMean([10, 30, 100])).toEqual(31.07233);
  });
});
