import PhGesture,{ GestureType } from 'ph-gesture'
export const swipe = {
    beforeMount(el:HTMLElement,binding:any){
        new PhGesture(el,GestureType.swipe,binding.value)
    }
}
export const swipeup = {
    beforeMount(el:HTMLElement,binding:any){
        new PhGesture(el,GestureType.swipeup,binding.value)
    }
}
export const swipedown = {
    beforeMount(el:HTMLElement,binding:any){
        new PhGesture(el,GestureType.swipedown,binding.value)
    }
}
export const swipeleft = {
    beforeMount(el:HTMLElement,binding:any){
        new PhGesture(el,GestureType.swipeleft,binding.value)
    }
}
export const swiperight = {
    beforeMount(el:HTMLElement,binding:any){
        new PhGesture(el,GestureType.swiperight,binding.value)
    }
}
export const tap = {
    beforeMount(el:HTMLElement,binding:any){
        new PhGesture(el,GestureType.tap,binding.value,{stop:true})
    }
}
export const longtap = {
    beforeMount(el:HTMLElement,binding:any){
        new PhGesture(el,GestureType.longtap,binding.value)
    }
}
