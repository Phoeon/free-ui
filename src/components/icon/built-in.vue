<template>
    <i class="ph-icon ph-builtin-icon" 
    :style="style"
    :disabled="disabled" 
    :hover="hover&&state.hover&&!disabled"><slot :outline="outline"></slot></i>
</template>
<script lang="ts" setup>
import './icon.scss'
import { reactive, defineProps , PropType, computed } from "vue";
const props = defineProps({
    hover:{type:Boolean,default:true},
    type:String as PropType<'primary'|'info'|'success'|'warning'|'danger'>,
    disabled:Boolean,
    color:String,
    size:String,
    outline:Boolean
})
const state = reactive({
    hover:!("ontouchstart" in window)
})
const style = computed(()=>{
    const style = {} as {[k:string]:unknown}
    if(props.color) style['--ph-i-color'] = props.color;
    if(props.size) style['--ph-i-size'] = props.size
    return style
})
</script>
<style lang="scss">
.ph-builtin-icon{
    // &[hover=true]:hover{
    //     --ph-icon-bc:var(--ph-bg-theme);
    // }
    // &[active=true]:active{
    //     --ph-icon-bg:var(--ph-bg-disabled);
    // }
    font-size: var(--ph-i-size,16px);
    color: var(--ph-i-color,inherit);
    display: inline-block;
    vertical-align: middle;
    width: var(--ph-i-size,16px);
    height: var(--ph-i-size,16px);
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
    svg{
        vertical-align: top;
        fill: currentColor;
    }
}
</style>