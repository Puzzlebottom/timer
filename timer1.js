const timer = (secondsArray) => {
  const convertToMilliseconds = (seconds) => seconds * 1000;

  if (!secondsArray) return;
  if (!Array.isArray(secondsArray)) return;
  if (secondsArray.length === 0) return;

  for (const arg of timerDelay) {
    if (isNaN(arg)) continue;

    const delay = convertToMilliseconds(arg);
    setTimeout(() => {
      process.stdout.write("\x07");
    }, delay);
  }
};

let args = process.argv;
let timerDelay = args.slice(2);

timer(timerDelay);