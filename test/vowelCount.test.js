const { vowelCount } = require("../lib");

test("Number of vowels in apple is 2", () => {
  expect(vowelCount("apple")).toBe(2);
});

test("Number of vowels in Oranges is 3", () => {
  expect(vowelCount("Oranges")).toBe(3);
});

test("Number of vowels in gypsy is 0", () => {
  expect(vowelCount("gypsy")).toBe(0);
});

test("Number of vowels in AIEEE is 5", () => {
  expect(vowelCount("AIEEE")).toBe(5);
});