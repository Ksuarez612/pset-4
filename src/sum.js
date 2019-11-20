const readlineSync = require("readline-sync");

let s = 0;

let x = 0;

console.log("")

do {
     lB = Number(readlineSync.question("Lower bound: "));
     uB = Number(readlineSync.question("Upper bound: "));
} while (lB < Number.MIN_SAFE_INTEGER || lB > Number.MAX_SAFE_INTEGER || uB < Number.MIN_SAFE_INTEGER || uB > Number.MAX_SAFE_INTEGER || lB >= uB || Number.isNaN(lB) || Number.isNaN(uB) || !Number.isInteger(lB) || !Number.isInteger(uB));

for (let x = lB; x <= uB; x++) {

      if (x % 2 === 0) {

          for (x = lB; x <= uB; x+=2) {

            s = x + s;

          }
      }
      if (x % 2 !== 0) {

          for (x = lB + 1; x <= uB; x+=2) {

            s = x + s;
          }
      }
}

s = s.toLocaleString('en');

console.log("\n" + s + ".\n")
