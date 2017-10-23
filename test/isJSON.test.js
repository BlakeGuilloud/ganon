const { isJSON } = require("../lib");

describe("isJSON", () => {
  test("valid JSON string should return true", () => {
    expect(isJSON(JSON.stringify({"test":"working"}))).toBe(true);
  });

  test("valid JSON string should return true", () => {
    expect(isJSON("[]")).toBe(true);
  });

  test("invalid JSON should return false", () => {
    expect(isJSON("[{'test':'should fail'}]")).toBe(false);
  });

});
