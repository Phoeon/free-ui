export const c1=`
type IMsgType = 'success'|'error'|'warning'|'info'
type IMsgOption = {
    type?:IMsgType,
    position?:'top'|'bottom',
    icon?:string,
    iconColor?:string,
    autoClose?:boolean,
    clickClose?:boolean
}
interface IResult{
    click(fn),
    close(fn)
}
interface FMessage{
    show(msg:string,opt:IMsgOption):IResult
    success(msg:string,opt:IMsgOption):IResult
    error(msg:string,opt:IMsgOption):IResult
    warning(msg:string,opt:IMsgOption):IResult
    info(msg:string,opt:IMsgOption):IResult
}
`
export const c2 = `
FMessage.success("观自在菩萨，行深般若波罗蜜多时，照见")
.click(()=>{
    FToast.success("点击事件")
}).close(a=>{
    FToast.error("关闭事件")
})
`