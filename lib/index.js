
const spawn = require('child_process').spawnSync

async function main () {
  console.log('***********************************************************************')
  console.log('Looking for the Zoom process listening on port 19421...')

  let pid = getPid()

  if (pid) {
    console.log(`Zoom process found listening on PID: ${pid}`)
    console.log(`Killing the Zoom process PID: ${pid}...`)
    killPid(pid)
    console.log(`Zoom process PID: ${pid} killed.`)
  } else {
    console.log(`Zoom process is not listening on port 19421.`)
  }

  let fileName = `${process.env.HOME}/.zoomus`
  console.log(`Removing the Zoom auto start process file: ${fileName}...`)
  deleteFile(fileName)
  console.log(`Removed the Zoom auto start process file: ${fileName}.`)

  console.log(`Adding a blank file for the Zoom auto start process: ${fileName}...`)
  touchFile(fileName)
  console.log(`Blank file added for the Zoom auto start process: ${fileName}.`)
  console.log('***********************************************************************')
}

function getPid () {
  let child = spawn('lsof', ['-n', '-i4TCP:19421'])
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

main()
