const { dec2hex } = require("../lib");

describe("dec2hex", () => {
  test("return hex 28", () => {
    expect(dec2hex(28)).toBe("1C");
  });

  test("return hex 42", () => {
    expect(dec2hex(42)).toBe("2A");
  });
});
