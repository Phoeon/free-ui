export type IActionOption = {
    text:string,
    value:string|number,
    icon?:string,
    iconType?:string,
    disabled?:boolean,
    type?:string//"primary"|"success"|"danger"|"warning"
}