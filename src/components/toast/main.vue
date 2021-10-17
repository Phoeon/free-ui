<template>
<transition name="ph-fade" mode="out-in" >
    <template v-if="state.visible">
        <div class="ph-toast-mask" v-if="modal">
            <toast :title="title" :type="type" :position="position"/>
        </div>
        <toast v-else :title="title" :type="type" :position="position"/>
    </template>
</transition>
</template>
<script lang="ts" setup>
import { reactive, defineExpose, PropType, defineProps } from 'vue'
import Toast from './toast.vue'

const props = defineProps({
    title: String,
    modal: Boolean,
    type: String as PropType<'success'|'warning'|'error'|'info'>,
    position: {type:String as PropType<'bottom'|'top'|'center'>,default:"center"},
})
const state = reactive({
    visible:false
})
const show = (timer?:number)=>{
    state.visible = true
    setTimeout(()=>{
        state.visible = false
    },timer||3000)
}
defineExpose({
    show
})
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
