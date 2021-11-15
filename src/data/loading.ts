export const c1=`<f-loading-spin v-model="state.ld1" @click="state.ld1 = false"/>
<f-loading-spin v-model="state.ld2" @click="state.ld2 = false" showBox="always" />
<f-loading-spin v-model="state.ld3" @click="state.ld3 = false" :alpha="true" />
<f-loading-spin v-model="state.ld4" @click="state.ld4 = false" bg="#ff000033" />
<f-loading-spin v-model="state.ld5" @click="state.ld5 = false" :countdown="5" title="倒计时：{#}s"/>`
export const c2 = 
`type IFLoadingSpinOption = {
    title?:string,
    alpha?:boolean, //遮罩是否透明，等价于 fill:transparent
    fill?:string, //遮罩背景色
    icon?:string,
    showBox?:"always"|"fit"|"none",
    countdown?:number ////倒计时
}
interface FLoadingSpin {
    start(opt:IFLoadingSpinOption):void
    end():void
}` 
export const c3 = 
`type IFLoadingBarOption = {
    size?:number,//{type:Number,default:3},
    auto?:boolean,//{type:Boolean,default:true},
    shine?:boolean,//{type:Boolean,default:true},
    step?:number,//{type:Number,default:0.02},
    min?:number,//{type:Number,default:0.02},
    max?:number,//{type:Number,default:0.99},
    value?:number,//{type:Number,default:0.02},
    stepDuration?:number,//{type:Number,default:300},
    fill?:String,
}
interface FGLoadingBar{
    start(opt?:IFLoadingBarOption):void,
    end():void,
    update(v:number):void
}`
export const c4 = 
`interface FGLoading{
    showSpin(opt?:IFLoadingSpinOption):void,
    showBar(opt?:IFLoadingBarOption):void,
    endSpin():void,
    endBar():void,
    //同FGLoadingBar.update
    update(v:number):void
}`