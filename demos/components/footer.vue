<template>
    <div class="www-footer">
        <f-grid class="www-links" :lg="3" :xl="3">
            <f-grid-item class="www-link-block">
                <p>资源</p>
                <p><f-action href="https://gitee.com/phoeon/free-ui" target="_blank">源码地址</f-action></p>
                <p><f-action href="http://phoeon.gitee.io/geo-online/" target="_blank">在线几何画板</f-action></p>
            </f-grid-item>
            <f-grid-item class="www-link-block">
                <p>友情链接</p>
                <p><f-action href="https://phoeon.gitee.io/phoeon-ui-doc" target="_blank">phoeon ui</f-action></p>
                <p>
                    <f-action href="http://vblogs.cc/" target="_blank"><Cnbloglogo/>博客之家</f-action></p>
            </f-grid-item>
            <f-grid-item class="www-link-block">
                <p>联系我</p>
                <span><custom-icon name="wechat"/>xuer10000</span>
                <span><custom-icon name="qq"/>1660350957</span>
            </f-grid-item>
        </f-grid>
        <div class="www-author-bar">
            <f-action href="https://www.npmjs.com/package/@phoeon/free-ui" target="_blank">Free UI@{{version}}</f-action>
             · Built By 
            <f-action href="https://gitee.com/phoeon" target="_blank">Phoeon</f-action> 
        </div>
    </div>
</template>
<script lang="ts" setup>
import { FGrid, FGridItem, FAction, FIcon  } from '@phoeon/free-ui'
import AppInfo from '../app-meta'
import Cnbloglogo from '../icons/cnblog.vue'
const { CustomIcon } = FIcon
const { version } = AppInfo
</script>
<style lang="scss">
.www-footer{
    background-color: var(--ph-block-bg);
    padding: 0 var(--ph-pd-lg);
    border-top: 1px solid var(--ph-bg-a1-reverse);
    .www-links{
        padding: var(--ph-pd-lg);
        .www-link-block{
            line-height: 2;
            display: flex;
            flex-direction: column;
            p{
                color: var(--ph-c-reverse);
            }
            .ph-action{
                padding-left: 0;
            }
            .ph-icon{
                margin-right: var(--ph-pd-sm);
            }
        }
    }
    .www-author-bar{
        padding: 0 var(--ph-pd-lg);
        height: var(--ph-gtopbar-h);
        border-top: 1px solid var(--ph-bg-a1-reverse);
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>