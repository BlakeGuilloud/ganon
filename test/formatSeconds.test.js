const { formatSeconds } = require("../lib");

describe("formatSeconds", () => {
  test("sample conversions to time strings", () => {
    expect(formatSeconds(0)).toBe("00:00:00");
    expect(formatSeconds(1)).toBe("00:00:01");
    expect(formatSeconds(128)).toBe("00:02:08");
    expect(formatSeconds(3920)).toBe("01:05:20");
  });

  test("throw error when the argument is not a number", () => {
    expect(() => formatSeconds(null)).toThrow();
    expect(() => formatSeconds(true)).toThrow();
    expect(() => formatSeconds(undefined)).toThrow();
    expect(() => formatSeconds("1")).toThrow();
  });

  test("throw error when the argument is a negative number", () => {
    expect(() => formatSeconds(-1)).toThrow();
    expect(() => formatSeconds(-128)).toThrow();
    expect(() => formatSeconds(-69)).toThrow();
  });
});
