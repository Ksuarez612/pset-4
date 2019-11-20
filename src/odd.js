const  readlineSync = require("readline-sync");

let i =0;
let sp= "";
let s= 0;

console.log("");

do {
      i = Number(readlineSync.question("Positive integer: "));
} while (i < 1 || i > Number.MAX_SAFE_INTEGER || Number.isNaN(i) || !Number.isInteger(i));

while (i > 0) {

  let v = (i % 10)
  i = Math.floor(i / 10)

  if (v % 2 === 1) {
    s = s + v;
  } else if (v % 2 === 0){
    continue;
  } else {
    continue;
  }

}
console.log("\n" + s + ".\n");
