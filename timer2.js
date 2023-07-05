
process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');


process.stdin.on('data', (key) => {

  const ctrlC = '\x03';
  const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const beep = () => process.stdout.write("\x07");

  const beepAfter = (seconds) => {

    const convertToMilliseconds = (seconds) => seconds * 1000;
    const delay = convertToMilliseconds(seconds);

    setTimeout(() => {
      // process.stdout.write("\x07");
      process.stdout.write("ALARM!\n");
    }, delay);
  };

  if (key === 'b') {
    beep();
  }

  if (NUMBERS.includes(key)) {
    process.stdout.write(`setting timer for ${key} seconds...\n`);
    beepAfter(Number(key));
  }

  if (key === ctrlC) {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }
});