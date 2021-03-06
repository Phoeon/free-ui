export const c1=`
<f-actionsheet 
    v-model="state.value" 
    v-model:visible="state.visible" 
    :title="state.title" 
    :desc="state.desc" 
    :options="state.options" 
    @action="onAction"></f-actionsheet>
<f-actionsheet 
    type="grid" 
    v-model="state1.value" 
    v-model:visible="state1.visible" 
    :title="state1.title" 
    :desc="state1.desc" 
    :options="state1.options" 
    @action="onAction"></f-actionsheet>
<f-actionsheet 
    :autoClose="false" 
    type="grid" 
    v-model="state1.value" 
    v-model:visible="state1.visible1" 
    :title="state1.title" 
    :desc="state1.desc" 
    :options="state1.options" 
    @action="onAction1"></f-actionsheet>`

export const c2 = `
const state  = reactive({
    visible:false,
    title:"支付方式",
    desc:"请选择您的支付方式",
    value:1,
    options:[{
        text:"支付宝",
        value:0,
        type:"primary"
    },{
        text:"微信",
        value:1,
        // type:"primary"
    },{
        text:"信用卡",
        value:2,
        // disabled:true,
        // type:"primary"
    }]
})
const state1  = reactive({
    visible:false,
    visible1:false,
    value:1,
    options:[{
        text:"发送好友",
        value:0,
        icon:"chrome",
        iconColor:"#f00"
    },{
        text:"新浪微博",
        value:1,
        icon:"firefox"
    },{
        text:"微信好友",
        value:2,
        icon:"safari"
    },{
        text:"微信好友",
        value:3,
        icon:"internet-explorer"
    },{
        text:"QQ好友",
        value:4,
        icon:"opera",
        iconColor:"#00f"
    },{
        text:"朋友圈",
        value:5,
        icon:"wechat",
        disabled:true
    },{
        text:"telegram",
        value:5,
        icon:"telegram",
        iconColor:"#00f"
    },{
        text:"小红书",
        value:6,
        icon:"reddit",
        iconColor:"#ff0"
    },{
        text:"twitter",
        value:6,
        icon:"twitter"
    }]
})
const onAction = (b:Record<string,any>,c:()=>void)=>{
    if(b){
        FToast.success(b.text)
    }else 
        FToast.error("取消事件")
}
`