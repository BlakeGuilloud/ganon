const { deepSearch } = require("../lib");

const testData = {
  testData: [
    { type: "string", value: "test1" },
    { type: "number", value: 1 },
    {
      type: "array",
      value: [
        { type: "string", value: "test2" },
        {
          type: "array",
          value: [
            { type: "string", value: "test3" },
            { type: "number", value: 2, meta: "Prime number" }
          ]
        }
      ]
    }
  ]
};

describe("deepSearch", () => {
  test("Deep search test", () => {
    expect(
      deepSearch(testData, item => item.type === "string")).toEqual([
      { type: "string", value: "test1" },
      { type: "string", value: "test2" },
      { type: "string", value: "test3" }
    ]);
    expect(
      deepSearch(testData, item => item.type === "number")).toEqual([
      { type: "number", value: 1 },
      { type: "number", value: 2, meta: "Prime number" }
    ]);
    expect(
      deepSearch(
        testData,
        item => item.type === "number" && item.value === 2
      )).toEqual([{ type: "number", value: 2, meta: "Prime number" }]);
    expect(deepSearch(testData, item => item.type === "invalid")).toEqual([]);
  });

  test("null, undefined test", () => {
    expect(deepSearch(null, undefined)).toThrow();
    expect(deepSearch(null, null)).toThrow();
  });
});
