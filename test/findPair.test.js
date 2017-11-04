const { findPair } = require("../lib");

describe("findPair", () => {
  test("findPair returns the first pair whose sum matches the one provided", () => {
    expect( findPair(7, [1, 4, 5, 3, 6]) ).toEqual([1, 6]);
  });
  test("findPair works for any integer values", () => {
    expect( findPair(5, [7, 1, -2, 4, -8, 0]) ).toEqual([7, -2]);
    expect( findPair(-4, [-8, -7, 5, -6, 3]) ).toEqual([-7, 3]);
  });
  test("findPair returns an empty array if there is no pair of elements which fit the criteria", () => {
    expect( findPair(3, [4, 5, 6]) ).toEqual([]);
  });
  test("findPair throws an error if arr is not an array", () => {
    expect( function(){ findPair(6, "pizza"); } ).toThrowError("Argument at index 1 must be of type Array.");
  });
});