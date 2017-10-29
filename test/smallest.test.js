const { largest } = require("../lib");

describe("largest", () => {
  test("Finds largest according to ordering function", () => {
    expect(largest([1, 2, 3, 4, 5], (a, b) => a > b))
      .toEqual(5);

    expect(largest([3, 2, 5, 4, 1], (a, b) => a > b))
      .toEqual(5);

    expect(largest(["a", "bc", "def"], (a, b) => a.length > b.length))
      .toEqual("def");
  });

  test("Throws when parameter 1 is not an array", () => {
    expect(() => largest(undefined, (a, b) => a > b)).toThrow();
    expect(() => largest(null, (a, b) => a > b)).toThrow();
    expect(() => largest("array", (a, b) => a > b)).toThrow();
    expect(() => largest({}, (a, b) => a > b)).toThrow();
  });

  test("Throws when parameter 2 is not a function", () => {
    expect(() => largest([1, 2, 3, 4, 5])).toThrow();
    expect(() => largest([1, 2, 3, 4, 5], "function")).toThrow();
    expect(() => largest([1, 2, 3, 4, 5], {})).toThrow();
  });
});
