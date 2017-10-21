const { uniq } = require("../lib");

describe("uniq", () => {
  it("should throw when the first argument is not an array", () => {
    expect(() => uniq()).toThrow();
    expect(() => uniq(5)).toThrow();
    expect(() => uniq([])).not.toThrow();
  });

  it("should return an empty array when an empty array is supplied", () => {
    const result = uniq([]);

    expect(result).toEqual([]);
  });

  it("should return array with one element (the input) when given an iterable of size 1", () => {
    expect(uniq([1])).toEqual([1]);
  });

  it("should return a unique array given an array with different items", () => {
    expect(uniq([1,1,2,2,3,3])).toEqual([1,2,3]);
    expect(uniq(["1","1","2","2","3","3"])).toEqual(["1","2","3"]);
    expect(uniq(["1", 1, "2", "2", 2, 3, "3"])).toEqual(["1", 1, "2", 2, 3, "3"]);
  });
});
