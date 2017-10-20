const { flattenNestedObject } = require("../lib");

describe("flattenNestedObject", () => {

  it("should throw an error if first argument is not an object", () => {

    expect(() => flattenNestedObject()).toThrow();
    expect(() => flattenNestedObject(4)).toThrow();
    expect(() => flattenNestedObject("apple")).toThrow();
    expect(() => flattenNestedObject([1,2,3])).toThrow();
    expect(() => flattenNestedObject(() => "whatever")).toThrow();

  });

  it("should return the same object if there are no nested objects inside the object", () => {

    var object1 = { a : 1, b : "banana" }, object2 = { a : [1, 2, 3], b : 20 };

    expect(flattenNestedObject(object1)).toBe(object1);
    expect(flattenNestedObject(object2)).toBe(object2);

  });

  it("should return the flattened object of the passed nested object parameter with default delimiter(.)", () => {

    const parameterInput1 = { a : 1, b : "banana", c : { d : [1, 2, 3] } },
      output1 = { "a" : 1, "b" : "banana", "c.d" : [1, 2, 3] },
      parameterInput2 = { "a" : 1, "b" : { "c" : { "d" : { "e" : 1, "f" : 2 } } } },
      output2 = {"a": 1, "b.c.d.e": 1, "b.c.d.f": 2};

    expect(flattenNestedObject(parameterInput1)).toEqual(output1);
    expect(flattenNestedObject(parameterInput2)).toEqual(output2);
  });

  it("should return the flatten object of the passed nested object parameter with a custom delimiter(-)", () => {

    const parameterInput1 = { a : 1, b : "banana", c : { d : [1, 2, 3] } },
      output1 = { "a" : 1, "b" : "banana", "c-d" : [1, 2, 3] },
      parameterInput2 = { "a" : 1, "b" : { "c" : { "d" : { "e" : 1, "f" : 2 } } } },
      output2 = {"a": 1, "b-c-d-e": 1, "b-c-d-f": 2};

    expect(flattenNestedObject(parameterInput1, "-")).toEqual(output1);
    expect(flattenNestedObject(parameterInput2, "-")).toEqual(output2);
  });

});