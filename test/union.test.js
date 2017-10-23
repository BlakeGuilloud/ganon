const { union } = require("../lib");

describe("union", () => {
  test("returns an empty array for invalid values", () => {
    const got = union();
    expect(got).toEqual([]);

    const got2 = union(2);
    expect(got2).toEqual([]);

    const got3 = union("3", null);
    expect(got3).toEqual([]);
  });

  test("returns an array of the unique values", () => {
    const got = union([1, 1, 2]);
    expect(got).toEqual([1, 2]);
  });

  test("returns the union of two empty arrays", () => {
    const got = union([], []);
    expect(got).toEqual([]);
  });

  test("skips non-Array arguments", () => {
    const got = union([1], 2, [3]);
    expect(got).toEqual([1, 3]);
  });

  test("returns the union of two arrays", () => {
    const got = union([1], [2]);
    expect(got).toEqual([1, 2]);

    const got2 = union([1, 2, 3], [2, 3, 4]);
    expect(got2).toEqual([1, 2, 3, 4]);

    const got3 = union([2, 3, 4], [1, 2, 3]);
    expect(got3).toEqual([2, 3, 4, 1]);
  });

  test("returns the union of three arrays", () => {
    const got = union([1], [2], [3]);
    expect(got).toEqual([1, 2, 3]);

    const got2 = union([3, 1], [2], [3]);
    expect(got2).toEqual([3, 1, 2]);
  });

  test("returns the union of arrays containing multiple data types", () => {
    const got = union(["1", 2], [1, "2"], [[], {}]);
    expect(got).toEqual(["1", 2, 1, "2", [], {}]);
  });

  test("returns the union of arrays containing similar values", () => {
    const got = union(["0"], [0], [false]);
    expect(got).toEqual(["0", 0, false]);

    const got2 = union([null, undefined], [undefined]);
    expect(got2).toEqual([null, undefined]);
  });
});
