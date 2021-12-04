export type ICodePart = {
    template?:string,
    style?:string,
    script?:string
}
export const genCode = (part:ICodePart)=>{
    let code = ''
    if(part.template) code+=`<template>\n${part.template}\n</template>\n`
    if(part.style) code+=`<style lang="scss">\n${part.style}\n</style>\n`
    if(part.script) code+=`<script lang="ts" setup>\n${part.script}\n</script>`
    return code
}