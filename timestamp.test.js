const toHumanreadableTimestamp = require("./timestamp");

describe('Input validation', function () {
  it("null", () => {
    let result = toHumanreadableTimestamp(null);
    expect(result).toBe(null);
  });

  it("undefined", () => {
    let result = toHumanreadableTimestamp(undefined);
    expect(result).toBe(null);
  });

  it("non integer", () => {
    expect(() => toHumanreadableTimestamp("random string")).toThrow("random string is not a number");
  });
});

describe('Conversion', function () {
  it("0 ms", () => {
    expect(toHumanreadableTimestamp(0)).toBe("0d 0h 0m 0s");
  });

  it("one second", () => {
    expect(toHumanreadableTimestamp(1000)).toBe("0d 0h 0m 1s");
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

  it("one day, 2 hours, 44 minutes, 5 seconds", () => {
    expect(toHumanreadableTimestamp(96245000)).toBe("1d 2h 44m 5s");
  });

  it("less than one second", () => {
    expect(toHumanreadableTimestamp(999)).toBe("0d 0h 0m 0s");
  });
});