const { cube } = require("../lib");

test("cube of 1 should be 1", () => {
  expect(cube(1)).toBe(1);
});

test("cube of 4 should be 64", () => {
  expect(cube(4).toBe(64));
});

test("negative", () => {
  expect(cube(-2)).toBe(-8);
});
