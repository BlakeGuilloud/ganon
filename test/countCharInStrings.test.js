const { countCharInStrings } = require("../lib");

describe("countCharInStrings", () => {
  test("Should return empty array if given an empty array", () => {
    expect(countCharInStrings([])).toEqual([]);
  });

  test("Should return a nested empty array if given a nested empty array", () => {
    expect(countCharInStrings([[[]]])).toEqual([[[]]]);
  });

  test("Should correctly calculate total character if given a non-nested array", () => {
    expect(countCharInStrings(["Don't", " ", "cry", "because", "it's", "over", "because", "it", "happened."])).toEqual([5, 1, 3, 7, 4, 4, 7, 2, 9]);
    expect(countCharInStrings(["A", "", " ", "dog", "."])).toEqual([1, 0, 1, 3, 1]);
  });

  test("Should correctly calculate total character if given a nested array", () => {
    expect(countCharInStrings(["Be", "Yourself", ";", ["everyone", "else", "is", "already", "taken."]])).toEqual([2, 8, 1, [8, 4, 2, 7, 6]]);
    expect(countCharInStrings(["So", ["many", ["book", [",", ["so", ["little", ["time."]]]]]]])).toEqual([2, [4, [4, [1, [2, [6, [5]]]]]]]);
  });
});