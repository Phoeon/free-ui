export type ColorType = 'hex'|'rgb'|'hsb'
export type IColorOption = {
    value?:string,
    type?:ColorType,
    title?:string,
    showPredef?:boolean,
    colors?:Array<string>,
    rect:{x:number,y:number,height:number,width:number}
}