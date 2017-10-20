const { sortAlphabetically } = require("../lib");

describe("sortAlphabetically", () => {
  test("sortAlphabetically([apple, orange, pear, banana]) should return [apple, banana, orange, pear]", () => {
    expect(sortAlphabetically(["apple", "orange", "pear", "banana"])).toEqual(["apple", "banana", "orange", "pear"]);
  });

  test("sortAlphabetically([z, z, a, b, c]) should return [a, b, c, z, z]", () => {
    expect(sortAlphabetically(["z", "z", "a", "b", "c"])).toEqual(["a", "b", "c", "z", "z"]);
  });

  test("sortAlphabetically([bab, abb, bba]) should return [abb, bab, bba]", () => {
    expect(sortAlphabetically(["bab", "abb", "bba"])).toEqual(["abb", "bab", "bba"]);
  });

  test("sortAlphabetically([z]) should return [z]", () => {
    expect(sortAlphabetically(["z"])).toEqual(["z"]);
  });
});
