process.stdout.write("prompt > ");
process.stdin.on('data',(data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd" || cmd === "ls") {
    require("./" + cmd + ".js");
  }
});
