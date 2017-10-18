const { nor } = require("../lib");

test("nor false and true should be false", () => {
  expect(nor(0, 1)).toBe(1);
});

test("nor false and false should be true", () => {
  expect(nor(0, 0)).toBe(0);
});

test("nor true and false should be false", () => {
  expect(nor(1, 0)).toBe(1);
});

test("nor true and true should be true", () => {
  expect(nor(1, 1)).toBe(0);
});
