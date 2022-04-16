const fs = require("fs");
const fileReadStream = fs.createReadStream("./content/textfile1.txt", "utf8");
const fileWriteStream = fs.createWriteStream("./content/output.txt", "utf8");

// ? Option one
/* fileReadStream.on("data", (text) => {
  console.log(text);
  fileWriteStream.write(text);
}); */

// ? Option two:::
fileReadStream.pipe(fileWriteStream);
console.log("i am first");
