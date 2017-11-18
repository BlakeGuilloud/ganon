const { fork, sum } = require("../lib");

const length = (arr) => arr.length;
const divide = (num, denom) => num / denom;

describe("fork", () => {
  test("should return correct averages", () => {
    expect(fork(divide, sum, length, [8,9,6,5])).toEqual(7);
    expect(fork(divide, sum, length, [200, -200])).toEqual(0);
  });

  test("should be curried", () => {
    let sansDomain = fork(divide, sum, length);
    let sansDomainFn = fork(divide, sum);
    let sansDomainFnFn = fork(divide);
    let sansAll = fork();

    expect(sansDomain([16, 18])).toEqual(17);
    expect(sansDomainFn(length, [16, 18])).toEqual(17);
    expect(sansDomainFnFn(sum, length, [16, 18])).toEqual(17);
    expect(sansAll(divide, sum, length, [16, 18])).toEqual(17);
  });
});
