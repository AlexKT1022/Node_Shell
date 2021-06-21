const fs = require("fs");

module.exports = function readFiles(file){
  console.log(file)
  fs.readFile(`${file}`, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

