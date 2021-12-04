import  { RouteRecordRaw } from 'vue-router'
import { INavNode } from '@phoeon/free-ui'
export const genNavs = (navs:RouteRecordRaw) => {
    return navs.map(nav=>{
        return {
            id:nav.path,
            action:nav.children&&nav.children.length?'':nav.path,
            text:nav.meta.title,
            icon:nav.meta.icon,
            children:nav.children?genNavs(nav.children):[]
        }
    }) as INavNode[]
}