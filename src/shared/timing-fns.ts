/*
//时间算法根据物理公式速度时间位移
t:当前时间
d:总时间
b:起始位移
c:相对起始位移的偏移量
@return t时刻的位移
*/

//匀加速 : s = v0*t+a*t*t/2
export const easeIn = (t:number, b:number, c:number, d:number)=>{
	if(b==c)return b
    return b+c*Math.pow(t/d,2)
}
//匀速
export const linear = (t:number, b:number, c:number, d:number)=>{
	return t*c/d+b
}