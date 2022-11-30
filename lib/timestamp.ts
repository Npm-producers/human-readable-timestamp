export function toHumanreadableTimestamp(ms: string): string {

  if (ms === null || ms == undefined) {

    return null;
  }

  let intValue: number = parseInt(ms);

  if (isNaN(intValue)) {
    throw `${ms} is not a number`; // ts throw error
  }

  let days: number = Math.floor(intValue / msInADay);
  let remainingMs: number = intValue - (msInADay * days);

  let hours: number = Math.floor(remainingMs / msInAnHour);
  remainingMs = intValue - (msInADay * days) - (msInAnHour * hours);

  let minutes: number = Math.floor(remainingMs / msInAMinute);
  remainingMs = intValue - (msInADay * days) - (msInAnHour * hours) - (msInAMinute * minutes);
  let seconds: number = Math.floor(remainingMs / msInASecond);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

let msInASecond: number = 1000;
let msInAMinute: number = msInASecond * 60;
let msInAnHour: number = msInAMinute * 60;
let msInADay: number = msInAnHour * 24;
