export const c1 = `
type IToastOption = {
    duration?:number,//关闭时间
    type?:'success'|'warning'|'error'|'info',
    position?:'bottom'|'top'|'center',
    modal?:boolean,//是否模态
    icon?:string
}
interface FToast{
    show(title:string,opt:IToastOption|number),
    success(title:string,opt:IToastOption|number),
    error(title:string,opt:IToastOption|number),
    warning(title:string,opt:IToastOption|number),
    info(title:string,opt:IToastOption|number),
}
`