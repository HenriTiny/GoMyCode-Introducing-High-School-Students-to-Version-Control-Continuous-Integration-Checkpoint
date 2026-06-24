const { add, multiply } = require("../src/math");

test("2 + 3 = 5", () => {
    expect(add(2, 3)).toBe(5);
});

test("2 * 3 = 6", () => {
    expect(multiply(2, 3)).toBe(6);
});