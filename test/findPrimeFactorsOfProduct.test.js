const { findPrimeFactorsOfProduct } = require("../lib");

describe("findPrimeFactorsOfProduct", () => {
  test("invalid inputs", () => {
    expect(() => findPrimeFactorsOfProduct("ABC")).toThrow();
    expect(() => findPrimeFactorsOfProduct(NaN)).toThrow();
    expect(() => findPrimeFactorsOfProduct({b:"a"})).toThrow();
  });

  test("6    =>  [2,3]", () => {
    var tmp = findPrimeFactorsOfProduct(6);
    expect(tmp.length).toEqual(2);
    expect(tmp.indexOf(2)).not.toEqual(-1);
    expect(tmp.indexOf(3)).not.toEqual(-1);
  });

  test("21   =>  [3,7]", () => {
    var tmp = findPrimeFactorsOfProduct(21);
    expect(tmp.length).toEqual(2);
    expect(tmp.indexOf(3)).not.toEqual(-1);
    expect(tmp.indexOf(7)).not.toEqual(-1);
  });

  test("253  =>  [11,23]", () => {
    var tmp = findPrimeFactorsOfProduct(253);
    expect(tmp.length).toEqual(2);
    expect(tmp.indexOf(11)).not.toEqual(-1);
    expect(tmp.indexOf(23)).not.toEqual(-1);
  });

  test("779  =>  [19,41]", () => {
    var tmp = findPrimeFactorsOfProduct(779);
    expect(tmp.length).toEqual(2);
    expect(tmp.indexOf(19)).not.toEqual(-1);
    expect(tmp.indexOf(41)).not.toEqual(-1);
  });

  test("1003 =>  [17,53]", () => {
    var tmp = findPrimeFactorsOfProduct(21);
    expect(tmp.length).toEqual(1003);
    expect(tmp.indexOf(17)).not.toEqual(-1);
    expect(tmp.indexOf(53)).not.toEqual(-1);
  });
});
