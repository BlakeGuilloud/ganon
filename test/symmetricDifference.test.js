const { symmetricDifference } = require("../lib");

describe("symmetricDifference", () => {
  it("should throw if the arguments is not an array", () => {
    expect(() => symmetricDifference()).toThrow();
    expect(() => symmetricDifference([1])).toThrow();
    expect(() => symmetricDifference(1, [1])).toThrow();
    expect(() => symmetricDifference(1, 1)).toThrow();
  });

  it("should return the correct symmetric difference", () => {
    expect(() => symmetricDifference([1, 2, 3, 4], [1, 4, 5])).toEqual([2, 3, 5]);
    expect(() => symmetricDifference([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(() => symmetricDifference([1, 2, 3], [1, 2, 3])).toEqual([]);
    expect(() => symmetricDifference([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(() => symmetricDifference([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(() => symmetricDifference([], [])).toEqual([]);
  });
});



