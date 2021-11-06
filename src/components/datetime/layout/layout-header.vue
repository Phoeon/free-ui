<template>
    <div class="ph-dt-header" :style="style"><slot :hover="state.hover"></slot></div>
</template>
<script lang="ts" setup>
import {computed, defineProps, reactive} from 'vue'
const state = reactive({
    hover:!("ontouchstart" in window)
})
const props = defineProps({
    justify:String
})
const style = computed(()=>{
    const style = {} as Record<string,unknown>
    if(props.justify)style['--ph-dth-justify'] = props.justify
    return style
})
</script>
<style lang="scss">
@import '../../../assets/style/fn.scss';
.ph-dt-header{
    display: flex;
    align-items: center;
    position: relative;
    font-size: 12px;
    padding: 0 var(--ph-pd);
    height: var(--ph-dt-barh);
    justify-content: var(--ph-dth-justify,space-between);
    align-items: center;
    &:after{
        @include blMx(var(--ph-bd-2));
    }
    .ph-dt-header-center{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .ph-dt-header-left,
    .ph-dt-header-right{
        display: flex;
        align-items: center;
    }
    .ph-dt-iaction{
        cursor: pointer;
        &[hover=true]:hover,
        &:active{
            --ph-icon-stroke: var(--ph-primary);
            --ph-i-color: var(--ph-primary);
            color: var(--ph-primary);
        }
    }
}
</style>