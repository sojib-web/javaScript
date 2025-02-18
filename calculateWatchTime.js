function calculateWatchTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  }

  for (let time of times) {
    if (typeof time !== "number") {
      return "Invalid";
    }
  }
  let totalSeconds = 0;
  for (let i = 0; i < times.length; i++) {
    totalSeconds += times[i];
  }
  return {
    hour: Math.floor(totalSeconds / 3600),
    minute: Math.floor((totalSeconds % 3600) / 60),
    second: totalSeconds % 60,
  };
}

// @ts-ignore
const result = calculateWatchTime([]);
console.log(result);
