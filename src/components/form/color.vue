<template>
    <input-wrap @click.stop="onClick" :disabled="disabled" :placeholder="placeholder" ref="ewrap">
        <template #default="scope">
            <input 
            class="ph-colorpicker-input"
            :readonly="true"
            :placeholder="scope.placeholder" 
            :disabled="scope.disabled"
            :value="modelValue"
            @input="onInput"
            />
        </template>
        <template #right>
            <div class="ph-colorpicker-addon" :style="{'--ph-color-btn-bg':modelValue}"></div>
        </template>
    </input-wrap>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, PropType, ref } from 'vue'
import { IColorType } from '../../shared/types'
import ColorPicker from '../color'
import InputWrap from './input-wrap.vue'

const ewrap = ref<InstanceType<typeof InputWrap>>()
const emits = defineEmits(['update:modelValue','input'])

const props = defineProps({
    modelValue:{type:String as PropType<string>,required:true},
    disabled:Boolean,
    placeholder:String,
    colors:Array as PropType<Array<string>>,
    type:String as PropType<IColorType>
})
const done = (v:string)=>{
    emits('update:modelValue',v);
    emits('input',v);
}
const onInput = (e:Event)=>{
    1;
}
const onClick = ()=>{
    if(props.disabled)return
    const rect = ewrap.value.$el.getBoundingClientRect()
    ColorPicker.show({
        value:props.modelValue,
        type:props.type,
        title:props.placeholder,
        colors:props.colors,
        rect
    }).done(done)
}
</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-colorpicker-input{
    @include input();
}
.ph-colorpicker-addon{
    --ph-color-btn-mg:4px;
    --ph-color-btn-bg:transparent;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: var(--ph-gicon-sm);
    height: var(--ph-gicon-sm);
    margin: auto;
    background-size: 50%;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSJub25lIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMCAwaDE1djE1SDB6Ii8+PHBhdGggZmlsbD0iI0U2RTZFNiIgZD0iTTAgMGg3LjV2Ny41SDB6TTcuNSA3LjVIMTVWMTVINy41eiIvPjwvZz48L3N2Zz4=");
    &:before,
    &:after{
        content:"";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    &:before{
        background-color: var(--ph-color-btn-bg);
    }
    &:after{
        width: 0;
        height: 0;
        border-width: 4px;
        border-style: solid;
        border-color: transparent;
        border-top-color: var(--ph-c-white);
        border-bottom: none;
    }
}
</style>