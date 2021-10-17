interface Binding{
    [k:string]: any
}
const cla = 'ph-height-anim'
export default {
	beforeMount(el:HTMLElement,binding:Binding):void{
		el.addEventListener("transitionend",binding.dir.transitionend)
	},
	mounted(el:HTMLElement,binding:Binding):void{
		if(!binding.value)el.style.cssText="height:0px;display:none"
	},
	beforeUnmount(el:HTMLElement,binding:Binding):void{
		el.removeEventListener("transitionend",binding.dir.transitionend)
	},
	beforeUpdate(el:HTMLElement,binding:Binding):void{
		if(binding.value===binding.oldValue)return
		binding.dir.task(el,binding)
	},
	task(el:HTMLElement,binding:Binding):void{
		const animCn = cla
		if(binding.value){
			el.style.height="0px"
			el.classList.add(animCn)
			el.style.display = ""
			binding.dir.animate(el,el.scrollHeight+"px")
		}else{
			el.style.height = el.scrollHeight+"px"
			el.classList.add(animCn)
			binding.dir.animate(el,"0px")
		}
	},
	transitionend(e:Event):void{
        const target = e.target as HTMLElement
		const animCn = cla
		if(target.style.height==="0px"){
			target.style.display="none"
			target.classList.remove(animCn)
		}else{
			target.classList.remove(animCn)
			target.style.height=""
		}
	},
	animate(el:HTMLElement,h:string):void{
		setTimeout(()=>{
			el.style.height = h
		})
	}
}