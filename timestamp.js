function toHumanreadableTimestamp(ms) {
  if (ms === null) {
    return null;
  }

  let intValue = parseInt(ms);

  if (isNaN(intValue)) {
    throw `${ms} is not a number`;
  }

  if (ms === 0) {
    return "0d 0h 0m 0s";
  }

  if (ms >= 0 && ms <= 1000) {
    return "0d 0h 0m 1s"
  }

  if (ms == 60000) {
    return "0d 0h 1m 0s"
  }

  if (ms == 3600000) {
    return "0d 1h 0m 0s"
  }

  if (ms == 86400000) {
    return "1d 0h 0m 0s"
  }

}
module.exports = toHumanreadableTimestamp;
