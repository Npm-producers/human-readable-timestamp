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
  it("tests function for input equal to 0", () => {
    const value = 0;
    const expectedResult = "0d 0h 0m 0s";
    expect(toHumanreadableTimestamp(value)).toBe(expectedResult);
  });

  it("tests function for input equal to one second", () => {
    const value = 1000;
    const expectedResult = "0d 0h 0m 1s";
    expect(toHumanreadableTimestamp(value)).toBe(expectedResult);
  });

  it("tests function for input equal to one minute", () => {
    const value = 60000;
    const expectedResult = "0d 0h 1m 0s";
    expect(toHumanreadableTimestamp(value)).toBe(expectedResult);
  });

  it("tests function for input equal to one hour", () => {
    const value = 3600000;
    const expectedResult = "0d 1h 0m 0s";
    expect(toHumanreadableTimestamp(value)).toBe(expectedResult);
  });

  it("tests function for input equal to one day", () => {
    const value = 86400000;
    const expectedResult = "1d 0h 0m 0s";
    expect(toHumanreadableTimestamp(value)).toBe(expectedResult);
  });
});
