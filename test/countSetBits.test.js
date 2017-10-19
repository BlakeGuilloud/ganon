const { countSetBits } = require("../lib");

test("Number of set bits in binary representation of 9 is 2", () => {
  expect(countSetBits(9)).toBe(2);
});

test("Number of set bits in binary representation of 0 is 0", () => {
  expect(countSetBits(0)).toBe(0);
});

test("Number of set bits in binary representation of 99 is 4", () => {
  expect(countSetBits(99)).toBe(4);
});

test("Number of set bits in binary representation of 100 is 3", () => {
  expect(countSetBits(100)).toBe(3);
});

test("Number of set bits in binary representation of 31256 is 7", () => {
  expect(countSetBits(31256)).toBe(7);
});

test("Number of set bits in binary representation of 989878787 is 11", () => {
  expect(countSetBits(989878787)).toBe(11);
});

test("Number of set bits in binary representation of 2 is 1", () => {
  expect(countSetBits(2)).toBe(1);
});

test("Number of set bits in binary representation of 8388608 is 1", () => {
  expect(countSetBits(8388608)).toBe(1);
});