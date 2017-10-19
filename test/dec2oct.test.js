const { dec2oct } = require("../lib");

test("return octal 28", () => {
  expect(dec2oct(28)).toBe("34");
});

test("return octal 42", () => {
  expect(dec2oct(42)).toBe("52");
});
