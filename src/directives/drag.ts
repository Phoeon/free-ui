import Drag from 'ph-drag'
export default{
    beforeMount(el:HTMLElement,binding:any){
        const {value} = binding
        new Drag(el,(e:Event,{x,y}:{x:number,y:number})=>{
            const {offsetWidth,offsetHeight} = (el.parentElement as HTMLElement)
            const vx = Math.max(0,Math.min(x,offsetWidth))
            const vy = Math.max(0,Math.min(y,offsetHeight))
            const 
                xratio = vx/(offsetWidth - el.offsetWidth),
                yratio = vy/(offsetHeight - el.offsetHeight);
            if(typeof value === "function")value(xratio,yratio)
        })
    },
}