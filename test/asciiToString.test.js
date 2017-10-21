const { asciiToString } = require("../lib");

describe("ASCIIToString", () => {
  test("convert ASCII to Hello World", () => {
    expect(asciiToString([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100])).toBe("Hello World");
  });

  test("convert ASCII to Happy Hacktoberfest!", () => {
    expect(asciiToString([72, 97, 112, 112, 121, 32, 72, 97, 99, 107, 116, 111, 98, 101, 114, 102, 101, 115, 116, 33])).toBe("Happy Hacktoberfest!");
  });
});
