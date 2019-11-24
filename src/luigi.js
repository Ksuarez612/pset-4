const readlineSync = require("readline-sync");

let h;
let r;
let sh;
let p = "";
let sp = 1;
let ha = 1;

console.log();

do {
  h = Number(readlineSync.question("Height: "));
} while (h < 1 || h > 24 || Number.isNaN(h) || !Number.isInteger(h));

r = h + 1;
sh = 2;

console.log();

for (let x = 0; x < h; x++) {

  while (sp <= r - sh) {
    p = p + " ";
    sp++;
  }

  while (ha <= sh) {
    p = p + "#";
    ha++;
  }

  p = p + "  ";
  sp = 1;
  ha = 1;

  while (ha <= sh) {
    p = p + "#";
    ha++;
  }

  console.log(p);
  sh++;
  p = "";
  sp = 1;
  ha = 1;
}

console.log();
