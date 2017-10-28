const { arrayDuplicateCount } = require("../lib");

describe("arrayDuplicateCount", () => {
  test("unique values ['Pen', 'Paper', 'Pencil', 'Cake'] to equal 0", () => {
    expect(arrayDuplicateCount(["Pen", "Paper", "Pencil", "Cake"])).toBe(0);
  });

  test("['Pen', 'Pen', 'Pencil', 'Cake'] to equal 1", () => {
    expect(arrayDuplicateCount(["Pen", "Pen", "Pencil", "Cake"])).toBe(1);
  });

  test("Empty array must be equal to 0", () => {
    expect(arrayDuplicateCount([])).toBe(0);
  });

  test("['Pen', 'Pen', 'Pencil', 'Pencil'] must be equal to 2", () => {
    expect(arrayDuplicateCount(["Pen", "Pen", "Pencil", "Pencil"] )).toBe(2);
  });

  test("['Pen', 'Pen', 'Pen', 'Pen'] must be equal to 3", () => {
    expect(arrayDuplicateCount(["Pen", "Pen", "Pen", "Pen"] )).toBe(3);
  });
});