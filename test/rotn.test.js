const { rotn } = require("../lib");

describe("rotn", () => {
  test("rotn 13", () => {
    expect(rotn("Hello", 13)).toBe("Uryyb");
  });

  test("rotn 5 lowercase", () => {
    expect(rotn("abcdefghijklmnopqrstuvwxyz", 5)).toBe("fghijklmnopqrstuvwxyzabcde");
  });

  test("rotn 7 uppercase", () => {
    expect(rotn("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 7)).toBe("HIJKLMNOPQRSTUVWXYZABCDEFG");
  });

  test("rotn 1 uppercase and lowercase", () => {
    expect(rotn("ABcDEFgHIJKLMNoPqRSTuVWXyZ", 1)).toBe("BCdEFGhIJKLMNOpQrSTUvWXYzA");
  });

  test("rotn 0 uppercase and lowercase", () => {
    expect(rotn("ABcDEFgHIJKLMNoPqRSTuVWXyZ", 0)).toBe("ABcDEFgHIJKLMNoPqRSTuVWXyZ");
  });
});
