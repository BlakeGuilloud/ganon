const { without } = require("../lib");

describe("without", () => {
  it("should throw an error if first argument is not an array", () => {
    expect(() => without()).toThrow();
    expect(() => without(5)).toThrow();
  });

  it("should throw if second argument is missing", () => {
    expect(() => without([1, 2, 3])).toThrow();
  });

  it("should return same identity if given element is not present", () => {
    const array = [1, 2, 3];
    expect(without(array, 4)).toBe(array);
  });

  it("should return a copy of the array without the provided element", () => {
    const array = [1, 2, 3, 4];

    expect(without(array, 2)).toEqual([1, 3, 4]);
    expect(without(array, 1)).toEqual([2, 3, 4]);
  });

  it("should only remove elements by identity", () => {
    const item = { a: 1 };
    const array = [item, { a: 2 }, 2, 3];

    expect(without(array, item)).toEqual([{ a: 2 }, 2, 3]);
    expect(without(array, { a: 2 })).toBe(array);
    expect(without(array, 3)).toEqual([item, { a: 2 }, 2]);
  });

  it("should take all arguments after the first and remove all of them", () => {
    const array = [1, 2, 3, 4, 5, 6, 7];

    expect(without(array, 1, 2, 3)).toEqual([4, 5, 6, 7]);
    expect(without(array, 2, 5, 6, 7, 1, 3, 4)).toEqual([]);
  });
});
