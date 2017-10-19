const { min } = require("../lib");

test("min between 10 and 0 to be 0", () => {
  expect(min(10, 0)).toBe(0);
});

test("min between 0.33 and 33 to be 0.33", () => {
  expect(min(0.33, 33)).toBe(0.33);
});

test("min between 12345 and 12346 to be 12345", () => {
  expect(min(12345, 12346)).toBe(12345);
});
