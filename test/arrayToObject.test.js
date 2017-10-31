const { arrayToObject } = require("../lib");

describe("arrayToObject", () => {
  test("Should return an empty object", () => {
    expect(arrayToObject()).toEqual({});
    expect(arrayToObject([])).toEqual({});
    expect(arrayToObject(null)).toEqual({});
    expect(arrayToObject("fff")).toEqual({});
    expect(arrayToObject(55)).toEqual({});
  });

  test("Should return an object with correct keys/values", () => {
    let obj = [33, "foo", "bing"];
    let withVal = ["33", "foo", ["bing", "free"]];
    let withValObj = { "33": undefined, "foo": undefined, "bing": "free" };

    expect(arrayToObject(obj)).toEqual({
      "33": undefined,
      "foo": undefined,
      "bing": undefined,
    });
    expect(arrayToObject(withVal)).toEqual(withValObj);
  });

  test("Should return a nested object with correct keys/values", () => {
    let arr = ["33", "foo", ["bing", "free", ["bop", 72]]];
    let obj = { "33": undefined, "foo": undefined, "bing": { "free": undefined, "bop": 72 }};
    let nestedArr = ["33", "foo", ["bing", "free", ["bop", 72, "bar"]]];
    let nestedObj = { "33": undefined, "foo": undefined, "bing": { "free": undefined, "bop": { "72": undefined, "bar": undefined }}};

    expect(arrayToObject(arr)).toEqual(obj);
    expect(arrayToObject(nestedArr)).toEqual(nestedObj);
  });
});
