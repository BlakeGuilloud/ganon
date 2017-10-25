const { arrayOrder } = require("../lib");

describe("arrayOrder", () => {
  test("order from [3, 1, 2] should be [1, 2, 3]", () => {
    expect(arrayOrder([3, 1, 2])).toBe([1, 2, 3]);
  });

  test("order from [-1, -3, 2, 1, 5, 0] should be [-3, -1, 0, 1, 2, 5]", () => {
    expect(arrayOrder([-1, -3, 2, 1, 5, 0])).toBe([-3, -1, 0, 1, 2, 5]);
  });
});
