function RLE(input) {
    if (/[0-9]/.test(input))throw new Error("InvalidInput");

  let result = "";
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    const current = input[i];
    const next = input[i + 1];

    if (current === next) {
      count++;
    } else { 
      result += count + current;
      count = 1;
    }
  }

  return result;
}

const fs = require("fs");

const content = fs.readFileSync("text.txt", "utf8").replace(/\r?\n|\r/g, "");

const compressed = RLE(content);

fs.writeFileSync("compressed.txt", compressed, "utf8");

console.log(`Compresie completa!`);
