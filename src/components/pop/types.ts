export type IPopPosition = 'tl'|'tc'|'tr'|'bl'|'bc'|'br'|'lt'|'lc'|'lr'|'rt'|'rc'|'rb'
export type IToolPosition = 't'|'b'|'l'|'r'
export type IDropdownPosition = 'tl'|'tc'|'tr'|'bl'|'bc'|'br'
export type ISelectPosition = 't'|'b'
type IPop = {
    x:number,
    y:number,
    height?:number,
    theme?:'normal'|'reverse'
}
export type IPopConfirm = IPop & {
    title:string,
    position?:IPopPosition
}

export type IPopover = IPop & {
    title:string,
    content:string,
    position?:IPopPosition,
}
export type ITooltip = IPop & {
    content:string,
    position?:IToolPosition,
}

export type IDropdownItem = {
    value:string|number,
    text:string,
    icon:string,
    disabled?:boolean
}
export type IDropdown = IPop & {
    dataSource:Array<IDropdownItem>,
    position?:IDropdownPosition
}
export type ISelect = IPop & {
    dataSource:Array<IDropdownItem>,
    position?:ISelectPosition,
    width?:Number,
    multi?:Boolean,
    title?:String,
    value:Array<string|number>
}