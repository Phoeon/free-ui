export const c1=`
type INotifyType = 'success'|'error'|'warning'|'info'
type INotifyPosition = 'right-top'|'right-bottom'|'left-top'|'left-bottom'
type IPhNotifyOpt={
    icon?:string,//自定义icon
    group?:string,//分组id
    groupDesc?:string,//分组描述
    type?:INotifyType,
    title?:string,//通知标题
    showClose?:boolean,//显示关闭按钮
    autoClose?:boolean,//自动关闭,默认false，true:10s后关闭
    clickClose?:boolean,//点击通知后自动关闭
    confirm?:{doneText?:string,cancelText?:string}//若是提供该属性表面是个确认交互通知
}


interface FNotification {
    success(content:string,opt:IPhNotifyOpt)
    error(content:string  ,opt:IPhNotifyOpt)
    warning(content:string,opt:IPhNotifyOpt)
    info(content:string,   opt:IPhNotifyOpt)
    notify(content:string, opt:IPhNotifyOpt)
}
FNotification
.notify("一系列的信息描述。。。",{title:"通知信息标题"}:IPhNotifyOpt)
//通知被点击事件
.click((data)=>{
    console.log(data)
})
//关闭事件
.close((data)=>{
    console.log(data)
})
//确认交互事件
.confirm((data)=>{
    console.log(data)
})`
