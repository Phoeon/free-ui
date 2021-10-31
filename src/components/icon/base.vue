<template>
    <i 
    class="ph-icon ph-internal-icon" 
    :type="type"
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
    type:String as PropType<'primary'|'info'|'success'|'warning'|'danger'>,
    hover:{type:Boolean,default:true},
    active:Boolean,
    disabled:Boolean,
    outline:Boolean,
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
    if(props.fill) style['--ph-icon-fill'] = props.fill;
    if(props.stroke) style['--ph-icon-stroke'] = props.stroke;
    if(props.borderColor) style['--ph-icon-bcolor'] = props.borderColor;
    if(props.size) style['--ph-i-size'] = props.size
    return style
})
</script>
<style lang="scss">
@import './icon.scss';
.ph-internal-icon{
    --ph-icon-bg:var(--ph-icon-fill,transparent);
    --ph-icon-bc:var(--ph-icon-bcolor,var(--ph-bc));
    --ph-icon-c:var(--ph-icon-stroke,var(--ph-c));
    --ph-icon-ratio:calc(var(--ph-i-size,16px) * 0.0625);
    --ph-icon-size:calc(var(--ph-icon-ratio) * 16);
    --ph-icon-2:calc(var(--ph-icon-ratio) * 2);
    --ph-icon-6:calc(var(--ph-icon-ratio) * 6);
    --ph-icon-8:calc(var(--ph-icon-ratio) * 8);
    --ph-icon-10:calc(var(--ph-icon-ratio) * 10);

    position: relative;
    width: var(--ph-icon-size);
    height: var(--ph-icon-size);
    font-size: var(--ph-icon-size);
    display: inline-block;
    box-sizing: border-box;
    flex: 0 0 auto;
    font-style: normal;
    text-align: center;
    line-height: inherit;
    
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
        --ph-icon-bg:var(--ph-icon-stroke,var(--ph-c));
        --ph-icon-c:var(--ph-icon-fill,var(--ph-c-top));
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
    &[type=primary]{
        --ph-icon-bg:var(--ph-primary);
        --ph-icon-bc:var(--ph-primary);
        --ph-icon-c:var(--ph-c-top);;
    }
    &[type=info]{
        --ph-icon-bg:var(--ph-info);
        --ph-icon-bc:var(--ph-info);
        --ph-icon-c:var(--ph-c-top);;
    }
    &[type=success]{
        --ph-icon-bg:var(--ph-success);
        --ph-icon-bc:var(--ph-success);
        --ph-icon-c:var(--ph-c-top);;
    }
    &[type=danger]{
        --ph-icon-bg:var(--ph-danger);
        --ph-icon-bc:var(--ph-danger);
        --ph-icon-c:var(--ph-c-top);;
    }
    &[type=warning]{
        --ph-icon-bg:var(--ph-warning);
        --ph-icon-bc:var(--ph-warning);
        --ph-icon-c:var(--ph-c-top);;
    }
}
</style>