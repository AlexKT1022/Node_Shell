process.stdout.write("prompt > ");
process.stdin.on('data',(data) => {
  const cmd = data.toString().trim().split(' ');

  if (cmd[0] === "pwd" || cmd[0] === "ls") {
    require("./" + cmd[0] + ".js");
  } else if (cmd[0] === "cat"){
    const readFiles = require("./cat.js")
    for (let i = 1; i < cmd.length; i++){
      readFiles(`./${cmd[i]}.js`)
    }
  }
});
