const { arrayAvg } = require("../lib");

describe("arrayAvg", () => {
  test("avg from [1, 2, 3] should be 2", () => {
    expect(arrayAvg([1, 2, 3])).toBe(2);
  });

  test("avg from [-1, -2, -3] should be -2", () => {
    expect(arrayAvg([-1, -2, -3])).toBe(-2);
  });

  test("avg from [-10, 50, 25, -15, 10] should be 12", () => {
    expect(arrayAvg([-10, 50, 25, -15, 10])).toBe(12);
  });
});
