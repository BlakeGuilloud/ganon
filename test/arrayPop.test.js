const { arrayPop } = require("../lib");

describe("arrayPop", () => {
  it("should preserve type String if String is passed", () => {
    let arr = "fooBar";
    arrayPop(arr);

    expect(arr).toEqual("fooBar");
  });

  it("should preserve type String if String is passed and mutated", () => {
    let arr = "fooBar";
    arrayPop(arr, true);

    expect(arr).toEqual("fooBa");
  });

  it("should not mutate original Array by default", () => {
    let arr = [1, 2, 3, 4];
    let str = "bingBang";

    arrayPop(arr);
    arrayPop(str);

    expect(arr).toEqual([1, 2, 3, 4]);
    expect(str).toEqual("bingBang");
  });

  it("should return mutate original Array when set as param", () => {
    let arr = [1, 2, 3, 4];
    let str = "bingBang";

    arrayPop(arr, true);
    arrayPop(str, true);

    expect(arr).toEqual([1, 2, 3]);
    expect(str).toEqual("bingBan");
  });

  it("should return last element", () => {
    let arr = [1, 2, 3, 4];
    let str = "bingBang";

    arrayPop(arr, true);
    arrayPop(str, true);

    expect(arrayPop(arr)).toEqual(4);
    expect(arrayPop(arr, true)).toEqual(4);
    expect(arrayPop(str)).toEqual("g");
    expect(arrayPop(str, true)).toEqual("g");
  });
});
