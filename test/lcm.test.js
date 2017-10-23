const { lcm } = require("../lib");

describe("lcm", () => {
  test("lcm(A, B) where A & B are numbers and returns C which is the smallest positive number that is a multiple of them.", () => {
    expect(lcm(3, 5)).toEqual(15);
    expect(lcm(4, 10)).toEqual(20);
  });
  test("lcm(A) where A is a number should return A", ()=>{
    expect(lcm(5)).toEqual(5);
  });
  test("lcm(B) where B is not a number should return 0", ()=>{
    expect(lcm("")).toBe(0);
    expect(lcm("number")).toBe(0);
    expect(lcm({number: "error!"})).toBe(0);
    expect(lcm([1, [1, 2]])).toBe(0);
  });
  test("lcm(A, B) where A & B are not numbers should return 0", ()=>{
    expect(lcm("", "")).toBe(0);
    expect(lcm("1", "2")).toBe(0);
    expect(lcm({number: "error!"}, "number")).toBe(0);
    expect(lcm([1, [1, 2]], "hello")).toBe(0);
  });
});
