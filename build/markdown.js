const { marked } = require('marked')
const { DemoCst } = require('./cst')
const fs = require('fs')
const path = require('path')
const genPageMeta = require('./gen-page-meta')

const importScript = (meta,module)=>{
    return meta.script.match(module)?'':`import { ${module} } from '@phoeon/free-ui'`
}
const buildScript = (meta)=>{
    const hasAnchors = meta.anchors&&meta.anchors.length>1
    const block = meta.script?importScript(meta,'FBlockquote'):''
    const anchor = meta.script&&hasAnchors?importScript(meta,'FAnchors'):''
    return `
    <script lang="ts" setup>
        import { genCode } from '@demo/shared/gen-code'
        import { ref as myRef } from 'vue'
        ${block}
        ${anchor}
        ${meta.script||''}
        const PageMeta = ${JSON.stringify(meta,null,4)}
        const canchor = myRef(PageMeta.anchor)
    </script>`
}
const buildStyle = (meta)=>{
    return meta.style?`
    <style lang="scss">
        ${meta.style}
    </style>
    `:''
}
const buildTemplate = (meta)=>{
    const hasAnchors = meta.anchors&&meta.anchors.length>1
    let template = ''
    meta.parts.forEach((part,i)=>{
        switch(part.type){
            case 'blockquote':
                template+=`<f-blockquote type="primary">${part.template}</f-blockquote>`
                break
            case 'code':
                template+=`
                    <ph-pretty id="nav_${i}" title="${part.title}" lang="${part.lang}">{{PageMeta.parts[${i}].code}}</ph-pretty>`
                break;
            case 'card':
                template+=`<demo-card id="nav_${i}" title="${part.title}">\n
                        ${part.template}
                        <template #code>
                            {{genCode(PageMeta.parts[${i}])}}
                        </template>
                    \n</demo-card>
                    `
                break;
            case 'h2':
                template+=`<h2 id="nav_${i}" class="www-title">${part.title}</h2>`
                break
            case 'empty':
                template+= part.template
                break
        }
    })
    // buildanchors
    if(hasAnchors){
        template = `<div class="www-doc">
            <div class="www-doc-left">${template}</div>
            <div class="www-doc-right" sm-visible="false">
            <f-anchors class="www-anchors" v-model="canchor" :dataSource="PageMeta.anchors"></f-anchors>
            </div>
        </div>`
    }
    // root
    if(meta.root) template = `<div class="www-container">\n${template}\n</div>`
    return `<template>${template}</template>`
}

const getRawVue =  (fpath)=>{
    const 
        meta = genPageMeta(fpath),
        template = buildTemplate(meta),
        script = buildScript(meta),
        style = buildStyle(meta),
        vueTpl = template+"\n"+script+"\n"+style;
    // console.log(vueTpl)
    return vueTpl
}
module.exports = getRawVue