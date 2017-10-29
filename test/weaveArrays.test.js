const { weaveArrays } = require("../lib");

describe("weaveArrays", () => {

  test("Should return an array", () => {
    expect(Array.isArray(weaveArrays( [1, 2, 3], [4, 5, 6] )) ).toBe(true);
  });

  test("Should return an array containing an even number of elements", () => {
    expect( (weaveArrays([1, 2, 3], [4])).length % 2 ).toEqual(0);
  });

  test("Should return an array containing a number of elements equal to double the length of the shorter array given", () => {
    expect( (weaveArrays([1, 2, 3], [4])).length).toEqual( 2 * [4].length );
    expect( (weaveArrays([1, 2, 3], [4, 4, 4, 4, 4, 4, 4, 4, 4])).length).toEqual( 2 * [1, 2, 3].length );
  });

  test("Should return an empty array if either of the given arrays is empty", () => {
    expect(weaveArrays([], [1, 2, 3])).toEqual([]);
    expect(weaveArrays([1, 2, 3], [])).toEqual([]);
  });

  test("Should return an array containing alternating values from the two arrays given, starting with the first value in the first array and ending with a value from the second array", () => {
    let first = [1, 2, 3];
    let second = [4, 5, 6];
    let woven = weaveArrays(first, second);

    expect(woven).toEqual([1, 4, 2, 5, 3, 6]);
    expect(woven[0]).toEqual(first[0]);
    expect(woven[1]).toEqual(second[0]);
    expect( woven[woven.length - 1] ).toEqual( second[ (woven.length / 2) - 1 ] );
  });

  test("Should throw an error if called with invalid params", () => {
    // should take two params
    expect(() => weaveArrays()).toThrow();
    expect(() => weaveArrays([], [], [])).toThrow();

    // first param should be an array
    expect(() => weaveArrays("a", [])).toThrow();

    // second param should be an array
    expect(() => weaveArrays([], {})).toThrow();

    // all values in both arrays should be of the same type
    expect(() => weaveArrays( [1, 2, 3], ["1", "2", "3"] )).toThrow();
    expect(() => weaveArrays( [1, 2, "c"], ["a", "b", "c"] )).toThrow();
    expect(() => weaveArrays( [1, 2, 3], [ 1, 2, [3] ] )).toThrow();
  });

});
