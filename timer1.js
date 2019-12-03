const input = process.argv.slice(2);

for (let number of input) {
  if (number < 0 || typeof number !== "number") {
    console.log("can't beep in the past, sorry. Or you've typed in a non-number");
  } else {
  setTimeout(() => {
    console.log("Beep");
    return process.stdout.write('\x07');
  }, number * 1000) 
}
}