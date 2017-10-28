const { castArray } = require("../lib");

describe("castArray", () => {

  test("should pack a non-array value into an array", () => {
    expect(castArray("test")).toEqual(["test"]);
  });

  test("should leave arrays as they are", () => {
    const array = ["1", 2, { "three": 4 }];
    expect(castArray(array)).toBe(array);
  });

  test("should pack null into an array", () => {
    expect(castArray(null)).toEqual([null]);
  });

  test("should pack undefined into an array", () => {
    expect(castArray(undefined)).toEqual([undefined]);
  });
});
