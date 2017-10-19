const { sliceLastElements } = require("../lib");

test("return last 2 elements", () => {
  expect(sliceLastElements(2)).toBe([ 999, 1100]);
});

test("return last 4 elements", () => {
  expect(sliceLastElements(4)).toBe([ 169, 366, 999, 1100]);
});
