const { dec2hex } = require("../lib");

test("return hex 28", () => {
  expect(dec2hex(28)).toBe("1C");
});

test("return hex 42", () => {
  expect(dec2hex(42)).toBe("2A");
});
