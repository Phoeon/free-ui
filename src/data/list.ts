export const c1 = `<f-list :block="true">
<f-list-item 
    v-for="(item,idx) in data.list" 
    @detail="onDetail"
    @left-click="onLeftClick"
    @item-click="onClick"
    :key="idx"
    :title="item.title"
    :detail="item.detail"
    ></f-list-item>
</f-list>
<f-list :block="true">
<f-list-item 
    v-for="(item,idx) in data.list" 
    @detail="onDetail"
    @left-click="onLeftClick"
    @item-click="onClick"
    :key="idx"
    :title="item.title"
    ></f-list-item>
</f-list>
<f-list :block="true">
<f-list-item 
    v-for="(item,idx) in data.list1" 
    @detail="onDetail"
    @left-click="onLeftClick"
    @item-click="onClick"
    :key="idx"
    :title="item.title"
    :detail="item.detail"
    iconLeft="check-circle"
    iconLeftColor="var(--ph-primary)"
    ></f-list-item>
</f-list>
<f-list :block="true">
<f-list-item 
    v-for="(item,idx) in data.list1" 
    @detail="onDetail"
    @left-click="onLeftClick"
    @item-click="onClick"
    :key="idx"
    :title="item.title"
    :detail="item.detail"
    :iconRight="item.icon"
    ></f-list-item>
</f-list>
<f-list :block="true">
<f-list-item 
    v-for="(item,idx) in data.list2" 
    @detail="onDetail"
    @left-click="onLeftClick"
    @item-click="onClick"
    :key="idx"
    :title="item.title"
    :desc="item.desc"
    :detail="item.detail"
    ></f-list-item>
</f-list>
<f-list :block="true">
<f-list-item 
    v-for="(item,idx) in data.list2" 
    @detail="onDetail"
    @left-click="onLeftClick"
    @item-click="onClick"
    :key="idx"
    :title="item.title"
    :desc="item.desc"
    :detail="item.detail"
    iconLeft="check-circle"
    iconLeftColor="var(--ph-primary)"
    ></f-list-item>
</f-list>
<f-list>
<f-list-item 
    v-for="(item,idx) in data.list2" 
    @detail="onDetail"
    @left-click="onLeftClick"
    @item-click="onClick"
    :key="idx"
    :title="item.title"
    :desc="item.desc"
    :detail="item.detail"
    ></f-list-item>
</f-list>
<f-list>
<f-list-item 
    v-for="(item,idx) in data.list2" 
    @detail="onDetail"
    @left-click="onLeftClick"
    @item-click="onClick"
    :key="idx"
    :title="item.title"
    :detail="item.detail"
    ></f-list-item>
</f-list>
<f-list>
<f-list-item 
    v-for="(item,idx) in data.list2" 
    @detail="onDetail"
    @left-click="onLeftClick"
    @item-click="onClick"
    :key="idx"
    >{{item.title}}</f-list-item>
</f-list>
<f-list size="small">
<f-list-item 
    v-for="(item,idx) in data.list2" 
    @detail="onDetail"
    @left-click="onLeftClick"
    @item-click="onClick"
    :key="idx"
    :title="item.title"
    :detail="item.detail"
    ></f-list-item>
</f-list>
<f-list size="normal">
<f-list-item 
    v-for="(item,idx) in data.list2" 
    @detail="onDetail"
    @left-click="onLeftClick"
    @item-click="onClick"
    :key="idx"
    :title="item.title"
    :detail="item.detail"
    ></f-list-item>
</f-list>
<f-list size="large">
<f-list-item 
    v-for="(item,idx) in data.list2" 
    @detail="onDetail"
    @left-click="onLeftClick"
    @item-click="onClick"
    :key="idx"
    :title="item.title"
    :detail="item.detail"
    ></f-list-item>
</f-list>`
export const c2 = `const data = reactive({
    list:[{
        title:"??????1",
        detail:true
    },{
        title:"??????2",
        detail:true,
    },{
        title:"??????3",
        detail:true
    }],
    list1:[{
        title:"??????1",
        detail:true,
        icon:"chrome"
    },{
        title:"??????2",
        detail:true,
        icon:"firefox"
    },{
        title:"??????3",
        detail:true,
        icon:"safari"
    }],
    list2:[{
        title:"??????1",
        detail:true,
        desc:"????????????"
    },{
        title:"??????2",
        detail:true,
        desc:"????????????"
    },{
        title:"??????3",
        detail:true,
        desc:"????????????"
    }],
})
const onDetail = ()=>{
    FToast.success("????????????")
}
const onClick = ()=>{
    FToast.success("????????????")
}
const onLeftClick = ()=>{
    FToast.success("???????????????")
}`