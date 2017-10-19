const { and } = require("../lib");

test("true and true returns true", () => {
  expect(and(true, true)).toBe(true);
});

test("true and false returns false", () => {
  expect(and(true, false)).toBe(false);
});

test("false and true returns false", () => {
  expect(and(false, true)).toBe(false);
});

test("false and false returns false", () => {
  expect(and(false, false)).toBe(false);
});
