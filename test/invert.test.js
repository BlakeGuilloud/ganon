const { invert } = require("../lib");
const testObj = {one: "1", two: "2"};
const testString = "Hello World";

describe("invert", () => {
  test("inverts object", () => {
    expect(invert(testObj)).toEqual({"1": "one", "2": "two"});
  });

  test("double invert gets you back where you started", () => {
    expect(invert(invert(testObj))).toEqual(testObj);
  });

  test("non-objects just get returned", () => {
    expect(invert(testString)).toEqual("Hello World");
  });
});
