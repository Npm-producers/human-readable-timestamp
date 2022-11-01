const toHumanreadableTimestamp = require("./timestamp");

test("when function is called with null it returns null", () => {
  let result = toHumanreadableTimestamp(null);
  expect(result).toBe(null);
});

test("when passing 0 it returns 0d 0h 0m 0s", () => {
  let result = toHumanreadableTimestamp(0);
  expect(result).toBe("0d 0h 0m 0s");
});
