const { nor } = require("../lib");

describe("nor", () => {
  test("nor false and true should be false", () => {
    expect(nor(0, 1)).toBeFalsy();
  });

  test("nor false and false should be true", () => {
    expect(nor(0, 0)).toBeTruthy();
  });

  test("nor true and false should be false", () => {
    expect(nor(1, 0)).toBeFalsy();
  });

  test("nor true and true should be true", () => {
    expect(nor(1, 1)).toBeFalsy();
  });
});
