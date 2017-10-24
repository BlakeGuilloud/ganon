const convert = require("../lib/convertPoundToKilograms");

describe("convert", () => {
  test("1 Pound is 0.45 Kilograms", () => {
    expect(convert(1)).toBeCloseTo(0.45, 1);
  });

});
