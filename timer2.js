/*
The user can press b and it should beep right away
The user can input any number from 1 to 9 and it should
immediately output "setting timer for x seconds...", and
beep after that number of seconds has passed
The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating
*/

// setup for input to work
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// FUNCTION 

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me! Ciao")
    process.exit();
  } else if (key === "b") {
    console.log("BEEP");
  } else if (key >= 1 || key <= 9) {
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout(() => {
      console.log("Beep!");
    }, key * 1000) 
  } else {
    console.log("Not valid input...try again");
  }
});
