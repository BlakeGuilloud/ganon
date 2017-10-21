const { rotateArray } = require("../lib");

describe("rotateArray", () => {
  test("Array is unmodified if the offset is 0", () => {
    expect(rotateArray([7,6,5], 0)).toEqual([7,6,5]);
  });

  test("Rotation of an array of length 0 results in no change", () => {
    expect(rotateArray([], 100)).toEqual([]);
  });

  test("Rotation of an array of length 1 results in no change", () => {
    expect(rotateArray([42], 24)).toEqual([42]);
  });

  test("Rotation of an array of length n by n places results in no change", () => {
    expect(rotateArray([1,2,3,4,5], 5)).toEqual([1,2,3,4,5]);
  });

  test("rotateArray([a, jedi, you, will, be], 3) == [you, will, be, a, jedi]", () => {
    expect(rotateArray(["a", "jedi", "you", "will", "be"], 3)).toEqual(["you",
      "will", "be", "a", "jedi"]);
  });
});
