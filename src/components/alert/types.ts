export type IAlertType = 'success'|'error'|'warning'|'info'|'default'
export type IAlertOption = {
    type?:IAlertType,
    position?:'top'|'bottom',
    title?:string,
    link?:string,
    action?:boolean,
    icon?:string,
    iconColor?:string,
    // showClose?:boolean,
    // clickClose?:boolean,
    autoClose?:boolean
}