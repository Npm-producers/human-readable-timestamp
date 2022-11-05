const toHumanreadableTimestamp = require("./timestamp");

test("when function is called with null it returns null", () => {
  let result = toHumanreadableTimestamp(null);
  expect(result).toBe(null);
});

test("when passing 0 it returns 0d 0h 0m 0s", () => {
  let result = toHumanreadableTimestamp(0);
  expect(result).toBe("0d 0h 0m 0s");
});

test("when non integer is passed exception is thrown", () => {
  expect(() => toHumanreadableTimestamp("random string")).toThrow("random string is not a number");
});

test("when passing 1000 miliseconds it returns 0d 0h 0m 1s", () => {
  let result = toHumanreadableTimestamp(1000);
  expect(result).toBe("0d 0h 0m 1s");
});

test("when passing 60000 milliseconds it returns 0d 0h 1m 0s", () => {
  let result = toHumanreadableTimestamp(60000);
  expect(result).toBe("0d 0h 1m 0s");
});

test("when passing 3600000 miliseconds it returns 0d 1h 0m 0s", () => {
  let result = toHumanreadableTimestamp(3600000);
  expect(result).toBe("0d 1h 0m 0s");
})

test("when passing 86400000  miliseconds it returns 0d 1h 0m 0s", () => {
  let result = toHumanreadableTimestamp(86400000);
  expect(result).toBe("1d 0h 0m 0s");
})



