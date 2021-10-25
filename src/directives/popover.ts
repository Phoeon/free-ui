import FPop from '../components/pop'
import { sumArray } from '../shared/utils'
import { xmatrix,ymatrix} from '../shared/popover'
export default {
    beforeMount(el:HTMLElement,binding:any){
        const {value} = binding
        let lock = false
        let close:()=>void
        el.addEventListener("mouseenter",()=>{
            console.log(Math.random(),binding)
            if(lock)return
            lock = true
            const {left,top,width,height} = el.getBoundingClientRect()
            const {title,content,position} = value as {
                title:string,
                content:string,
                position?:string,
            }
            const pos = position||"tc"
            const 
                x = sumArray(xmatrix[pos],[left,top,width,height]),
                y = sumArray(ymatrix[pos],[left,top,width,height]);
            close = FPop.show({title,content,x,y,position:pos as 'tc'})
            setTimeout(()=>{
                lock = false
            },300)
        })
        el.addEventListener("mouseleave",()=>{
            close?.()
        })
    }
}