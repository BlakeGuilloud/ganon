const { swapCase } = require("../lib");

test("swapCase of empty string to be empty string", () => {
  expect(swapCase("")).toBe("");
});

test("swapCase of stR to be STr", () => {
  expect(swapCase("stR")).toBe("STr");
});

test("swapCase of aBc#c1 to be AbC#C1", () => {
  expect(swapCase("aBc#c1")).toBe("AbC#C1");
});
