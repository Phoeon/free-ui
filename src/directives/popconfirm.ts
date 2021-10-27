import FPop from '../components/pop'
import { sumArray } from '../shared/utils'
import { xmatrix,ymatrix} from '../shared/popover'
export default {
    beforeMount(el:HTMLElement,binding:any){
        const {arg,value} = binding
        let lock = false
        el.addEventListener(arg,()=>{
            if(lock)return
            lock = true
            const {left,top,width,height} = el.getBoundingClientRect()
            const {title,position,theme,done,cancel} = value as {
                title:string,
                position?:string,
                theme?:'normal'|'reverse',
                done?:()=>void,
                cancel?:()=>void
            }
            const pos = position||"tc"
            const 
                x = sumArray(xmatrix[pos],[left,top,width,height]),
                y = sumArray(ymatrix[pos],[left,top,width,height]);
            const noop = ()=>void(0)
            FPop.showConfirm({title,x,y,theme,position:pos as 'tc'}).done(done||noop).cancel(cancel||noop);
            setTimeout(()=>{
                lock = false
            },300)
        })
    }
}