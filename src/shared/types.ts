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