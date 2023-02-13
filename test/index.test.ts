import { toHumanreadableTimestamp } from '../lib'

describe('Input validation', function () {
  it("null", () => {
    expect(() => toHumanreadableTimestamp(null as any)).toThrow("null is not a number");

  });

  it("undefined", () => {
    expect(() => toHumanreadableTimestamp(undefined as any)).toThrow("undefined is not a number");

  });

  it("non integer", () => {
    expect(() => toHumanreadableTimestamp("random string")).toThrow("random string is not a number");
  });
});

describe('Conversion', function () {
  it("0 ms", () => {
    expect(toHumanreadableTimestamp('0')).toBe("0d 0h 0m 0s");
  });

  it("one second", () => {
    expect(toHumanreadableTimestamp('1000')).toBe("0d 0h 0m 1s");
  });

  it("one minute", () => {
    expect(toHumanreadableTimestamp('60000')).toBe("0d 0h 1m 0s");
  });

  it("one hour", () => {
    expect(toHumanreadableTimestamp('3600000')).toBe("0d 1h 0m 0s");
  });

  it("one day", () => {
    expect(toHumanreadableTimestamp('86400000')).toBe("1d 0h 0m 0s");
  });

  it("one day, 2 hours, 44 minutes, 5 seconds", () => {
    expect(toHumanreadableTimestamp('96245000')).toBe("1d 2h 44m 5s");
  });

  it("less than one second", () => {
    expect(toHumanreadableTimestamp('999')).toBe("0d 0h 0m 0s");
  });
});