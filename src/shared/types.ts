export type IThemeType = 'primary'|'info'|'success'|'danger'|'warning'|'noble'|'normal'
export type IRect = {
    left:number,
    top:number,
    width:number,
    height:number
}
export type IKey = string|number
export type IValue = IKey|Array<IKey>
export type IRecord = {
    id:IKey,
    text:string
}
export type INavNode = IRecord & {
    icon?:string,
    action?:string,
    children?:Array<TreeNode>
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

export type ITreeNode = IRecord & {
    children?:Array<ITreeNode>
}
export type ITree = Array<ITreeNode>

export type IActionSheetOption = {
    text:string,
    value:string|number,
    icon?:string,
    iconType?:string,
    disabled?:boolean,
    type?:IThemeType
}

export type IAlertType = 'success'|'error'|'warning'|'info'|'default'
export type IAlertOption = {
    type?:IAlertType,
    position?:'top'|'bottom',
    title?:string,
    link?:string,
    action?:boolean,
    icon?:string,
    iconColor?:string,
    autoClose?:boolean
}

export type IAnchor = {
    text:string,
    value:string
}

export type IColorType = 'hex'|'rgb'|'hsb'
export type IColorOption = {
    value?:string,
    type?:IColorType,
    title?:string,
    showPredef?:boolean,
    colors?:Array<string>,
    rect:IRect
}

export type IDtType = 'datetime'|'date'|'month'|'year'|'time'
export type IDtImportant = {
    text:string,
    desc?:string,
    md:string
}
export type IDtOption = {
    value?:string|Array<string|undefined>,
    min?:string,
    max?:string,
    type?:IDtType,
    clear?:boolean,
    format?:string,
    now?:boolean,
    importants?:Array<IDtImportant>,
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
    title?:string,
    disabled?:boolean,
    active?:boolean,
    cn?:string,
    meta?:any
}
export type IScrollItem = {
    value:number,
    text:string|number,
    disabled?:boolean
}

export type IPopPosition = 'tl'|'tc'|'tr'|'bl'|'bc'|'br'|'lt'|'lc'|'lr'|'rt'|'rc'|'rb'
export type IToolPosition = 'tl'|'tc'|'tr'|'bl'|'bc'|'br'|'l'|'r'
export type IDropdownPosition = 'tl'|'tc'|'tr'|'bl'|'bc'|'br'
export type ISelectPosition = 't'|'b'
export type IPop = {
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
export type IPopTreeSelect = {
    dataSource:ITree,
    position?:ISelectPosition,
    rect?:{left:number,right:number,top:number,bottom:number},
    width?:Number,
    multi?:Boolean,
    title?:String,
    value:ITreeValue
}

export type IOption = {
    value:string|number,
    text:string,
    disabled:boolean
}

export type IValidResult = {
    valid:boolean,
    tip?:string
}
export type IValidOption = string|{name:string,args:Array<unknown>}
export type IFieldValidFn = ()=>Promise<unknown>
export interface IValidator {
    validField:(value:unknown,validMeta:Array<IValidOption>)=>Promise<unknown>
    validForm:()=>Promise<unknown>,
    registerField:(id:string,field:IFieldValidFn)=>void,
    ungisterField:(id:string)=>void
}
export type IValidatorTask = (v:unknown,args?:Array<unknown>,next:()=>void,reject:(d?:any)=>void)=>void

export interface IValidationQueue{
    use(task:IValidatorTask,args?:Array<unknown>):void
    run(ctx:unknown):Promise<unknown>
}

export type IFLoadingSpinOption = {
    title?:string,
    alpha?:boolean,
    bg?:string,
    icon?:string,
    showBox?:"always"|"fit"|"none",
    countdown?:number
}
export type IFLoadingBarOption = {
    size?:number,//{type:Number,default:3},
    auto?:boolean,//{type:Boolean,default:true},
    shine?:boolean,//{type:Boolean,default:true},
    step?:number,//{type:Number,default:0.02},
    min?:number,//{type:Number,default:0.02},
    max?:number,//{type:Number,default:0.99},
    value?:number,//{type:Number,default:0.02},
    stepDuration?:number,//{type:Number,default:300},
    bg?:string,
}

export type IMsgType = 'success'|'error'|'warning'|'info'|'default'
export type IMsgOption = {
    type?:IMsgType,
    position?:'top'|'bottom',
    icon?:string,
    iconColor?:string,
    autoClose?:boolean,
    clickClose?:boolean
}

export type IModalOption = {
    text:string,
    value:string|number,
    type?:string//"primary"|"success"|"danger"|"warning"
}


export type INotifyType = 'success'|'error'|'warning'|'info'|'default'
export type INotifyPosition = 'right-top'|'right-bottom'|'left-top'|'left-bottom'
export type INotifyOption={
    nid?:string,
    icon?:string,
    group?:string,
    groupDesc?:string,
    type?:INotifyType,
    title?:string,
    showClose?:boolean,
    autoClose?:boolean,
    clickClose?:boolean,
    confirm?:{doneText?:string,cancelText?:string}
}
export type INotifyGroup = {
    k:string,
    v?:string
}

export type IStep = {
    status:number, //-1 not done 0 ing 1 done,
    value:number, // 当前的步值，如果没有，默认按照步骤顺序从1开始
    title:string,
    desc?:string,
    icon?:string
}

export type ITab = {
    title:string,
    icon?:string,
    disabled?:boolean,
    index:number
}