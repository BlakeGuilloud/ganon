const { sortBy } = require("../lib");

describe("sortBy", () => {
  test("ascending order from [3, 1, 2] should be [1, 2, 3]", () => {
    expect(sortBy((a, b) => a > b, [3, 1, 2])).toBe([1, 2, 3]);
  });

  test("descending order from [-1, -3, 2, 1, 5, 0] should be [5, 2, 1, 0, -1, -3]", () => {
    expect(sortBy((a, b) => a < b, [-1, -3, 2, 1, 5, 0])).toBe([5, 2, 1, 0, -1, -3]);
  });

  test("ascending order from [{x: 3, y: 8}, {x: 1, y: 7}] should be [{x: 1, y: 7}, {x: 3, y: 8}]", () => {
    expect(sortBy((a, b) => a.x > b.x, [{x: 3, y: 8}, {x: 1, y: 7}])).toBe([{x: 1, y: 7}, {x: 3, y: 8}]);
  });
});
