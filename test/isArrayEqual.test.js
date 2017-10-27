const { arrayUnion } = require("../lib");

describe("arrayUnion", () => {
  test("both of array are equal", () => {
    expect(arrayUnion([1,2,3],[3,2,1])).toBe(true);
    expect(arrayUnion([11.01, 13, 7 ], [13, 7, 11.01])).toBe(true);
    expect(arrayUnion(["Hack", "to", "ber", "fest"], ["fest", "ber", "Hack", "to"])).toBe(true);
  });

  test("both array are unequal", () => {
    expect(arrayUnion(["this", "is", "a", "test"], ["test", "is", "cool"])).toBe(false);
    expect(arrayUnion([1,55,7,43,2], ["hello", "whoever", "doing", "this"])).toBe(false);
    expect(arrayUnion(["Bla", "Bla", "Bla"], [1,5,8,4,2])).toBe(false);
  });

  test("Throw 'Invalid Argument' when both of the parameter are not array", () => {
    expect(() => arrayUnion("asdf", [1,2,3,4])).toThrow("Invalid Argument");
    expect(() => arrayUnion(NaN, [1])).toThrow("Invalid Argument");
    expect(() => arrayUnion({"test":"test"}, NaN)).toThrow("Invalid Argument");
    expect(() => arrayUnion([1,2,3], "Hi")).toThrow("Invalid Argument");
  });
});
