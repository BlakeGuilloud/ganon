const { consonantCount } = require("../lib");

describe("consonantCount", () => {
  test("counts number of consonants in a string", () => {
    expect(consonantCount("orangutang")).toBe(6);
    expect(consonantCount("Green Screen")).toBe(7);
  });

  test("ignores case while counting consonants", () => {
    expect(consonantCount("CoPpEr")).toBe(4);
  });

  test("throws an error if passed no argument", () => {
    expect(() => consonantCount()).toThrowError(Error);
  });

  test("throws an error if passed argument isn't a string", () => {
    expect(() => consonantCount(["bacon", "eggs", "toast"])).toThrowError(TypeError);
    expect(() => consonantCount(1)).toThrowError(TypeError);
    expect(() => consonantCount({})).toThrowError(TypeError);
  });
});