const { arrayMax } = require("../lib");

describe("arrayMax", () => {
  test("maximum element in [1, 2, 3, 4] is 4", () => {
    expect(arrayMax([1, 2, 3, 4])).toBe(4);
  });

  test("maximum element in [-3, -4, -5, -6] is -3", () => {
    expect(arrayMax([-3, -4, -5, -6])).toBe(-3);
  });

  test("maximum element in [499, 4934924, 232, 3221, -44, 99342, -22, 2342442, -1111111, 0, 23423, 192, 34343, 2222] is 4934924", () => {
    expect(arrayMax([499, 4934924, 232, 3221, -44, 99342, -22, 2342442, -1111111, 0, 23423, 192, 34343, 2222])).toBe(4934924);
  });

  test("maximum element in [-1, -1, -1, -1, -1] is -1", () => {
    expect(arrayMax([-1, -1, -1, -1, -1])).toBe(-1);
  });

  test("maximum element in [0, 1, 2, 99, 100, -101] is 100", () => {
    expect(arrayMax([0, 1, 2, 99, 100, -101])).toBe(100);
  });
});
