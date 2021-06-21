const fs = require("fs");

fs.readdir("./", "utf8", (err, files) => {
  if (err) {
    throw err;
  } else {
    module.exports = process.stdout.write(files.join("\n"));
  }
});
