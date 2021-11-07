export default [
    {
        name:"临时",
        id:"/tmp",
        action:"/tmp",
        icon:"clock"
    },
    {
        name:"按钮",
        id:"/button",
        action:"/button",
        icon:"list"
    },{
        name:"图标",
        id:"/icon",
        action:"/icon",
        icon:"align-center"
    },{
        name:"导航分类",
        id:"navigate",
        icon:"safari",
        children:[{
            name:"分页",
            id:"/pager",
            action:"/pager"
        },{
            name:"步骤条",
            id:"/step",
            action:"/step"
        },{
            name:"选项卡",
            id:"/tabs",
            action:"/tabs"
        },{
            name:"下拉导航",
            id:"/dropdown",
            action:"/dropdown"
        },{
        //     name:"面包屑",
        //     id:"/breadcrumb",
        //     action:"/breadcrumb"
        // },{
        //     name:"侧边栏导航",
        //     id:"/menus",
        //     action:"/menus"
        // },{
            name:"锚定位",
            id:"/anchor",
            action:"/anchor"
        }]
    },{
        name:"表单",
        id:"/form",
        icon:"firefox",
        action:"/form"
        // children:[{
        //     name:"表单汇总",
        //     id:"/form",
        //     action:"/form"
        // },{
        //     name:"输入框",
        //     id:"/input",
        //     action:"/input"
        // },{
        //     name:"日期时间",
        //     id:"/datetime",
        //     action:"/datetime"
        // },{
        //     name:"颜色选择",
        //     id:"/color",
        //     action:"/color"
        // },{
        //     name:"下拉",
        //     id:"/select",
        //     action:"/select"
        // },{
        //     name:"单选",
        //     id:"/radio",
        //     action:"/radio"
        // },{
        //     name:"多选",
        //     id:"/checkbox",
        //     action:"/checkbox"
        // },{
        //     name:"切换开关",
        //     id:"/switch",
        //     action:"/switch"
        // },{
        //     name:"滑块",
        //     id:"/slider",
        //     action:"/slider"
        // },{
        //     name:"评分",
        //     id:"/rate",
        //     action:"/rate"
        // },{
        //     name:"上传",
        //     id:"/upload",
        //     action:"/upload"
        // },]
    },{
        name:"数据展示",
        id:"/data",
        icon:"internet-explorer",
        children:[{
            name:"标签",
            id:"/tag",
            action:"/tag"
        },{
            name:"文字提示tooltip",
            id:"/tooltip",
            action:"/tooltip"
        },{
            name:"气泡卡片",
            id:"/popover",
            action:"/popover"
        },{
            name:"表格",
            id:"/table",
            action:"/table"
        },{
            name:"块引用",
            id:"/blockquote",
            action:"/blockquote"
        },{
            name:"分割线",
            id:"/divider",
            action:"/divider"
        },{
            name:"列表",
            id:"/list",
            action:"/list"
        },{
            name:"折叠面板",
            id:"/accordion",
            action:"/accordion"
        },{
        //     name:"时间线",
        //     id:"/pager",
        //     action:"/pager"
        // },{
            name:"卡片",
            id:"/card",
            action:"/card",
            icon:"list-ol"
        }]
    },{
        name:"反馈交互",
        id:"/feedback",
        icon:"opera",
        children:[{
            name:"通知",
            id:"/notification",
            action:"/notification"
        },{
            name:"提示toast",
            id:"/toast",
            action:"/toast",
            icon:"chrome"
        },{
            name:"加载中loading",
            id:"/loading",
            action:"/loading",
            icon:"firefox"
        },{
            name:"对话框",
            id:"/modal",
            action:"/modal"
        },{
            name:"actionsheet",
            id:"/actionsheet",
            action:"/actionsheet"
        },{
            name:"气泡确认框",
            id:"/popconfirm",
            action:"/popconfirm"
        },{
            name:"消息提示",
            id:"/message",
            action:"/message"
        },{
            name:"警告反馈",
            id:"/alert",
            action:"/alert"
        },{
            name:"进度条",
            id:"/progress",
            action:"/progress"
        },{
            name:"抽屉",
            id:"/drawer",
            action:"/drawer"
        }]
    },{
        name:"测试二级菜单",
        id:"/test2",
        icon:"bar-chart",
        children:[{
            name:"二级菜单一",
            id:"/test2-1",
            action:"/test2-1",
            icon:"upload",
        },{
            name:"二级菜单二",
            id:"/test2-2",
            action:"/test2-2",
            icon:"university",
        },{
            name:"二级菜单三",
            id:"/test2-3",
            action:"/test2-3"
        },{
            name:"测试三级菜单",
            id:"/test2-4",
            action:"/test2-4",
            icon:"send",
            children:[{
                name:"三级菜单一",
                id:"/test3-1",
                action:"/test3-1",
                icon:"file",
            },{
                name:"三级菜单二",
                id:"/test3-2",
                action:"/test3-2",
                icon:"rss",
            },{
                name:"三级菜单三",
                id:"/test3-3",
                action:"/test3-3"
            }]
        }]
    }
]