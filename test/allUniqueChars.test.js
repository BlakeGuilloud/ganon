const { allUniqueChars } = require("../lib");

describe("allUniqueChars", () => {
  test("Completely unique string should return true", () => {
    expect(allUniqueChars("abcdefghijklmnopqrstuvwxyz")).toBe(true);
    expect(allUniqueChars("z39nfPOde")).toBe(true);
    expect(allUniqueChars("!@#$%^&*()_=")).toBe(true);
    expect(allUniqueChars("AaBbCcDdEeFfGgHhIiJjKkLlMm")).toBe(true);
    expect(allUniqueChars("")).toBe(true);
  });

  test("Non-unique strings should return false", () => {
    expect(allUniqueChars("aaaaaaaaaaaaaaaaaa")).toBe(false);
    expect(allUniqueChars("This is a test")).toBe(false);
    expect(allUniqueChars("Ganon is a cool project.")).toBe(false);
  });

  test("Throw invalid type error on unexpected input", () => {
    expect(function(){allUniqueChars(null);}).toThrow("Invalid type");
    expect(function(){allUniqueChars(undefined);}).toThrow("Invalid type");
    expect(function(){allUniqueChars(39125);}).toThrow("Invalid type");
    expect(function(){allUniqueChars(["This is a test"]);}).toThrow("Invalid type");
    expect(function(){allUniqueChars(true);}).toThrow("Invalid type");
  });
});
