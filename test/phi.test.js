const { phi } = require("../lib");

describe("phi", () => {
  test("phi(1) equals 1", () => {
    expect(phi(1)).toBe(1);
  });

  test("phi(23197) equals 23196", () => {
    expect(phi(23197)).toBe(23196);
  });

  test("phi(827063) equals 827062", () => {
    expect(phi(827063)).toBe(827062);
  });

  test("phi(1008401) equals 1008400", () => {
    expect(phi(1008401)).toBe(1008400);
  });

  test("phi(44788) equals 22392", () => {
    expect(phi(44788)).toBe(22392);
  });

  test("phi(86) equals 42", () => {
    expect(phi(86)).toBe(42);
  });

  test("phi(100000000) equals 40000000", () => {
    expect(phi(100000000)).toBe(40000000);
  });

  test("phi(1299709) equals 1299708", () => {
    expect(phi(1299709)).toBe(1299708);
  });

  test("phi(16) equals 8", () => {
    expect(phi(16)).toBe(8);
  });
});
