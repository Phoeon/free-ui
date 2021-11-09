import Gesture,{GestureType} from 'ph-gesture'
export default{
    beforeMount(el:HTMLElement,binding:any){
        const {value} = binding
        new Gesture(el,GestureType.touchmove,(e:Event,meta:{tx:number,ty:number})=>{
            const {offsetWidth,offsetHeight} = (el.parentElement as HTMLElement)
            const x = meta.tx,y=meta.ty;
            const vx = Math.max(0,Math.min(x,offsetWidth))
            const vy = Math.max(0,Math.min(y,offsetHeight))
            const 
                xratio = vx/(offsetWidth - el.offsetWidth),
                yratio = vy/(offsetHeight - el.offsetHeight);
            if(typeof value === "function")value(xratio,yratio)
        })
    },
}