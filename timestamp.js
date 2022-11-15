function toHumanreadableTimestamp(ms) {
  if (ms === null || ms == undefined) {
    return null;
  }

  let intValue = parseInt(ms);

  if (isNaN(intValue) || typeof intValue !== "number") {
    throw `${ms} is not a number`;
  }

  if (ms === 0) {
    return "0d 0h 0m 0s";
  }
}
module.exports = toHumanreadableTimestamp;
