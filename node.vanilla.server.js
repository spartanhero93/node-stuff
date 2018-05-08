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
        break
      default:
        break
    }
  })

  server.listen(9000, console.log('listening on port 9000'))
}

checkMemory()
readFilesNames()
createServer()

/*
npm list
 * this list all dependencies

npm list --depth=0
 * only see the dependencies of the application

npm view node-fetch dependencies
* see the dependencies for that package

npm view node-fetch versions
* see all the previous versions of that package

npm outdated
* check the current versions, latest, wanted versions, and thier locations

npm update
* it will only update minor and patch updates

npm version [major, minor, patch]
*This is used to update your current published npm package
*/

// <=== npm-check-updates ===>//
/*
ncu -u
* this will update the current package.json to latest updates including major

**** Dont forget to npm install to install the updates! ****
*/
