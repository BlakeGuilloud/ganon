const { sortBy } = require("../lib");

describe("sortBy", () => {
  test("ascending order from [3, 1, 2] should be [1, 2, 3]", () => {
    expect(sortBy((a, b) => a > b, [3, 1, 2])).toEqual([1, 2, 3]);
  });

  test("descending order from [-1, -3, 2, 1, 5, 0] should be [5, 2, 1, 0, -1, -3]", () => {
    expect(sortBy((a, b) => a < b, [-1, -3, 2, 1, 5, 0])).toEqual([5, 2, 1, 0, -1, -3]);
  });

  test("ascending order from [{x: 3, y: 8}, {x: 1, y: 7}] should be [{x: 1, y: 7}, {x: 3, y: 8}]", () => {
    expect(sortBy((a, b) => a.x > b.x, [{x: 3, y: 8}, {x: 1, y: 7}])).toEqual([{x: 1, y: 7}, {x: 3, y: 8}]);
  });

  test("test that first arguement is a function", () => {
    expect(sortBy([1, 2, 3, 0])).toThrow();
    expect(sortBy(1, [1, 2, 3, 0])).toThrow();
    expect(sortBy({a:1}, [1, 2, 3, 0])).toThrow();
    expect(sortBy([1, 2], [1, 2, 3, 0])).toThrow();
    expect(sortBy("test", [1, 2, 3, 0])).toThrow();
  });

  test("test that second arguement is an array", () => {
    expect(sortBy((a, b) => a > b)).toThrow();
    expect(sortBy((a, b) => a > b), 1).toThrow();
    expect(sortBy((a, b) => a > b), {a:1}).toThrow();
    expect(sortBy((a, b) => a > b), "test").toThrow();
  });

  test("providing an empty array will throw an error", () => {
    expect(sortBy((a, b) => a < b), []).toThrow();
  });

  test("providing an incorrect list type will throw an error", () => {
    expect(sortBy((a, b) => a.x > b.x, [3, 5, 1, -9, 2])).toThrow();
    expect(sortBy((a, b) => a < b, {x: 3, y: 8}, {x: 1, y: 7})).toThrow();
  });
});
