const { isEmailAddress } = require("../lib");

describe("isEmailAddress", () => {
  test("Is Email Address (boogie@woogie.com) ?", () => {
    expect(isEmailAddress("boogie@woogie.com")).toBe(true);
    expect(isEmailAddress("BOOGIE@WOOGIE.COM")).toBe(true);
  });

  test("Is Email Address (boogie+label@woogie.com) ?", () => {
    expect(isEmailAddress("boogie+label@woogie.com")).toBe(true);
  });

  test("Is Invalid Email Address (boogiewoogie.com) ?", () => {
    expect(isEmailAddress("boogiewoogie.com")).toBe(false);
  });

  test("Is Invalid Email Address (boogie @ woogie. noogie) ?", () => {
    expect(isEmailAddress("boogie @ woogie. fo' noogie")).toBe(false);
  });

  test("Throw error on invalid type", () => {
    expect(() => isEmailAddress(3)).toThrow("Invalid Type");
    expect(() => isEmailAddress(["string1", "string2"])).toThrow("Invalid Type");
    expect(() => isEmailAddress(null)).toThrow("Invalid Type");
    expect(() => isEmailAddress(undefined)).toThrow("Invalid Type");
  });
});
