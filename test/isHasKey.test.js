const { isHasKey } = require("../lib");

describe("isHasKey", () => {
  it("should pass, all dicts contain input key ", () => {
    expect(isHasKey({"key":"test"}, "key")).toBe(true);
    expect(isHasKey({12:"test"}, 12)).toBe(true);
  });

  it("should fail, all dicts not contain input key ", () => {
    expect(isHasKey({"Hacktoberfest": "2017"}, "hello")).toBe(false);
    expect(isHasKey({2017:"Hacktoberfest"}, "hello")).toBe(false);
  });

  it("Throw error when arguments is invalid", () => {
    expect(() => isHasKey(5, 7)).toThrow("Invalid Argument");
    expect(() => isHasKey(null,{})).toThrow("Invalid Argument");
    expect(() => isHasKey(undefined, "test")).toThrow("Invalid Argument");
    expect(() => isHasKey({}, {})).toThrow("Invalid Argument");
  });
});
