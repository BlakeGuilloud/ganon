const { indexOf } = require("../lib");

const array = [0, "wow", 20, false, "unorganized"];

test("index of wow to be 3", () => {
  expect(indexOf(array, "wow")).toBe(1);
});

test("index of unorganized to be 4", () => {
  expect(indexOf(array, "unorganized")).toBe(4);
});

test("index of hello to equal -1", () => {
  expect(indexOf(array, "hello")).toBe(-1);
});
