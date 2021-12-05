const { version } = require('../package.json')
const path = require('path')
const fs = require('fs')
fs.writeFileSync(path.resolve(__dirname,'../src/version.ts'),`export default '${version}'`)