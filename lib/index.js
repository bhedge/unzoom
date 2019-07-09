
const spawn = require('child_process').spawnSync

async function main () {
  console.log(title())
  console.log('********************************************************************************************************')

  console.log(`Current platform is: ${process.platform}`)
  switch (process.platform) {
    case 'darwin':
      console.log('Processing Mac Vulnerability 1 (The Zoom web server listening on port 19421)...')
      macVuln1()
      console.log('Processing Mac Vulnerability 1 is complete. 🎉 🎉 🎉')
      break
    case 'freebsd':
      console.log('A fix is not implemented on your platform yet.')
      break
    case 'linux':
      console.log('A fix is not implemented on your platform yet.')
      break
    case 'sunos':
      console.log('A fix is not implemented on your platform yet.')
      break
    case 'win32':
      console.log('A fix is not implemented on your platform yet.')
      break
    default:
      console.log('There are no known vulnerabilities on your system for Zoom. 🎉 🎉 🎉')
  }

  console.log('********************************************************************************************************')
}

function macVuln1 () {
  const prefix = '  MacVuln1:'
  const port = 19421
  console.log(`${prefix} Looking for the Zoom process listening on port ${port}...`)

  let pid = getPidByPort(port)

  if (pid) {
    console.log(`${prefix} Zoom process found listening on PID: ${pid}`)
    console.log(`${prefix} Killing the Zoom process PID: ${pid}...`)
    killPid(pid)
    console.log(`${prefix} Zoom process PID: ${pid} killed.`)
  } else {
    console.log(`${prefix} Zoom process is not listening on port ${port}.`)
  }

  let fileName = `${process.env.HOME}/.zoomus`
  console.log(`${prefix} Removing the Zoom auto start process file: ${fileName}...`)
  deleteFile(fileName)
  console.log(`${prefix} Removed the Zoom auto start process file: ${fileName}.`)

  console.log(`${prefix} Adding a blank file for the Zoom auto start process: ${fileName}...`)
  touchFile(fileName)
  console.log(`${prefix} Blank file added for the Zoom auto start process: ${fileName}.`)
  console.log(`${prefix} Zoom Mac Vulnerability 1 is completed!`)
}

function getPidByPort (port) {
  let child = spawn('lsof', ['-n', `-i4TCP:${port}`])
  let raw = child.stdout.toString('utf8')
  if (raw) raw = raw.split('\n')
  if (raw) raw = raw[1]
  if (raw) raw = raw.split(' ')
  if (raw) raw = raw[1]

  return raw
}

function killPid (pid) {
  spawn('kill', ['-9', pid])
}

function deleteFile (file) {
  spawn('rm', ['-rf', file])
}

function touchFile (file) {
  spawn('touch', [file])
}

function title () {
  const output = `
  db    db d8b   db d88888D  .d88b.   .d88b.  .88b  d88. 
  88    88 888o  88 YP  d8' .8P  Y8. .8P  Y8. 88'YbdP\`88 
  88    88 88V8o 88    d8'  88    88 88    88 88  88  88 
  88    88 88 V8o88   d8'   88    88 88    88 88  88  88 
  88b  d88 88  V888  d8' db \`8b  d8' \`8b  d8' 88  88  88 
  ~Y8888P' VP   V8P d88888P  \`Y88P'   \`Y88P'  YP  YP  YP
  `
  return output
}

main()
