const { isArrayEqual } = require("../lib");

describe("isArrayEqual", () => {
  test("arrays are equal", () => {
    expect(isArrayEqual([1,2,3],[3,2,1])).toBe(true);
    expect(isArrayEqual([11.01, 13, 7 ], [13, 7, 11.01])).toBe(true);
    expect(isArrayEqual(["Hack", "to", "ber", "fest"], ["fest", "ber", "Hack", "to"])).toBe(true);
    expect(isArrayEqual(["bits", 0, "bytes", 1], [1, "bits", 0, "bytes"])).toBe(true);
  });

  test("arrays are unequal", () => {
    expect(isArrayEqual(["this", "is", "a", "test"], ["test", "is", "cool"])).toBe(false);
    expect(isArrayEqual([1,55,7,43,2], ["hello", "whoever", "doing", "this"])).toBe(false);
    expect(isArrayEqual(["Bla", "Bla", "Bla"], [1,5,8,4,2])).toBe(false);
  });

  test("throw 'Invalid Argument' when one or more of the parameters are not arrays", () => {
    expect(() => isArrayEqual("asdf", [1,2,3,4])).toThrow("Invalid Argument");
    expect(() => isArrayEqual(NaN, [1])).toThrow("Invalid Argument");
    expect(() => isArrayEqual({"test":"test"}, NaN)).toThrow("Invalid Argument");
    expect(() => isArrayEqual([1,2,3], "Hi")).toThrow("Invalid Argument");
  });
});
