const { convertPetabytesToGigabytesBinary } = require("../lib");

describe("convertPetabytesToGigabytesBinary", () => {
  test("function converts Petabytes to Gigabytes", () => {
    expect(convertPetabytesToGigabytesBinary(0)).toBe(0);
    expect(convertPetabytesToGigabytesBinary(0.2)).toBe(209715.2);
    expect(convertPetabytesToGigabytesBinary(0.5)).toBe(524288);
    expect(convertPetabytesToGigabytesBinary(1)).toBe(1048576);
    expect(convertPetabytesToGigabytesBinary(1.2)).toBe(1258291.2);
  });

  test("throw error when the argument is not a number", () => {
    expect(() => convertPetabytesToGigabytesBinary(null)).toThrow();
    expect(() => convertPetabytesToGigabytesBinary(true)).toThrow();
    expect(() => convertPetabytesToGigabytesBinary(undefined)).toThrow();
    expect(() => convertPetabytesToGigabytesBinary("1")).toThrow();
  });
});
