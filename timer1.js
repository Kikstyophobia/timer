let timers = process.argv.slice(2)

for (let seconds of timers) {
  setTimeout(() => {
    process.stdout.write(seconds + " seconds has elapsed.\n");
  }, seconds * 1000);
};

