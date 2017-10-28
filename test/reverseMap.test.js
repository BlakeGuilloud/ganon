const { reverseMap } = require("../lib");

describe("reverseMap", () => {
  describe("with an empty map", () => {
    test("should return an empty map", () => {
      const map = new Map();
      expect(reverseMap(map).entries()).toEqual(map.entries());
    });
  });

  describe("with a non-empty map", () => {
    test("should return a reversed map", () => {
      const map = new Map([["key1", "value1"], ["key2", "value2"]]);
      const reversedMap = reverseMap(map);
      for (let [key, value] of reversedMap) {
        expect(key).toBe(map.get(value));
      }
    });
  });
});
