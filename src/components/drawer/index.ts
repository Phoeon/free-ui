// import { h, ref, render, Component, DefineComponent } from 'vue'
// import Evt from 'ph-evt'
import FDrawer from './main.vue'

// const show = (cmp:Component,componentOptions:Record<string,any>={},drawerOptions:Record<string,any>={})=>{
//     const 
//         evt = new Evt(),
//         dom = document.createElement("div") as HTMLElement,
//         destroy = ()=>render(null,dom),
//         onDrawerClose = (...b:any[])=>{
//             evt.emit("close",...b)
//         },
//         onDrawerDone = (action:string,...b:any[])=>{
//             evt.emit("done",action,...b)
//         },
//         modelValue=ref(true),
//         _drawerOptions = {
//             ...(drawerOptions||{}),
//             modelValue,
//             onClick:(event:Event)=>{
//                 if (event.target !== event.currentTarget) return
//                 modelValue.value = false
//                 evt.emit("close")
//             },
//             evt
//         },
//         _componentOptions = {
//             onDrawerClose,
//             onDrawerDone,
//         ...(componentOptions||{})
//         }
//         ;
//     evt.on("close",()=>{
//         setTimeout(()=>destroy(),300)
//     })
//     const 
//         vdom = h(FDrawer as DefineComponent,_drawerOptions,()=>[h(cmp as DefineComponent,_componentOptions)]);
//     render(vdom,dom);
//     if(dom.firstElementChild)
//     document.body.appendChild(dom.firstElementChild as HTMLElement)
//     return {
//         done(fn:(...a:any[])=>void){
//             evt.on("done",fn)
//             return this
//         },
//         close(fn:(...a:any[])=>void){
//             evt.on("close",fn)
//             return this
//         }
//     }
// }
// export default {
//     show
// }
export {
    FDrawer
}