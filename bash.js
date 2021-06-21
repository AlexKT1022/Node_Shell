process.stdout.write('prompt >');
process.stdin.on('data',(data)=>{
  const cmd = data.toString().trim()
  const cwd = process.cwd()
  if (cmd === 'pwd'){
    process.stdout.write(cwd)
  } else{
  process.stdout.write('you typed: ' + cmd)
  process.stdout.write(cwd)
  }
  // process.stdout.write('you typed: ' + cmd)
  process.stdout.write('\nprompt >')
})
