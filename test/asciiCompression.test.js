const { asciiCompression } = require("../lib");

describe("asciiCompression", () => {
  test("asciiCompression of a to equal a1", () => {
    expect(asciiCompression("a")).toBe("a1");
  });

  test("asciiCompression of 'aabb' to equal 'a2b2'", () => {
    expect(asciiCompression("aabb")).toBe("a2b2");
  });

  test("asciiCompression of 'acabb' to equal 'a1c1a1b2'", () => {
    expect(asciiCompression("acabb")).toBe("a1c1a1b2");
  });
});
