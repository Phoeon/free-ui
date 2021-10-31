<template>
    <div class="ph-grid-item" :style="style"><slot></slot></div>
</template>
<script lang="ts" setup>
import { computed, defineProps } from 'vue'
const props = defineProps ({
    place:String,
    colSpan:Number,
    rowSpan:Number,
    colOffset:Number,
    rowOffset:Number,
    block:Boolean
})

const style = computed(()=>{
    const style = {} as Record<string,unknown>

    if(props.place!==undefined)
        style['--ph-grid-item-place'] = props.place
    if(props.rowSpan!==undefined)
        style['--ph-grid-row-span'] = props.rowSpan
    if(props.rowOffset!==undefined)
        style['--ph-grid-row-offset'] = props.rowOffset
    
    if(props.block){
        style['--ph-grid-col-offset'] = 1
        style['--ph-grid-col-span'] = 'var(--ph-grid-cols)'
    }
    if(props.colSpan!==undefined&&!props.block)
        style['--ph-grid-col-span'] = props.colSpan
    if(props.colOffset!==undefined&&!props.block)
        style['--ph-grid-col-offset'] = props.colOffset
    return style
})
</script>

<style lang="scss">
.ph-grid-item{
    --ph-grid-item-place:auto;
    --ph-grid-col-span:1;
    --ph-grid-row-span:1;
    --ph-grid-col-offset:auto;
    --ph-grid-row-offset:auto;
    position: relative;
    transition: box-shadow .3s ease,background-color .3s ease;
    box-shadow: none;
    border: var(--ph-grid-item-border);
    border-radius: var(--ph-grid-item-radius);
    padding: var(--ph-grid-item-padding);
    place-self: var(--ph-grid-item-place);
    grid-column: var(--ph-grid-col-offset)/span var(--ph-grid-col-span);
    grid-row: var(--ph-grid-row-offset)/span var(--ph-grid-row-span);
    align-self: flex-start;
    &:hover{
        box-shadow: var(--ph-grid-item-shadow);
        z-index: 1;
    }
    & > img{
        width: 100%;
    }
}
</style>