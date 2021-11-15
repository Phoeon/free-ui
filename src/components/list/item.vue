<template>
    <div :class="['ph-list-item',desc?'ph-list-item-lg':'']" :hover="state.hover">
        <slot name="left">
            <transition name="ph-scalein">
                <custom-icon @click="emits('left-click')" :fill="iconLeftColor" class="ph-li-ileft" :name="iconLeft" v-if="iconLeft"/>
            </transition>
        </slot>
        <div class="ph-li-content" @click="emits('item-click')">
            <slot>
                <h1 class="ph-li-title">{{title}}</h1>
                <p class="ph-li-desc">{{desc}}</p>
            </slot>
        </div>
        <div class="ph-li-action">
            <slot name="right">
                <template v-if="detail">
                    <custom-icon @click="emits('detail')" :fill="iconRightColor" class="ph-li-iright" :name="iconRight" v-if="iconRight"/>
                    <span @click="emits('detail')" class="ph-li-detail" v-else>详细信息</span>
                    <arrow @click="emits('detail')" direction="right"/>
                </template>
            </slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, reactive } from 'vue'
import { Arrow, CustomIcon} from '../icon'

const emits = defineEmits(['detail','item-click','left-click'])
const props = defineProps({
    title:String,
    desc:String,
    detail:Boolean,
    iconRight:String,
    iconLeft:String,
    iconLeftColor:String,
    iconRightColor:String,
})
const state = reactive({
    hover:!('ontouchstart' in window)
})
</script>
<style lang="scss">
.ph-list-item{
    display: flex;
    align-items: center;
    margin-top: -1px;
    min-height: var(--ph-glist-h);
    padding: 0 var(--ph-pd);
    background-color: var(--ph-block-bg);
    border: 1px solid var(--ph-c-l3);
    border-left-width: var(--ph-li-blr);
    border-right-width: var(--ph-li-blr);
    --ph-li-cursor:default;
    &-lg{
        min-height: var(--ph-glist-h-lg);
    }
    &[hover=true]{
        --ph-li-cursor:pointer;
    }
    .ph-li-ileft{
        margin-right: var(--ph-pd);
        cursor: var(--ph-li-cursor);
    }
    .ph-li-content{
        flex: 1;
        font-size: var(--ph-fs);
        .ph-li-title{
            font-size: var(--ph-glist-fs);
            line-height: var(--ph-glist-lh);
            color: var(--ph-c-d1);
            font-weight: var(--ph-fw-m);
        }
        .ph-li-desc{
            font-size: var(--ph-glist-desc-fs);
            color: var(--ph-c-l2);
        }
    }
    .ph-li-action{
        display: flex;
        align-items: center;
        cursor: var(--ph-li-cursor);
        .ph-li-detail{
            font-size: var(--ph-glist-fs-sm);
            color: var(--ph-c-d1);
        }
        .ph-li-iright,
        .ph-li-detail{
            margin-right: var(--ph-6);
        }
    }
    &:nth-of-type(1){
        border-radius: var(--ph-li-brt);
    }
    &:nth-last-of-type(1){
        border-radius: var(--ph-li-brl);
    }
}

</style>