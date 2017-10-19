const { sliceLastElements } = require("../lib");
const sampleList = [ 1, 2, 3, 42, 69, 169, 366, 999, 1100];

test("return last 2 elements", () => {
  expect(sliceLastElements(sampleList, 2)).toEqual([ 999, 1100]);
});

test("return last 4 elements", () => {
  expect(sliceLastElements(sampleList, 4)).toEqual([ 169, 366, 999, 1100]);
});
