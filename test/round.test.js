const { round } = require("../lib");

test("4.7 rounded to 5", () => {
  expect(round(4.7)).toBe(5);
});

test("4.4 rounded to 4", () => {
  expect(round(4.4)).toBe(4);
});
