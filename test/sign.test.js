const { sign } = require("../lib");

test("Sign of a negative number !=-0 should be -1", () => {
    expect(sign(-123)).toBe(-1);
});

test("Sign of a postive number !=0 should be 1", () => {
    expect(sign(123)).toBe(1);
});

test("Sign of a NaN should be NaN", () => {
    expect(sign(NaN)).toBe(NaN);
});

test("Sign of a -0 should be -0", () => {
    expect(sign(-0)).toBe(-0);
});

test("Sign of a 0 should be 0", () => {
    expect(sign(0)).toBe(0);
});



