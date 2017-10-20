const { flattenDeepArray } = require( "../lib" );

describe("flattenDeepArray", () => {
  test("flattenDeepArray on empty array returns empty array", () => {
    expect( flattenDeepArray([]) ).toEqual([]);
  });

  test("flattenDeepArray on non-array type to throw an error", () => {
    expect(() => flattenDeepArray({a: 1, b: 2})).toThrow();
    expect(() => flattenDeepArray("I am a banana")).toThrow();
    expect(() => flattenDeepArray(4)).toThrow();
  });

  test("flattenDeepArray on already flat array returns the same array", () => {
    expect( flattenDeepArray([0, 1, 2, 3, 4, 5]) ).toEqual([0, 1, 2, 3, 4, 5]);
  });

  test( "flattenDeepArray on nested array returns flat array", () => {
    expect( flattenDeepArray([[[0, [1]], [2, 3]], [4, [5]]]) ).toEqual([0, 1, 2, 3, 4, 5]);
  });
});
