function calculateSleepTime(times) {
  //  validation
  if (!Array.isArray(times)) {
    return "Invalid";
  } else {
    for (const time of times) {
      if (typeof time !== "number") {
        return "Invalid";
      }
    }
  }

  let sumOfTime = 0;
  for (const time of times) {
    sumOfTime += time;
  }
  let s = sumOfTime % 60;
  let m = sumOfTime / 60;
  let h = m / 60;
  m= m % 60;
  let timeObj = {
    hour: parseInt(h),
    minute: parseInt(m),
    second: parseInt(s)
  };
  return timeObj;
}
