const { hex2dec } = require("../lib");

describe("hex2dec", () => {
  test("return dec 28 as type number", () => {
    expect(hex2dec("1C")).toBe(28);
  });

  test("return dec 42 as type number", () => {
    expect(hex2dec("2A")).toBe(42);
  });
});
