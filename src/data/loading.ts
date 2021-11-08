export const c1=`
interface ILoadingOpt{
    title:{type:String,default:"加载中"},
    showBox:{type:String as PropType<"fit"|"always"|"none">,default:"none"},
    fill:String,//遮罩背景色
    icon:String,
    countdown:{type:Number,default:-1},//倒计时
}
`
export const c2 = `<f-loading v-model="state.loading" @click="state.loading = false"/>`
export const c3 = `
interface FGLoading {
    show(opt:ILoadingOpt):()=>void //返回关闭函数
}
` 