const { hamming } = require("../lib");

describe("hamming", () => {

  test("should determine no difference", () => {
    expect(hamming("A", "A")).toEqual(0);
  });

  test("should successfully calculate hamming distance for equal strings", () => {
    expect(hamming("A", "G")).toEqual(1);
    expect(hamming("AG", "CT")).toEqual(2);
    expect(hamming("AGGTA", "AGGTA")).toEqual(0);
    expect(hamming("TGCTAGATTACA", "TGCCAGATGACA")).toEqual(2);
  });

  test("should throw exception when DNA lengths do not match", () => {
    expect(() => hamming("GGACG", "AGGACGTGG")).toThrow("DNA strands must be equal length");
  });
});
