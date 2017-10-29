const { curryPartial } = require("../lib");

describe("curryPartial", () => {
  const add = function(a, b, c) {
    return a + b + c;
  };

  test("returns a function", () => {
    expect(typeof curryPartial(add)).toEqual("function");
  });

  test("throws if the first argument provided is not an instance of Function", () => {
    const invalidFirstArgument = function() {
      curryPartial(1);
    };
    expect(invalidFirstArgument).toThrowError(TypeError);
  });

  test("allows the resulting function to be applied like a curried function", () => {
    const curriedAdd = curryPartial(add);

    expect(curriedAdd(1)(2)(3)).toEqual(6);
  });

  test("allows partial application of the resulting function", () => {
    const partialAdd = curryPartial(add, 1);

    expect(partialAdd(2, 3)).toEqual(6);
  });

  test("allows a combination of currying and partial application to be used when invoking the resulting function", () => {
    expect(curryPartial(add, 1)(2)(3)).toEqual(6);
    expect(curryPartial(add, 1, 2)(3)).toEqual(6);
    expect(curryPartial(add, 1, 2, 3)).toEqual(6);
    expect(curryPartial(add)(1, 2, 3)).toEqual(6);
    expect(curryPartial(add)(1, 2)(3)).toEqual(6);
  });

  test("is flexible and preserves state in a way that allows for invocation without arguments and invocation with extra arguments", () => {
    expect(curryPartial(add)()(1, 2, 3)).toEqual(6);
    expect(curryPartial(add)()(1)()()(2)(3)).toEqual(6);
    expect(curryPartial(add)()(1)()()(2)(3, 4, 5, 6)).toEqual(6);
    expect(curryPartial(add, 1)(2, 3, 4, 5)).toEqual(6);
  });

  test("is flexible in a way that allows for invocation on nested calls to itself", () => {
    expect(curryPartial(curryPartial(curryPartial(add, 1), 2), 3)).toEqual(6);
    expect(curryPartial(curryPartial(add, 1, 2), 3)).toEqual(6);
    expect(curryPartial(add, 1), 2, 3).toEqual(6);
    expect(curryPartial(curryPartial(add, 1), 2)(3)).toEqual(6);
    expect(curryPartial(curryPartial(add, 1)(2), 3)).toEqual(6);
    expect(curryPartial(curryPartial(curryPartial(add, 1)), 2, 3)).toEqual(6);
  });
});
