export default [
    // {
    //     text:"临时",
    //     id:"/tmp",
    //     action:"/tmp",
    //     icon:"clock"
    // },
    {
        text:"按钮",
        id:"/button",
        action:"/button",
        icon:"list"
    },{
        text:"图标",
        id:"/icon",
        action:"/icon",
        icon:"align-center"
    },{
        text:"导航分类",
        id:"navigate",
        icon:"safari",
        children:[{
            text:"分页",
            id:"/pager",
            action:"/pager"
        },{
            text:"步骤条",
            id:"/step",
            action:"/step"
        },{
            text:"选项卡",
            id:"/tabs",
            action:"/tabs"
        },{
            text:"下拉导航",
            id:"/dropdown",
            action:"/dropdown"
        },{
        //     text:"面包屑",
        //     id:"/breadcrumb",
        //     action:"/breadcrumb"
        // },{
        //     text:"侧边栏导航",
        //     id:"/menus",
        //     action:"/menus"
        // },{
            text:"锚定位",
            id:"/anchor",
            action:"/anchor"
        }]
    },{
        text:"表单",
        id:"/formnav",
        icon:"firefox",
        children:[{
            text:"表单汇总",
            id:"/form",
            action:"/form"
        },{
            text:"验证器",
            id:"validator",
            action:"/validator"
        }
        // ,{
        //     text:"输入框",
        //     id:"/input",
        //     action:"/input"
        // },{
        //     text:"日期时间",
        //     id:"/datetime",
        //     action:"/datetime"
        // },{
        //     text:"颜色选择",
        //     id:"/color",
        //     action:"/color"
        // },{
        //     text:"下拉",
        //     id:"/select",
        //     action:"/select"
        // },{
        //     text:"单选",
        //     id:"/radio",
        //     action:"/radio"
        // },{
        //     text:"多选",
        //     id:"/checkbox",
        //     action:"/checkbox"
        // },{
        //     text:"切换开关",
        //     id:"/switch",
        //     action:"/switch"
        // },{
        //     text:"滑块",
        //     id:"/slider",
        //     action:"/slider"
        // },{
        //     text:"评分",
        //     id:"/rate",
        //     action:"/rate"
        // },{
        //     text:"上传",
        //     id:"/upload",
        //     action:"/upload"
        // },
        ]
    },{
        text:"数据展示",
        id:"/data",
        icon:"internet-explorer",
        children:[{
            text:"轮播carousel",
            id:"/carousel",
            action:"/carousel"
        },{
            text:"树tree",
            id:"/tree",
            action:"/tree"
        },{
            text:"标签",
            id:"/tag",
            action:"/tag"
        },{
            text:"文字提示tooltip",
            id:"/tooltip",
            action:"/tooltip"
        },{
            text:"气泡卡片",
            id:"/popover",
            action:"/popover"
        },{
            text:"表格",
            id:"/table",
            action:"/table"
        },{
            text:"块引用",
            id:"/blockquote",
            action:"/blockquote"
        },{
            text:"分割线",
            id:"/divider",
            action:"/divider"
        },{
            text:"列表",
            id:"/list",
            action:"/list"
        },{
            text:"折叠面板",
            id:"/accordion",
            action:"/accordion"
        },{
        //     text:"时间线",
        //     id:"/pager",
        //     action:"/pager"
        // },{
            text:"卡片",
            id:"/card",
            action:"/card",
            icon:"list-ol"
        }]
    },{
        text:"反馈交互",
        id:"/feedback",
        icon:"opera",
        children:[{
            text:"通知",
            id:"/notification",
            action:"/notification"
        },{
            text:"提示toast",
            id:"/toast",
            action:"/toast",
            icon:"chrome"
        },{
            text:"加载中loading",
            id:"/loading",
            action:"/loading",
            icon:"firefox"
        },{
            text:"对话框",
            id:"/modal",
            action:"/modal"
        },{
            text:"actionsheet",
            id:"/actionsheet",
            action:"/actionsheet"
        },{
            text:"气泡确认框",
            id:"/popconfirm",
            action:"/popconfirm"
        },{
            text:"消息提示",
            id:"/message",
            action:"/message"
        },{
            text:"警告反馈",
            id:"/alert",
            action:"/alert"
        },{
            text:"进度条",
            id:"/progress",
            action:"/progress"
        },{
            text:"抽屉",
            id:"/drawer",
            action:"/drawer"
        }]
    },{
        text:"测试二级菜单",
        id:"/test2",
        icon:"bar-chart",
        children:[{
            text:"二级菜单一",
            id:"/test2-1",
            action:"/test2-1",
            icon:"upload",
        },{
            text:"二级菜单二",
            id:"/test2-2",
            action:"/test2-2",
            icon:"university",
        },{
            text:"二级菜单三",
            id:"/test2-3",
            action:"/test2-3"
        },{
            text:"测试三级菜单",
            id:"/test2-4",
            action:"/test2-4",
            icon:"send",
            children:[{
                text:"三级菜单一",
                id:"/test3-1",
                action:"/test3-1",
                icon:"file",
            },{
                text:"三级菜单二",
                id:"/test3-2",
                action:"/test3-2",
                icon:"rss",
            },{
                text:"三级菜单三",
                id:"/test3-3",
                action:"/test3-3"
            }]
        }]
    }
]