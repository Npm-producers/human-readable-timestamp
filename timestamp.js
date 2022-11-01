function toHumanreadableTimestamp(ms) {
  if (ms === 0) {
    return "0d 0h 0m 0s";
  }
  return null;
}
module.exports = toHumanreadableTimestamp;
