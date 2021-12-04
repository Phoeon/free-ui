export const routes = [
    {
        "path": "/",
        "name": "/",
        "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/index.md'),
        "meta": {
            "title": "主页",
            "icon": "gg"
        }
    },
    {
        "path": "/cmp",
        "name": "/cmp",
        "children": [
            {
                "path": "/cmp/button",
                "name": "/cmp/button",
                "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/button.md'),
                "meta": {
                    "title": "按钮",
                    "icon": "gg"
                }
            },
            {
                "path": "/cmp/dataview",
                "name": "/cmp/dataview",
                "children": [
                    {
                        "path": "/cmp/dataview/blockquote",
                        "name": "/cmp/dataview/blockquote",
                        "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/dataview/blockquote.md'),
                        "meta": {
                            "title": "块引用"
                        }
                    },
                    {
                        "path": "/cmp/dataview/carousel",
                        "name": "/cmp/dataview/carousel",
                        "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/dataview/carousel.md'),
                        "meta": {
                            "title": "轮播图"
                        }
                    },
                    {
                        "path": "/cmp/dataview/divider",
                        "name": "/cmp/dataview/divider",
                        "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/dataview/divider.md'),
                        "meta": {
                            "title": "分割线"
                        }
                    },
                    {
                        "path": "/cmp/dataview/list",
                        "name": "/cmp/dataview/list",
                        "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/dataview/list.md'),
                        "meta": {
                            "title": "列表"
                        }
                    },
                    {
                        "path": "/cmp/dataview/popover",
                        "name": "/cmp/dataview/popover",
                        "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/dataview/popover.md'),
                        "meta": {
                            "title": "气泡卡片"
                        }
                    },
                    {
                        "path": "/cmp/dataview/table",
                        "name": "/cmp/dataview/table",
                        "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/dataview/table.md'),
                        "meta": {
                            "title": "表格"
                        }
                    },
                    {
                        "path": "/cmp/dataview/tag",
                        "name": "/cmp/dataview/tag",
                        "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/dataview/tag.md'),
                        "meta": {
                            "title": "标签"
                        }
                    },
                    {
                        "path": "/cmp/dataview/tooltip",
                        "name": "/cmp/dataview/tooltip",
                        "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/dataview/tooltip.md'),
                        "meta": {
                            "title": "提示tooltip"
                        }
                    },
                    {
                        "path": "/cmp/dataview/tree",
                        "name": "/cmp/dataview/tree",
                        "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/dataview/tree.md'),
                        "meta": {
                            "title": "树结构"
                        }
                    }
                ],
                "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/dataview/index.md'),
                "meta": {
                    "title": "数据展示",
                    "icon": "gg"
                }
            },
            {
                "path": "/cmp/form",
                "name": "/cmp/form",
                "children": [
                    {
                        "path": "/cmp/form/fields",
                        "name": "/cmp/form/fields",
                        "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/form/fields.md'),
                        "meta": {
                            "title": "表单汇总"
                        }
                    },
                    {
                        "path": "/cmp/form/validator",
                        "name": "/cmp/form/validator",
                        "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/form/validator.md'),
                        "meta": {
                            "title": "验证器"
                        }
                    }
                ],
                "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/form/index.md'),
                "meta": {
                    "title": "表单",
                    "icon": "gg"
                }
            },
            {
                "path": "/cmp/icon",
                "name": "/cmp/icon",
                "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/icon.md'),
                "meta": {
                    "title": "图标",
                    "icon": "gg"
                }
            },
            {
                "path": "/cmp/navigation",
                "name": "/cmp/navigation",
                "children": [
                    {
                        "path": "/cmp/navigation/anchors",
                        "name": "/cmp/navigation/anchors",
                        "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/navigation/anchors.md'),
                        "meta": {
                            "title": "锚链接导航"
                        }
                    },
                    {
                        "path": "/cmp/navigation/dropdown",
                        "name": "/cmp/navigation/dropdown",
                        "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/navigation/dropdown.md'),
                        "meta": {
                            "title": "下拉"
                        }
                    },
                    {
                        "path": "/cmp/navigation/pager",
                        "name": "/cmp/navigation/pager",
                        "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/navigation/pager.md'),
                        "meta": {
                            "title": "分页"
                        }
                    },
                    {
                        "path": "/cmp/navigation/step",
                        "name": "/cmp/navigation/step",
                        "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/navigation/step.md'),
                        "meta": {
                            "title": "步骤"
                        }
                    },
                    {
                        "path": "/cmp/navigation/tabs",
                        "name": "/cmp/navigation/tabs",
                        "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/navigation/tabs.md'),
                        "meta": {
                            "title": "选项卡"
                        }
                    }
                ],
                "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/navigation/index.md'),
                "meta": {
                    "title": "导航分类",
                    "icon": "gg"
                }
            }
        ],
        "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/cmp/index.md'),
        "meta": {
            "title": "组件",
            "icon": "gg"
        }
    },
    {
        "path": "/doc",
        "name": "/doc",
        "component": () => import('/Users/phoeon/Documents/vscode/free-ui/demos/pages/doc/index.md'),
        "meta": {
            "title": "文档",
            "icon": "gg"
        }
    }
]