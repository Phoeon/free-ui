import { App } from 'vue' 
export const Reg={
    email:/^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-z]{2,}$/,
    url:/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/,
    mobile:/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,
    chinese:/^[\u0391-\uFFE5]+$/
}
export function isEmpty(v:unknown){
    return v===undefined||v===""||v===null||(v instanceof Array&&v.join("")==="")
}
export function isMobile(){
    return ("ontouchstart" in window)
}
export const sumArray = (m1:Array<number>,m2:Array<number>)=>{
    let sum = 0
    m1.forEach((n,i)=>{
        sum+= (n*m2[i])
    })
    return sum
}
export const rand = ()=>(Math.random()+"").replace(".","");

export const getAnimation = (position:string)=>{
    if(position.startsWith("t"))return 'ph-scaledown'
    if(position.startsWith("b"))return 'ph-scaleup'
    if(position.startsWith("l"))return 'ph-scaleright'
    if(position.startsWith("r"))return 'ph-scaleleft'
}
export const unmount = (app:App<Element>)=>{
    setTimeout(()=>{
        app.unmount()
    },400)
}
export const between = (now:number,from:number,to:number)=>{
	const min = Math.min(from,to)
	const max = Math.max(from,to)
	return now>=min&&now<=max
}
