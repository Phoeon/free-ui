<template>
<f-mask class="ph-drawer-mask" :clickClose="clickClose" position="fixed">
    <template v-slot:default="scope">
    <transition :name="animation">
        <div v-if="scope.visible" :class="['ph-drawer',position]" @click.stop :style="style">
            <slot></slot>
        </div>
    </transition>
    </template>
</f-mask>
</template>
<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import FMask from '../mask/main.vue'

const props = defineProps({
    position:{type:String,default:"bottom"},
    padding:String,
    width:String,
    height:String,
    clickClose:{type:Boolean,default:true}
})
const animation = computed(()=>{
    switch(props.position){
        case "top":return "ph-slidedown"
        case "left":return "ph-slideright"
        case "right":return "ph-slideleft"
        default:return "ph-slideup"
    }
})

const style = computed(()=>{
    const style = {} as Record<string,string>
    if(props.width)
        style.width = props.width
    if(props.height) 
        style.height = props.height
    if(props.padding)
        style.padding = props.padding 
    return style
})
</script>
<style lang="scss">
.ph-drawer-mask{
    z-index: var(--ph-zdx-modal);
}
.ph-drawer{
    --ph-drawer-br:0;
    position:fixed;
    box-shadow: var(--ph-shadow-1);
    border-radius: var(--ph-drawer-br);
    overflow: hidden;
    background-color: var(--ph-modal-bg);

    &.bottom{
        left:0;
        right:0;
        bottom:0;
    }
    &.top{
        left:0;
        right:0;
        top:0;
    }
    &.left{
        left:0;
        bottom:0;
        top:0;
    }
    &.right{
        right:0;
        bottom:0;
        top:0;
    }
}
@media screen and (max-width:768px){
    .ph-drawer{
        &.bottom{
            --ph-drawer-br:16px 16px 0 0;
        }
        &.top{
            --ph-drawer-br:0 0 16px 16px;
        }
        &.left{
            --ph-drawer-br:0 16px 16px 0;
        }
        &.right{
            --ph-drawer-br:16px  0 0 16px;
        }
    }
}
</style>
