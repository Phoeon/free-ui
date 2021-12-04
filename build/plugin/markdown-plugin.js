const fileRegex = /\.(md)$/
const getRawVue = require('../markdown')
module.exports = function MarkdownPlugin(){
    return {
        name: 'MarkdownPlugin',
        transform(src, id) {
            if (fileRegex.test(id)) {
                const code = getRawVue(id)
                return {
                    code,
                    map:null
                }
            }
        }
    }
}
