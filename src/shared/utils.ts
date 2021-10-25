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