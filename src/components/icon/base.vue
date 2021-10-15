<template>
    <i 
    class="ph-icon" 
    :disabled="disabled" 
    :active="active&&!disabled" 
    :hover="hover&&state.hover&&!disabled" 
    :outline="outline" 
    :shape="shape" 
    :style="style">
    <slot 
        :disabled="disabled" 
        :size="size" 
        :outline="outline" 
        :fill="fill" 
        :active="active"
        :stroke="stroke"></slot></i>
</template>
<script lang="ts" setup>
import { reactive, defineProps, computed, PropType } from "vue";
const props = defineProps({
    active:Boolean,
    disabled:Boolean,
    outline:Boolean,
    hover:Boolean,
    fill:String,
    stroke:String,
    borderColor:String,
    size:String,
    shape:String as PropType<'circle'|'square'>
})
const state = reactive({
    hover:!("ontouchstart" in window)
})
const style = computed(()=>{
    const style = {} as {[k:string]:unknown}
    if(props.fill) style['--ph-fill'] = props.fill;
    if(props.stroke) style['--ph-stroke'] = props.stroke;
    if(props.borderColor) style['--ph-borderColor'] = props.borderColor;
    if(props.size) style['--ph-size'] = props.size
    return style
})
</script>
<style lang="scss">
.ph-icon{
    --ph-icon-bg:var(--ph-fill,transparent);
    --ph-icon-bc:var(--ph-borderColor,var(--ph-bc));
    --ph-icon-c:var(--ph-stroke,var(--ph-c));
    --ph-icon-ratio:calc(var(--ph-size,16px) * 0.0625);
    --ph-icon-size:calc(var(--ph-icon-ratio) * 16);
    --ph-icon-2:calc(var(--ph-icon-ratio) * 2);
    --ph-icon-6:calc(var(--ph-icon-ratio) * 6);
    --ph-icon-8:calc(var(--ph-icon-ratio) * 8);
    --ph-icon-10:calc(var(--ph-icon-ratio) * 10);

    position: relative;
    width: var(--ph-icon-size);
    height: var(--ph-icon-size);
    display: inline-block;
    box-sizing: border-box;
    
    &:before,
    &:after{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        display: block;
        transition: all .15s ease;
        box-sizing: border-box;
    }
    &[outline=true]{
        --ph-icon-bg:var(--ph-stroke,var(--ph-c));
        --ph-icon-c:var(--ph-fill,var(--ph-c-ltop));
    }
    &[shape=circle]{
        border-radius: 50%;
    }
    &[shape=square]{
        border-radius: 2px;
    }
    &[shape=square],
    &[shape=circle]{
        border: 1px solid var(--ph-icon-bc);
        background-color: var(--ph-icon-bg);
    }
    &[hover=true]:hover{
        --ph-icon-bc:var(--ph-bg-theme);
    }
    &[active=true]:active{
        --ph-icon-bg:var(--ph-bg-disabled);
    }
    &[disabled=true]{
        cursor:not-allowed!important;
        opacity: .4!important;
    }
}
</style>