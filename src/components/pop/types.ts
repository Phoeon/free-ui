export type IPopPosition = 'tl'|'tc'|'tr'|'bl'|'bc'|'br'|'lt'|'lc'|'lr'|'rt'|'rc'|'rb'
export type IToolPosition = 't'|'b'|'l'|'r'
export type IPopConfirm = {
    title:string,
    position?:IPopPosition,
    x:number,y:number
}
export type IPopover = {
    title:string,
    content:string,
    position?:IPopPosition,
    x:number,y:number
}
export type ITooltip = {
    content:string,
    position?:IToolPosition,
    x:number,y:number
}