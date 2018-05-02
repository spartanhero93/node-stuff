const os = require('os')
const fs = require('fs')
const log = require('./logger')
const http = require('http')

function checkMemory () {
  const [totalMemory, freeMemory] = [
    os.totalmem() / 1000000,
    os.freemem() / 1000000
  ]
  log(`Total memory is ${totalMemory}MB and free memory is ${freeMemory}MB`)
}

function readFilesNames () {
  const files = fs.readdirSync('./')
  log(files)
}

function createServer () {
  const server = http.createServer((req, res) => {
    switch (req.url) {
      case '/':
        res.write('Hello Best Waifus')
        res.end()
        break
      case '/waifus':
        res.write(JSON.stringify(['Isla', 'Taiga', 'Yuno']))
        res.end()
      default:
        break
    }
  })

  server.listen(9000)

  console.log('listening on port 9000')
}

checkMemory()
readFilesNames()
createServer()
