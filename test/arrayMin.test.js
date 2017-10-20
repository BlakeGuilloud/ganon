const { arrayMin } = require("../lib");

describe("arrayMin", () => {
  test("minimum element in [1, 2, 3, 4] is 1", () => {
    expect(arrayMin([1, 2, 3, 4])).toBe(1);
  });

  test("minimum element in [-1, -2, -3, -4] is -4", () => {
    expect(arrayMin([-1, -2, -3, -4])).toBe(-4);
  });

  test("minimum element in [499, 4934924, 232, 3221, -44, 99342, -22, 2342442, -1111111, 0, 23423, 192, 34343, 2222] is -1111111", () => {
    expect(arrayMin([499, 4934924, 232, 3221, -44, 99342, -22, 2342442, -1111111, 0, 23423, 192, 34343, 2222])).toBe(-1111111);
  });

  test("minimum element in [-1, -1, -1, -1, -1] is -1", () => {
    expect(arrayMin([-1, -1, -1, -1, -1])).toBe(-1);
  });

  test("minimum element in [0, 1, 2, 99, 100, -100] is -100", () => {
    expect(arrayMin([0, 1, 2, 99, 100, -100])).toBe(-100);
  });
});