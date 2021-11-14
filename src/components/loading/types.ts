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