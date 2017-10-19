const { sign } = require("../lib");

test("Sign of a negative number should be -1", () => {
  expect(sign(-123)).toBe(-1);
});

test("Sign of a postive number should be 1", () => {
  expect(sign(123)).toBe(1);
});

test("Sign of a NaN should be NaN", () => {
  expect(sign(NaN)).toBeFalsy();
});
