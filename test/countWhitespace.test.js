const { countWhitespace } = require("../lib");

describe("countWhitespace", () => {
  it("returns the number of whitespace characters in a string", () => {
    expect(countWhitespace("Hello!")).toEqual(0);
    expect(countWhitespace("")).toEqual(0);
    expect(countWhitespace("   ")).toEqual(3);
    expect(countWhitespace("asdf\tasdf\t\nhello world ")).toEqual(5);
  });

  it("throws an error if the argument is not a string", () => {
    expect(() => countWhitespace(7)).toThrow();
    expect(() => countWhitespace(null)).toThrow();
    expect(() => countWhitespace({})).toThrow();
    expect(() => countWhitespace(() => {})).toThrow();
    expect(() => countWhitespace(undefined)).toThrow();
    expect(() => countWhitespace(false)).toThrow();
    expect(() => countWhitespace([1, 2, 3])).toThrow();
  });
});
