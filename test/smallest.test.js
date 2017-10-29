const { smallest } = require("../lib");

describe("smallest", () => {
  test("Finds smallest according to ordering function", () => {
    expect(smallest([1, 2, 3, 4, 5], (a, b) => a < b))
      .toEqual(1);

    expect(smallest([3, 2, 5, 4, 1], (a, b) => a < b))
      .toEqual(1);

    expect(smallest(["a", "bc", "def"], (a, b) => a.length < b.length))
      .toEqual("a");
  });

  test("Throws when parameter 1 is not an array", () => {
    expect(() => smallest(undefined, (a, b) => a < b)).toThrow();
    expect(() => smallest(null, (a, b) => a < b)).toThrow();
    expect(() => smallest("array", (a, b) => a < b)).toThrow();
    expect(() => smallest({}, (a, b) => a < b)).toThrow();
  });

  test("Throws when parameter 2 is not a function", () => {
    expect(() => smallest([1, 2, 3, 4, 5])).toThrow();
    expect(() => smallest([1, 2, 3, 4, 5], "function")).toThrow();
    expect(() => smallest([1, 2, 3, 4, 5], {})).toThrow();
  });
});