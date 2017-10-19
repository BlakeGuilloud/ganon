const { lerp } = require("../lib");

test("Trivial case #1: lerp between 10 and 20 with amount 0 should be 10", () => {
  expect(lerp(10, 20, 0)).toBe(10);
});

test("Trivial case #2: lerp between 10 and 20 with amount 1 should be 20", () => {
  expect(lerp(10, 20, 1)).toBe(20);
});


test("lerp between 1 and 3 with amount 0.5 should be 2", () => {
  expect(lerp(1, 3, 0.5)).toBe(2);
});

test("lerp between 1 and 3 with amount 1.5 should be 4", () => {
  expect(lerp(1, 3, 1.5)).toBe(4);
});