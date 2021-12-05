export default {
    mounted(el:HTMLElement,binding:any){
        if(binding.value){
            binding.dir.scrollToView(el)
        }
    },
    updated(el:Element,binding:any){
        const {value,oldValue} = binding
        if(value===true&&value!==oldValue){
            binding.dir.scrollToView(el)
        }
    },
    scrollToView(el:any){
        window.setTimeout(()=>el.scrollIntoViewIfNeeded())
    }
}