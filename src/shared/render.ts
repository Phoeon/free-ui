import { h, render, Component, DefineComponent } from 'vue'
import Evt from 'ph-evt'
export default function renderInstance(CmpClass:Component,props:Record<string,any>,children?:any[]){
    const 
        dom = document.createElement("div") as HTMLElement,
        evt = new Evt(),
        destroy = ()=>render(null,dom),
        _props = {
            ...(props||{}),
            evt
        }
    
    const 
        vdom = h(CmpClass as DefineComponent,_props,children);
    render(vdom,dom);
    evt.on("destroy",()=>{
        window.setTimeout(()=>destroy(),300)
    })
    if(dom.firstElementChild)
    document.body.appendChild(dom.firstElementChild as HTMLElement)
    return evt
}