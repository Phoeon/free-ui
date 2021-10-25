export type IMsgType = 'success'|'error'|'warning'|'info'|'default'
export type IMsgOption = {
    type?:IMsgType,
    position?:'top'|'bottom',
    icon?:string,
    iconColor?:string,
    // showClose?:boolean,
    autoClose?:boolean,
    clickClose?:boolean
}