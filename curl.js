const request = require("request");

module.exports = function (url) {
  request(url, function (error, response, body) {
    console.log(body);
    process.stdout.write("\nprompt > ");
  });

}


