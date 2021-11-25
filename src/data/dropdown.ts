export const c1=`
<p>hover触发</p>
<f-dropdown type="primary" position="bl" :dataSource="data.dataSource" @action="onAction">下左</f-dropdown>
<f-dropdown type="success" position="bc" :dataSource="data.dataSource" @action="onAction">下中</f-dropdown>
<f-dropdown type="danger" position="br" :dataSource="data.dataSource" @action="onAction">下右</f-dropdown>
<f-dropdown type="primary" position="tl" :dataSource="data.dataSource" @action="onAction">上左</f-dropdown>
<f-dropdown type="success" position="tc" :dataSource="data.dataSource" @action="onAction">上中</f-dropdown>
<f-dropdown type="danger" position="tr" :dataSource="data.dataSource" @action="onAction">上右</f-dropdown>

<p>click触发</p>
<f-dropdown type="primary" trigger="click" position="tl" :dataSource="data.dataSource" @action="onAction"  shape="square"></f-dropdown>
<f-dropdown type="success" trigger="click" position="tc" :dataSource="data.dataSource" @action="onAction" dropdown="" shape="square" icon="user-plus"></f-dropdown>
<f-dropdown type="danger" trigger="click" position="tr" :dataSource="data.dataSource" @action="onAction" dropdown="" shape="square">
    <custom-icon name="filter"/>
</f-dropdown>

<script setup>
const onAction = (e:{text:string,value:string|number,icon?:string})=>{
    FToast.show(e.text)
}
const data = {
    dataSource:[{
        text:"添加朋友",
        value:1,
        icon:"chrome"
    },{
        text:"发起群聊",
        value:1,
        icon:"firefox"
    },{
        text:"扫一扫",
        value:1,
        icon:"safari"
    },{
        text:"我的二维码/收款",
        value:1,
        icon:"opera"
    },{
        text:"帮助中心",
        value:1,
        icon:"internet-explorer"
    }]
}
</script>
`