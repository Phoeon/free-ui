const { marked } = require('marked')
const path = require("path")
const fs = require("fs")
const { RoutesCst } = require("./cst")

const genPageMeta = (fpath)=>{
    const 
        raw = fs.readFileSync(fpath).toString(),
        sections = marked.lexer(raw);
    const meta = {
        parts:[]
    }
    let part = {}
    for(let i=0;i<sections.length;i++){
        const section = sections[i]
        if(section.type==="heading"&&section.depth===1){
            const [title,icon] = section.text.split(" ")
            meta.title = title
            meta.icon = icon
        }
        if(section.type==="blockquote"){
            meta.parts.push({
                template:section.text,
                type:'blockquote',
                nowrap:true
            })
        }
        if(section.type==="heading"&&section.depth===2){
            meta.parts.push({
                title:section.text,
                template:section.text,
                type:'h2',
                nowrap:true,
                id:"nav_"+meta.parts.length
            })
        }
        if(section.type==="heading"&&section.depth===3){
            part = {
                title:section.text,
                nowrap:false,
                type:"card",
                id:"nav_"+meta.parts.length
            }
            meta.parts.push(part)
        }
        if(section.type==="code"&&section.lang.startsWith('html')){
            const [a,nowrap,root] = section.lang.split(" ")
            if(nowrap==="nowrap"){
                part = {
                    nowrap:true,
                    type:"empty"
                }
                meta.parts.push(part)
            }
            meta.root = meta.root||root==="root"
            part.template = section.text
        }
        if(section.type==="code"&&section.lang==="js")
            part.script = section.text
        if(section.type==="code"&&section.lang==="css")
            part.style = section.text
        if(section.type==="code"&&section.lang.startsWith("typescript")){
            const [lang,show,title] = section.lang.split(" ")
            meta.script = section.text
            if(show==="show")
            meta.parts.push({
                title,
                type:"code",
                lang,
                code:section.text,
                id:"nav_"+meta.parts.length
            })
        }
        if(section.type==="code"&&section.lang==="scss")
            meta.style = section.text
        
    }
    // fs.writeFileSync(__dirname+"/meta.ts",JSON.stringify(meta,null,4))
    meta.anchors = meta.parts.filter(part=>part.title).map(part=>{
        return {
            text:part.title,
            value:part.id
        }
    })
    meta.anchor = meta.anchors[0]?.value
    return meta
}
// getRouteMeta(path.resolve(__dirname,'../demos/pages/cmp/button/index.md'))
module.exports = genPageMeta