const { arrayMax } = require("../lib");

describe("arrayMax", () => {
  test("maximum element in [1, 2, 3, 4] is 4", () => {
    expect(arrayMax([1, 2, 3, 4])).toBe(4);
  });

  test("maximum element in [-1, -2, -3, -4] is -1", () => {
    expect(arrayMax([-1, -2, -3, -4])).toBe(-1);
  });

  test("maximum element in [499, 192, 34343, 2222] is 34343", () => {
    expect(arrayMax([499, 192, 34343, 2222])).toBe(34343);
  });

  test("maximum element in [-1, -1, -1, -1, -1] is -1", () => {
    expect(arrayMax([-1, -1, -1, -1, -1])).toBe(-1);
  });

  test("maximum element in [0, 1, 2, 99, 100, -100] is 100", () => {
    expect(arrayMax([0, 1, 2, 99, 100, -100])).toBe(100);
  });
});