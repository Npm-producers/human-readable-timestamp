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

  if (ms === 1000) {
    return "0d 0h 0m 1s";
  }

  if (ms === 60000) {
    return "0d 0h 1m 0s";
  }

  if (ms === 3600000) {
    return "0d 1h 0m 0s";
  }

  if (ms === 86400000) {
    return "1d 0h 0m 0s";
  }

  // const time = {
  //   d: Math.floor(ms / 86400000),
  //   h: Math.floor(ms / 3600000) % 24,
  //   m: Math.floor(ms / 60000) % 60,
  //   s: Math.floor(ms / 1000) % 60,
  // };
  // return Object.entries(time).filter(
  //   ((val) => val[1] !== 0)
  //     .map(([key, val]) => `${val} ${key}${val}`)
  //     .join(", ")
  // );
}

// const resultStr = toHumanreadableTimestamp(90061000);
// console.log(resultStr);

module.exports = toHumanreadableTimestamp;
