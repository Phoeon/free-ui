export type PhNotifyType = 'success'|'error'|'warning'|'info'|'default'
export type NotifyPosition = 'right-top'|'right-bottom'|'left-top'|'left-bottom'
export type PhNotifyOpt={
    type?:PhNotifyType,
    title?:string,
    showClose?:boolean,
    position?:NotifyPosition,
    autoClose?:boolean,
    clickClose?:boolean,
    mini?:boolean,
    confirm?:{doneText?:string,cancelText?:string}
}
export const CloseStatus = {
    close:0,
    confirm:1,
    click:2
}