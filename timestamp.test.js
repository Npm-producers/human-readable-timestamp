const toHumanreadableTimestamp = require("./timestamp");

describe('Input validation', function() {
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


describe("Conversion", () => {
it("throws an exception when passed null or undefined", () => {
  expect(() => toHumanreadableTimestamp("random string")).toThrow("random string is not a number");
});

it("returns 0d 0h 0m 1s when passing 1000 miliseconds", () => {
  let result = toHumanreadableTimestamp(1000);
  expect(result).toBe("0d 0h 0m 1s");
});

it("returns 0d 0h 1m 0s when passing 60000 miliseconds", () => {
  let result = toHumanreadableTimestamp(60000);
  expect(result).toBe("0d 0h 1m 0s");
});

it("returns 0d 1h 0m 0s when passing 3600000 miliseconds", () => {
  let result = toHumanreadableTimestamp(3600000);
  expect(result).toBe("0d 1h 0m 0s");
})

it("returns 1d 0h 0m 0s when passing 86400000 miliseconds", () => {
  let result = toHumanreadableTimestamp(86400000);
  expect(result).toBe("1d 0h 0m 0s");
})

});
