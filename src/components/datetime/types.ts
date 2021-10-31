export type IDtType = 'datetime'|'date'|'month'|'year'|'time'
export type IDtOption = {
    value?:string|Array<string|undefined>,
    min?:string,
    max?:string,
    type?:IDtType,
    clear?:boolean,
    format?:string,
    now?:boolean,
    rect:{x:number,y:number,height:number,width:number}
}
export type IDateObject = {
    yyyy:number,
    MM:number,
    dd:number,
    hh:number,
    mm:number,
    ss:number,
}
export type IGridItem = {
    text:string|number,
    disabled?:boolean,
    active?:boolean,
    cn?:string,
    meta?:any
}