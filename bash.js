process.stdout.write("prompt > ");
process.stdin.on('data',(data) => {
  const cmd = data.toString().trim().split(' ');

  if (cmd[0] === "pwd" || cmd[0] === "ls") {
    done(require("./" + cmd[0] + ".js"));
  } else if (cmd[0] === "cat"){
    const readFiles = require("./cat.js")
    for (let i = 1; i < cmd.length; i++){
      readFiles(`./${cmd[i]}.js`)
    }
  } else if (cmd[0] === "curl") {
    const curl = require("./curl.js");

    curl(cmd[1]);
  }
});

const done = (output) => {
  console.log(output);
  console.log("\nprompt > ");
}
