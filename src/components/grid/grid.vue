<template>
    <div :class="cns" :style="style" :border="border" :shadow="shadow"><slot></slot></div>
</template>
<script lang="ts" setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
    colGap:String,//列间距16px
    rowGap:String,//行间距16px
    radius:String,//item 圆角 4px
    padding:String,//item padding
    border:Boolean,//item border 启用 ，false
    shadow:Boolean,//item hover 阴影启用 false

    //不同分辨率下 的列数 
    all:Number,//所有分辨率 自适应优先级
    xs:Number,//480
    sm:Number,//768
    md:Number,//992
    lg:Number,//1200
    xl:Number,//1920
})

const cns = computed(()=>{
    return {
        'ph-grid':true,
        'ph-auto-fit':props.all===undefined
    }
})
const style = computed(()=>{
    const style = {} as Record<string,unknown>
    if(props.all!==undefined)
        style['--ph-grid-cols-all'] = props.all
    if(props.xs!==undefined)
        style['--ph-grid-cols-xs'] = props.xs
    if(props.sm!==undefined)
        style['--ph-grid-cols-sm'] = props.sm
    if(props.md!==undefined)
        style['--ph-grid-cols-md'] = props.md
    if(props.lg!==undefined)
        style['--ph-grid-cols-lg'] = props.lg
    if(props.xl!==undefined)
        style['--ph-grid-cols-xl'] = props.xl


    if(props.colGap!==undefined)
        style['--ph-grid-cgap'] = props.colGap
    if(props.rowGap!==undefined)
        style['--ph-grid-rgap'] = props.rowGap
    if(props.radius!==undefined)
        style['--ph-grid-item-radius'] = props.radius
    if(props.padding!==undefined)
        style['--ph-grid-item-padding'] = props.padding
    return style
})
</script>

<style lang="scss">
.ph-grid{
    display: grid;
    --ph-shadow-light: var(--ph-shadow-3);

    --ph-grid-cols-all:auto-fit;
    --ph-grid-cols-xs:auto-fit;
    --ph-grid-cols-sm:2;
    --ph-grid-cols-md:3;
    --ph-grid-cols-lg:4;
    --ph-grid-cols-xl:6;
    --ph-grid-cols:var(--ph-grid-cols-all);

    --ph-grid-cgap:var(--ph-pd-small);
    --ph-grid-rgap:var(--ph-pd-small);
    --ph-grid-item-padding:var(--ph-pd-small);
    --ph-grid-item-radius:4px;
    --ph-grid-item-border:none;
    --ph-grid-item-shadow:none;

    grid-template-columns: repeat(var(--ph-grid-cols),1fr);
    grid-gap: var(--ph-grid-rgap) var(--ph-grid-cgap);

    &[shadow=true]{
        --ph-grid-item-shadow: var(--ph-shadow-light);
    }
    &[border=true]{
        --ph-grid-item-border:1px solid var(--ph-bd-light,#e4e7ed);
    }
}
@media (max-width:480px){
    .ph-grid.ph-auto-fit{
        --ph-grid-cols:var(--ph-grid-cols-xs,var(--ph-grid-cols-all));
    }
}
@media (min-width:481px) and (max-width:768px){
    .ph-grid.ph-auto-fit{
        --ph-grid-cols:var(--ph-grid-cols-sm,var(--ph-grid-cols-all));
    }
}
@media (min-width:769px) and (max-width:992px){
    .ph-grid.ph-auto-fit{
        --ph-grid-cols:var(--ph-grid-cols-md,var(--ph-grid-cols-all));
    }
}
@media (min-width:993px) and (max-width:1200px){
    .ph-grid.ph-auto-fit{
        --ph-grid-cols:var(--ph-grid-cols-lg,var(--ph-grid-cols-all));
    }
}
@media (min-width:1201px){
    .ph-grid.ph-auto-fit{
        --ph-grid-cols:var(--ph-grid-cols-xl,var(--ph-grid-cols-all));
    }
}
</style>