const { mapArray } = require("../lib");

describe("mapArray", () => {
  it("returns an array of elements transformed by a callback function", () => {
    const arr = [1,2,3,4,5,6,7,8,9,10];
    const callback = function(elem) {
      var result = [];
      for (var i = 0; i < elem.length; i++) {
        result.push(elem[i] ** 2);
      }
      return result;
    };
    expect(mapArray(arr, callback)).toEqual([1,4,9,16,25,36,49,64,81,100]);
  });

  it("does not mutate the input array", () => {
    const arr = [["h","e","l","l","o"], ["h","o","w"], ["a","r","e"], ["y","o","u","?"]];
    const callback = function(elem) { return elem.reverse(); };
    mapArray(arr, callback);
    expect(arr).toEqual([["h","e","l","l","o"], ["h","o","w"], ["a","r","e"], ["y","o","u","?"]]);
  });

  it("throws an error if the first argument is not an array", () => {
    expect(() => mapArray(1, ()=>"boom")).toThrow();
  });

  it("throws an error if the second argument is not a function", () => {
    expect(() => mapArray([1], "explode")).toThrow();
  });
});
