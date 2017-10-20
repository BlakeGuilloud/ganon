const { rotateArray } = require("../lib");

describe("rotateArray", () => {
  test("rotateArray([1,2,3], 2) == [2, 3, 1]", () => {
    expect(rotateArray([1,2,3], 2)).toEqual([2,3,1]);
  });

  test("rotateArray([a, jedi, you, will, be], 3) == [you, will, be, a, jedi]", () => {
    expect(rotateArray(["a", "jedi", "you", "will", "be"], 3)).toEqual(["you",
      "will", "be", "a", "jedi"]);
  });

  test("rotateArray([42], 24) == [42]", () => {
    expect(rotateArray([42], 24)).toEqual([42]);
  });

  test("rotateArray([], 100) == []", () => {
    expect(rotateArray([], 100)).toEqual([]);
  });

  test("rotateArray([1,2,3,4,5], 5) == [1,2,3,4,5]", () => {
    expect(rotateArray([1,2,3,4,5], 5)).toEqual([1,2,3,4,5]);
  });

  test("rotateArray([7,6,5], 0) == [7,6,5]", () => {
    expect(rotateArray([7,6,5], 0)).toEqual([7,6,5]);
  });
});
