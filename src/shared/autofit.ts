import { isMobile } from './utils'
export default ({dw,dwfs}:{dw:number,dwfs:number})=>{
	let phx = 15,phr = 0.5,php = "pc";
	const doc = 
		document.documentElement;
	const flag = isMobile()
	if(flag){
		if(doc.clientWidth<=768){
			const ratio = Math.max(doc.clientWidth/dw,0.875)
			phx = ratio*dwfs //375下默认 字体大小 会四舍五入
			phr = Math.max(ratio/2,0.5)
		}else{
			phx = window.devicePixelRatio*dwfs
		}
		php = "mb"
	}
	doc.style.setProperty("--phx",Math.round(phx)+"px")
	doc.style.setProperty("--phr",phr+"px")
	doc.setAttribute("f-pf",php)
}