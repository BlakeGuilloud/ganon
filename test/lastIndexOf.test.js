const { lastIndexOf } = require("../lib");

describe("lastIndexOf", () => {
  it("returns last index of character in the array/string", () => {
    expect(lastIndexOf("l", "Hello!")).toEqual(3);
    expect(lastIndexOf("o", "Hello World!!")).toEqual(7);
    expect(lastIndexOf("a", [])).toEqual(-1);
    expect(lastIndexOf("a", "b")).toEqual(-1);
    expect(lastIndexOf(3, [1, 2, 4, 3, 5, 7, 3, 2])).toEqual(6);
    expect(lastIndexOf(3, [3, 3])).toEqual(1);
    expect(lastIndexOf(3, [3])).toEqual(0);
    expect(lastIndexOf(3, [1])).toEqual(-1);
    expect(lastIndexOf(3, [])).toEqual(-1);
    expect(lastIndexOf(undefined, [])).toEqual(-1);
    expect(lastIndexOf(undefined, [undefined])).toEqual(0);
  });

  it("Should handle cases for function, or unexpected input.", () => {
    expect(() => lastIndexOf(7, 7)).toThrow();
    expect(() => lastIndexOf(7, {})).toThrow();
    expect(() => lastIndexOf("a", 7)).toThrow();
    expect(() => lastIndexOf("a", {})).toThrow();
    expect(() => lastIndexOf(() => {}, [])).toThrow();
    expect(() => lastIndexOf(7, () => {})).toThrow();
  });
});
