function toHumanreadableTimestamp(ms) {

  if (ms === null || ms == undefined) {

    return null;
  }

  let intValue = parseInt(ms);

  if (isNaN(intValue)) {
    throw `${ms} is not a number`;
  }

  let days = Math.floor(intValue / msInADay);
  let remainingMs = intValue - (msInADay * days);

  let hours = Math.floor(remainingMs / msInAnHour);
  remainingMs = intValue - (msInADay * days) - (msInAnHour * hours);

  let minutes = Math.floor(remainingMs / msInAMinute);
  remainingMs = intValue - (msInADay * days) - (msInAnHour * hours) - (msInAMinute * minutes);
  let seconds = Math.floor(remainingMs / msInASecond);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
module.exports = toHumanreadableTimestamp;

let msInASecond = 1000;
let msInAMinute = msInASecond * 60;
let msInAnHour = msInAMinute * 60;
let msInADay = msInAnHour * 24;
