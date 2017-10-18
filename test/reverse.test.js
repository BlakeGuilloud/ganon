const { reverse } = require("../lib");

test("reverses a string", () => {
  expect(reverse("Blake Guilloud")).toBe("duolliuG ekalB");
});

test("reverses an integer", () => {
  expect(reverse(47109)).toBe(90174);
});

test("reverse an array", () => {
  expect(() => reverse([1, 2, 3, 4]))
    .toThrow(new Error("Type not allowed"));
});
