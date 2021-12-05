import Evt from 'ph-evt'
const evt = new Evt()
const MediaBreak = {
    xs:480,
    sm:768,
    md:992,
    lg:1200,
    xl:1920,
    xxl:-1,
    all:-2
}
const mediaBreakNames = {
    xs:"xs:",
    sm:"sm",
    md:"md",
    lg:"lg",
    xl:"xl",
    xxl:"xxl",
    all:"all"
}
let timer = -1
const mediaQuery = ()=>{
    const dw = document.documentElement.clientWidth
    let mb:string ;
    if(dw<=MediaBreak.xs)
        mb = mediaBreakNames.xs
    else if(dw<=MediaBreak.sm)
        mb = mediaBreakNames.sm
    else if(dw<=MediaBreak.md)
        mb = mediaBreakNames.md
    else if(dw<=MediaBreak.lg)
        mb = mediaBreakNames.lg
    else if(dw<=MediaBreak.xl)
        mb = mediaBreakNames.xl
    else mb = mediaBreakNames.xxl
    Object.keys(mediaBreakNames).forEach(k=>{
        const matches = k===mediaBreakNames.all||k===mb
        evt.emit(k,matches,dw)
    })
}
window.addEventListener("resize",()=>{
    clearTimeout(timer)
    timer = window.setTimeout(()=>{
        mediaQuery()
    },300)
})

export default {
    xs(fn:(matches:boolean,dw:number)=>void){
        evt.on("xs",fn)
    },
    sm(fn:(matches:boolean,dw:number)=>void){
        evt.on("sm",fn)
    },
    md(fn:(matches:boolean,dw:number)=>void){
        evt.on("md",fn)
    },
    lg(fn:(matches:boolean,dw:number)=>void){
        evt.on("lg",fn)
    },
    xl(fn:(matches:boolean,dw:number)=>void){
        evt.on("xl",fn)
    },
    xxl(fn:(matches:boolean,dw:number)=>void){
        evt.on("xxl",fn)
    },
    all(fn:(matches:boolean,dw:number)=>void){
        evt.on("all",fn)
    },
    off(type:string,fn:()=>void){
        evt.off(type as string,fn)
    }
}
export { MediaBreak }