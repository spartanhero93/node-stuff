const os = require('os')
const fs = require('fs')
const log = require('./logger')
const EventEmitter = require('events')

function checkMemory () {
  const [totalMemory, freeMemory] = [
    os.totalmem() / 1000000,
    os.freemem() / 1000000
  ]
  log(`Total memory is ${totalMemory}MB and free memory is ${freeMemory}MB`)
}

function readFilesNames () {
  const [files, folders] = [fs.readdirSync('./'), fs.readdir]
  log(files)
}

checkMemory()
readFilesNames()
