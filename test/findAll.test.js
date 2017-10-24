const { findAll } = require("../lib");

describe("findAll", () => {
  test("findAll(A, B) where A contains element B and return its indices.", () => {
    expect(findAll([3, 4, 5], 5)).toEqual([2]);
    expect(findAll([4, 3, 4, 2, 4], 4)).toEqual([0, 2, 4]);
  });
  test("findAll(A, B) where B is not present should return an empty array", ()=>{
    expect(findAll([5, 2, 3, 4, 6], "B")).toEqual([]);
    expect(findAll([], 1)).toEqual([]);
  });
  test("findAll(A, B) throws an error if A is not an array or B is not present", () => {
    expect(function(){ findAll(1, 1);}).toThrowError("First argument must be an array.");
    expect(function(){ findAll([1]);}).toThrowError("Please provide a second argument.");
  });
});
