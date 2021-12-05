<template>
<teleport to="body">
<transition name="ph-fade" mode="out-in" @after-leave="evt?.emit('destroy')">
    <template v-if="state.visible">
        <div class="ph-toast-mask" v-if="modal">
            <toast :icon="icon" :title="title" :type="type" :position="position"/>
        </div>
        <toast v-else :icon="icon" :title="title" :type="type" :position="position"/>
    </template>
</transition>
</teleport>
</template>
<script lang="ts" setup>
import { reactive, PropType, defineProps, nextTick } from 'vue'
import type IEvt from 'ph-evt'
import Toast from './toast.vue'

const props = defineProps({
    title: String,
    modal: Boolean,
    icon: String,
    type: String as PropType<'success'|'warning'|'error'|'info'>,
    duration: {type:Number,default:3000},
    position: {type:String as PropType<'bottom'|'top'|'center'>,default:"center"},
    evt: Object as PropType<IEvt> 
})
const state = reactive({
    visible:false
})
const show = ()=>{
    state.visible = true
    window.setTimeout(()=>{
        state.visible = false
        props.evt?.emit("close")
    },props.duration||3000)
}

nextTick(()=>show())
</script>
<style lang="scss">
.ph-toast-mask{
    position: fixed;
    z-index: var(--ph-zdx-mask);
    top:0;
    left:0;
    right:0;
    bottom: 0;
    background-color: transparent;
}
</style>
