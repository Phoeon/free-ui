<template>
    <div class="ph-input-wrap">
        <input 
        :class="cns" 
        :value="modelValue"
        :placeholder="placeholder" 
        :disabled="disabled"
        :type="type"
        @input.stop="onInput"
        />
    </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, defineEmits, PropType, reactive } from 'vue'
const props = defineProps({
    modelValue:[String,Number],
    size:String as PropType<'small'|'large'|'normal'>,
    disabled:Boolean,
    valid:Boolean,
    placeholder:String,
    type:String as PropType<'text'|'number'>
})

const state = reactive({
    pc:!('ontouchstart' in window)
})
const cns = computed(()=>{
    return {
        'ph-input':true,
        'ph-ip-small':state.pc&&props.size==='small',
        'ph-ip-large':state.pc&&props.size==='large',
    }
})
const emits = defineEmits(['update:modelValue','input'])
const onInput = (e:Event)=>{
    const v = (e.target as HTMLInputElement).value
    emits('update:modelValue',v);
    emits('input',v);
}
</script>
<style lang="scss">
.ph-input-wrap{
    flex: 1;
}
.ph-input{
    width: 100%;
    border: 1px solid var(--ph-bc);
    height: var(--ph-ginput-h);
    font-size: var(--ph-ginput-fs);
    color: var(--ph-c-d1);
    padding: 0 12px;
    &.ph-ip-small{
        height: var(--ph-ginput-h-sm);
        font-size: var(--ph-ginput-fs);
    }
    &.ph-ip-large{
        height: var(--ph-ginput-h-lg);
        font-size: var(--ph-ginput-fs-lg);
    }
}
</style>