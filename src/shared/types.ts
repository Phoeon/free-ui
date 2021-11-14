export type IThemeType = 'primary'|'info'|'success'|'danger'|'warning'|'noble'|'normal'
export type IRect = {
    left:number,
    top:number,
    width:number,
    height:number
}

export interface INavNode {
    id:string,
    name:string,
    icon?:string,
    action?:string
}

export type IFreeuiConfigOption = {
    icon?:{
        cname:string,//"fa",
        prefix:string//"fa-"
    },
    notify?:{
        position:string//"right-top"
    },
    datetime?:{
        lang:string//'cn',
        importants:Array<{text:string,desc?:string,md:string}>
    },
    colorpicker?:{
        colors?:Array<string>//['#00ff00']
    },
    [k:string]:any
}
export type IKey = string|number
export type IValue = IKey|Array<IKey>
export type ITreeNode = {
    id:string|number,
    text:string,
    children?:Array<ITreeNode>
}
export type ITree = Array<ITreeNode>