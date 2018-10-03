const { removeOutliers } = require("../lib");

describe("removeOutliers", () => {
  test("obvious outlier removed", () => {
    expect(removeOutliers([0, 0, 0, 0, 100])).toEqual([0, 0, 0, 0]);
  });

  test("keep all identical", () => {
    expect(removeOutliers([41, 41, 41, 41])).toEqual([41, 41, 41, 41]);
  });

  test("more complex example", () => {
    expect(removeOutliers([0, 2, -2, typeof undef, 2, -2, 3])).toEqual([0, 2, -2, 2, -2]);
  });

  test("remove null and undefined", () => {
    expect(removeOutliers([1, typeof undef, null])).toEqual([1]);
  });

  test("non-numbers throw an error", () => {
    expect(() => removeOutliers(["panic"])).toThrow();
  });
});
