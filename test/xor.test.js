const { xor } = require("../lib");

test("xor false and true should be true", () => {
  expect(xor(0, 1)).toBe(1);
});

test("xor false and false should be false", () => {
  expect(xor(0, 0)).toBe(0);
});

test("xor true and false should be true", () => {
  expect(xor(1, 0)).toBe(1);
});

test("xor true and true should be false", () => {
  expect(xor(1, 1)).toBe(0);
});
