const  readlineSync = require("readline-sync");

let i =0;
let sp= "";

console.log("");

do {
      i = Number(readlineSync.question("Positive integer: "));
} while (i < 1 || i > Number.MAX_SAFE_INTEGER || Number.isNaN(i) || !Number.isInteger(i));

while (i > 0) {

  let v= (i % 10)
  i= Math.floor(i/10)

  if (i > 0) {
  sp= sp + v + ", ";
  } else{
    sp= sp + v + ". ";
  }

}

console.log("\n" + sp + "\n")
