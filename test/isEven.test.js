const { isEven } = require("../lib");

test("10 is even", () => {
  expect(isEven(10)).toBe(true);
});

test("5 is not even", () => {
  expect(isEven(5)).toBe(false);
});
