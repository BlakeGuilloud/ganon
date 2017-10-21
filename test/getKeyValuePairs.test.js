const { getKeyValuePairs } = require("../lib");

describe("getKeyValuePairs", () => {
  test("getKeyValuePairs returns an empty array for an empty object", () => {
    expect(getKeyValuePairs({}, ",")).toEqual([]);
  });

  test("getKeyValuePairs returns the key value pairs array for a non-nested object", () => {
    expect(getKeyValuePairs({ a: "a", b: "b" }, ","))
      .toEqual([{key: "a", value: "a"}, {key: "b", value: "b"}]);
  });

  test("getKeyValuePairs returns the key value pairs array for a nested object", () => {
    expect(getKeyValuePairs({ a: { aa: "aa", bb: "bb" }, b: "b" }, ","))
      .toEqual([{key: "a,aa", value: "aa"}, {key: "a,bb", value: "bb"}, {key: "b", value: "b"}]);
  });
});