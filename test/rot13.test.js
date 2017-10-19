const { rot13 } = require("../lib");

test("rot13", () => {
  expect(rot13("Hello")).toBe("Uryyb");
});
