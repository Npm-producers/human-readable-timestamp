const toHumanreadableTimestamp = require("./timestamp");

describe("Input validation", function () {
  it("returns null when called with null", () => {
    let result = toHumanreadableTimestamp(null);
    expect(result).toBe(null);
  });

  it("returns null when called with undefined", () => {
    let result = toHumanreadableTimestamp(undefined);
    expect(result).toBe(null);
  });

  it("throws an error when called with non integer", () => {
    expect(() => toHumanreadableTimestamp(NaN)).toThrow();
  });
});

describe("Conversion", function () {
  it("0 ms", () => {
    expect(toHumanreadableTimestamp(0)).toBe("0d 0h 0m 0s");
  });

  it("one second", () => {
    expect(toHumanreadableTimestamp(100)).toBe("0d 0h 0m 1s");
  });

  it("one minute", () => {
    expect(toHumanreadableTimestamp(60000)).toBe("0d 0h 1m 0s");
  });

  it("one hour", () => {
    expect(toHumanreadableTimestamp(3600000)).toBe("0d 1h 0m 0s");
  });

  it("one day", () => {
    expect(toHumanreadableTimestamp(86400000)).toBe("1d 0h 0m 0s");
  });
});
