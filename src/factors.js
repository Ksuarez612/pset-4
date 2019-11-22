const readlineSync = require("readline-sync");

let pi = 0;
let x = 1;
let y = 0;
let o = "";

console.log();

do {
      pi = Number(readlineSync.question("Positive integer: "));
} while (pi <= 0 || pi > Number.MAX_SAFE_INTEGER || Number.isNaN(pi) || !Number.isInteger(pi));

while (x <= Math.floor(Math.sqrt(pi))) {

    if (x <= pi) {
      y = pi % x

      if (x === Math.floor(Math.sqrt(pi))) {
        o = o + x + ". "
        break;
      } else if (y === 0) {
        o = o + x + ", " + (pi / x) + ", "
      }
      x++

    }

}
  console.log("\n" + o + "\n");
