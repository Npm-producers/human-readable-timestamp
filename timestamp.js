function toHumanreadableTimestamp(ms) {
  if(ms===null)
  {
    return null;
  }

  let intValue = parseInt(ms);

  if(isNaN(intValue))
  {
    throw `${ms} is not a number`;
  }

  if (ms === 0) {
    return "0d 0h 0m 0s";
  }
}
module.exports = toHumanreadableTimestamp;
