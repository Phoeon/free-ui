<template>
    <transition :name="animation">
        <div v-show="visible" :class="cn"><slot></slot></div>
    </transition>
</template>
<script lang="ts" setup>
import { computed, defineProps, watch } from 'vue'
const props = defineProps({
    alpha:Boolean,
    visible:Boolean,
    scroll:Boolean,
    animation:{type:String,default:"ph-fade"}
})
const cn =computed(()=>{
    return {
        'ph-layer':true,
        'ph-layer-alpha':props.alpha
    }
})
watch(()=>props.visible,(v)=>{
    document.body.setAttribute("f-scroll-forbidden",v+"")
})
</script>
<style lang="scss">
.ph-fade-leave-to,
.ph-fade-enter-from
 {
	opacity: 0;
}
.ph-fade-leave-from,
.ph-fade-enter-to {
	opacity: 1;
}
.ph-fade-leave-active,
.ph-fade-enter-active
{
	transition: opacity .3s ease,background-color .3s ease;
}
.ph-layer{
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: var(--ph-zdx-mask);
    top:0;
    left:0;
    right:0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    &-alpha{
        background-color: transparent;
    }
}
</style>
