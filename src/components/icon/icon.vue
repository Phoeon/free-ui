<template>
    <i class="ph-icon" 
    :type="type"
    :style="style"
    :disabled="disabled" 
    :hover="hover&&state.hover&&!disabled"><slot></slot></i>
</template>
<script lang="ts" setup>
import './icon.scss'
import { reactive, defineProps , PropType, computed } from "vue";
import { IThemeType } from '../../shared/types'
const props = defineProps({
    hover:{type:Boolean,default:true},
    type:String as PropType<IThemeType>,
    disabled:Boolean,
    color:String,
    size:String
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
.ph-icon{
    display: inline-block;
    vertical-align: middle;
    
    text-indent: initial;
    box-sizing: border-box;
    flex: 0 0 auto;
    font-style: normal;
    text-align: center;
    line-height: inherit;

    color: var(--ph-i-color,inherit);
    font-size: var(--ph-i-size,16px);
    width: var(--ph-i-size,16px);
    height: var(--ph-i-size,16px);
    &[disabled=true]{
        cursor:not-allowed!important;
        opacity: .4!important;
    }
    &[type=primary]{
        --ph-i-color:var(--ph-primary);
    }
    &[type=info]{
        --ph-i-color:var(--ph-info);
    }
    &[type=success]{
        --ph-i-color:var(--ph-success);
    }
    &[type=danger]{
        --ph-i-color:var(--ph-danger);
    }
    &[type=warning]{
        --ph-i-color:var(--ph-warning);
    }
    &[type=noble]{
        --ph-i-color:var(--ph-noble);
    }
}
</style>