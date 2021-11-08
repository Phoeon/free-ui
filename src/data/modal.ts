export const c1=`FModal.alert({
    title:"欢迎！",
    content:"北京欢迎您！"
})
`
export const c2=`FModal.confirm({
    title:"操作失败",
    content:"账号密码不一致，是否重试？",
    cancelText:"关闭",
    doneText:"重试"
}).done((status:number)=>{
    if(status)
    FToast.success("确认事件")
    else FToast.error("取消事件")
})`

export const c3=`const options = [{
    text:"选项一",
    value:0,
    type:"success"
},{
    text:"选项二",
    value:1,
    type:"danger"
},{
    text:"选项三",
    value:2,
    type:"warning"
}]
FModal.option({
    title:"欢迎！",
    content:"北京欢迎您！",
    options
}).done((a?:unknown)=>{
    if(a===undefined)FToast.error("取消事件")
    else 
        FToast.success(options[a as number].text)
})`