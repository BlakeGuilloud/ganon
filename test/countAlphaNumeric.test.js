const { countAlphaNumeric } = require("../lib");

describe("countAlphaNumeric", () => {
  test("counting empty string should be 0", () => {
    expect(countAlphaNumeric("")).toBe(0);
  });

  test("counting in string 'ABc4E' should be 5", () => {
    expect(countAlphaNumeric("ABc4E")).toBe(5);
  });

  test("counting in a string 'a#22Dz(L' should be 6", () => {
    expect(countAlphaNumeric("a#22Dz(L")).toBe(6);
  });
});
