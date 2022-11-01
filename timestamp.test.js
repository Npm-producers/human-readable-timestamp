const toHumanreadableTimestamp = require("./timestamp");

describe('Input validation', function() {
  it("when called with null, it returns null", () => {
    let result = toHumanreadableTimestamp(null);
    expect(result).toBe(null);
  });

  it("when called with non integer, it throws exception", () => {
    expect(() => toHumanreadableTimestamp("random string")).toThrow("random string is not a number");
  });
});

describe('Conversion', function() {
  it("0 returns 0d 0h 0m 0s", () => {
    let result = toHumanreadableTimestamp(0);
    expect(result).toBe("0d 0h 0m 0s");
  });
});