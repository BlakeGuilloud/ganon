const { dec2binary } = require("../lib");

describe("dec2binary", () => {
  test("binary representation of 2 is '10'", () => {
    expect(dec2binary(2)).toBe("10");
  });

  test("binary representation of 9 is '1001'", () => {
    expect(dec2binary(9)).toBe("1001");
  });

  test("binary representation of 0 is '0'", () => {
    expect(dec2binary(0)).toBe("0");
  });

  test("binary representation of 1 is '1'", () => {
    expect(dec2binary(1)).toBe("1");
  });

  test("binary representation of 56 is '111000'", () => {
    expect(dec2binary(56)).toBe("111000");
  });

  test("binary representation of 9999 is '10011100001111'", () => {
    expect(dec2binary(9999)).toBe("10011100001111");
  });

  test("binary representation of 85775867 is '101000111001101010111111011'", () => {
    expect(dec2binary(85775867)).toBe("101000111001101010111111011");
  });

  test("binary representation of 67108864 is '100000000000000000000000000'", () => {
    expect(dec2binary(67108864)).toBe("100000000000000000000000000");
  });
});