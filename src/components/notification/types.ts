
export type INotifyType = 'success'|'error'|'warning'|'info'|'default'
export type INotifyPosition = 'right-top'|'right-bottom'|'left-top'|'left-bottom'
export type IPhNotifyOpt={
    nid?:string,
    icon?:string,
    group?:string,
    groupDesc?:string,
    type?:INotifyType,
    title?:string,
    showClose?:boolean,
    autoClose?:boolean,
    clickClose?:boolean,
    confirm?:{doneText?:string,cancelText?:string}
}
export type Igroup = {
    k:string,
    v?:string
}
export const CloseStatus = {
    close:0,
    confirm:1,
    click:2
}