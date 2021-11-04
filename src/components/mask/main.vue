<template>
<transition :name="animation" :position="position" :style="{backgroundColor:fill}">
    <div v-show="visible" :class="cn" @click="clickClose&&hide()"><slot :hide="hide" :visible="modelValue"></slot></div>
</transition>
</template>
<script lang="ts" setup>
import { computed, defineEmits, defineExpose, defineProps, isRef, nextTick, PropType, Ref } from 'vue'
const emits = defineEmits(["update:modelValue"])

const props = defineProps({
    modelValue:[Boolean,Object] as PropType<boolean|Ref<boolean>>,
    alpha:Boolean,
    fill:String,
    scroll:Boolean,
    clickClose:Boolean,
    position:{type:String,default:"fixed"},
    animation:{type:String,default:"ph-fade"},
})
const modelValue = computed({
    set(v:boolean){
        emits("update:modelValue",v)
    },
    get(){
        return props.modelValue as boolean
    }
})
const visible = isRef(props.modelValue)?props.modelValue:modelValue
if(visible.value){
    visible.value = false
    nextTick(()=>visible.value = true)
}
const cn =computed(()=>{
    return {
        'ph-layer':true,
        'ph-layer-alpha':props.alpha
    }
})
const style = computed(()=>{
    const style ={} as Record<string,unknown>
    if(props.fill) style['backgroundColor'] = props.fill
    return style
})
const hide = ()=>{
    visible.value = false
}

defineExpose({
    hide
})
</script>
<style lang="scss">
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
    background-color: var(--ph-mask-bg);
    &-alpha{
        background-color: transparent;
    }
    &[position=fixed]{
        position: fixed;
    }
    &[position=absolute]{
        position: absolute;
    }
}
</style>
