export const c1 = `<f-anchors 
    v-model="state.value" 
    :dataSource="state.anchors" 
    @navigate="onNavigate"></f-anchors>
    
<script setup>
const state = reactive({
    value:"nav2",
    timer:-1,
    anchors:[{
        text:"导航",
        value:"nav1"
    },{
        text:"数据采集",
        value:"nav2"
    },{
        text:"数据录入",
        value:"nav3"
    },{
        text:"数据展示",
        value:"nav4"
    },{
        text:"反馈",
        value:"nav5"
    }]
})
const onNavigate = (item:any)=>{
    FToast.show(item.text)
}
</script>`