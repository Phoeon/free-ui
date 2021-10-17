export default [
    {
        name:"按钮",
        id:"/button",
        action:"/button"
    },{
        name:"图标",
        id:"/icon",
        action:"/icon"
    },{
        name:"通知",
        id:"/notification",
        action:"/notification"
    },{
        name:"卡片",
        id:"/card",
        action:"/card"
    },{
        name:"提示toast",
        id:"/toast",
        action:"/toast"
    },{
        name:"导航分类",
        id:"navigate",
        children:[{
            name:"分页",
            id:"/pager",
            action:"/pager"
        },{
            name:"选项卡",
            id:"/tabs",
            action:"/tabs"
        },{
            name:"下拉导航",
            id:"/dropdown",
            action:"/dropdown"
        },{
            name:"面包屑",
            id:"/breadcrumb",
            action:"/breadcrumb"
        },{
            name:"侧边栏导航",
            id:"/menus",
            action:"/menus"
        },{
            name:"锚定位",
            id:"/hashnav",
            action:"/hashnav"
        }]
    },{
        name:"表单",
        id:"/form",
        children:[{
            name:"日期时间",
            id:"/pager",
            action:"/pager"
        },{
            name:"颜色选择",
            id:"/pager",
            action:"/pager"
        },{
            name:"下拉",
            id:"/pager",
            action:"/pager"
        },{
            name:"单选",
            id:"/pager",
            action:"/pager"
        },{
            name:"多选",
            id:"/pager",
            action:"/pager"
        },{
            name:"切换开关",
            id:"/pager",
            action:"/pager"
        },{
            name:"滑块",
            id:"/pager",
            action:"/pager"
        },{
            name:"评分",
            id:"/pager",
            action:"/pager"
        },{
            name:"上传",
            id:"/pager",
            action:"/pager"
        },]
    },{
        name:"数据展示",
        id:"/data",
        children:[{
            name:"头像",
            id:"/pager",
            action:"/pager"
        },{
            name:"徽标",
            id:"/pager",
            action:"/pager"
        },{
            name:"标签",
            id:"/pager",
            action:"/pager"
        },{
            name:"文字提示tooltip",
            id:"/pager",
            action:"/pager"
        },{
            name:"气泡卡片",
            id:"/pager",
            action:"/pager"
        },{
            name:"表哥",
            id:"/pager",
            action:"/pager"
        },{
            name:"列表",
            id:"/pager",
            action:"/pager"
        },{
            name:"折叠面板",
            id:"/pager",
            action:"/pager"
        },{
            name:"时间线",
            id:"/pager",
            action:"/pager"
        },]
    },{
        name:"反馈交互",
        id:"/pager",
        children:[{
            name:"通知",
            id:"/notification",
            action:"/notification"
        },{
            name:"对话框",
            id:"/pager",
            action:"/pager"
        },{
            name:"气泡确认框",
            id:"/pager",
            action:"/pager"
        },{
            name:"警告条",
            id:"/pager",
            action:"/pager"
        },{
            name:"消息提示",
            id:"/pager",
            action:"/pager"
        },{
            name:"进度条",
            id:"/pager",
            action:"/pager"
        },{
            name:"结果反馈",
            id:"/pager",
            action:"/pager"
        },{
            name:"抽屉",
            id:"/pager",
            action:"/pager"
        }]
    },{
        name:"步骤条",
        id:"/steps"
    },{
        name:"测试二级菜单",
        id:"/test2",
        children:[{
            name:"二级菜单一",
            id:"/test2-1",
            action:"/test2-1"
        },{
            name:"二级菜单二",
            id:"/test2-2",
            action:"/test2-2"
        },{
            name:"二级菜单三",
            id:"/test2-3",
            action:"/test2-3"
        },{
            name:"测试三级菜单",
            id:"/test2-4",
            action:"/test2-4",
            children:[{
                name:"三级菜单一",
                id:"/test3-1",
                action:"/test3-1"
            },{
                name:"三级菜单二",
                id:"/test3-2",
                action:"/test3-2"
            },{
                name:"三级菜单三",
                id:"/test3-3",
                action:"/test3-3"
            }]
        }]
    }
]