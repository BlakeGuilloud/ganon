const { filterArray } = require("../lib");

describe("filterArray", () => {
  test("Throws when argument arr is not an array", () => {
    expect(() => {
      filterArray({ prop1: "foo", prop2: "bar" }, function(el) {
        return el == 1;
      });
    }).toThrow();
  });

  test("Throws when argument test is not a provided", () => {
    expect(() => {
      filterArray([1, 2, 3], null);
    }).toThrow();
  });

  test("Throws when argument test is not a function", () => {
    expect(() => {
      filterArray([1, 2, 3], "test");
    }).toThrow();
  });

  test("Expect [1, 2, 3] to return [1]", () => {
    expect(
      filterArray([1, 2, 3], function(el) {
        return el == 1;
      })
    ).toEqual([1]);
  });

  test("Expect [\"foo\", \"bar\", 3] to return [\"foo\", \"bar\"]", () => {
    expect(
      filterArray(["foo", "bar", 3], function(el) {
        return typeof el === "string";
      })
    ).toEqual(["foo", "bar"]);
  });
});
