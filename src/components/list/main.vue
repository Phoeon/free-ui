<template>
    <div :class="['ph-list',block?'ph-list-block':'','ph-list-'+props.size]"><slot></slot></div>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
const props = defineProps({
    block:Boolean,
    size:String as PropType<'small'|'normal'|'large'>
})

</script>
<style lang="scss">
.ph-list{
    --ph-li-brt:2px 2px 0 0;
    --ph-li-brl:0 0 2px 2px;
    --ph-li-blr:1px;
    margin: var(--ph-pd);
    margin-top: 0;
    line-height: var(--ph-24);
    &-block{
        margin-left: 0;
        margin-right: 0;
        --ph-li-brt:0;
        --ph-li-brl:0;
        --ph-li-blr:0;
    }
    &-small{
        --ph-glist-h: 38px;
    }
    &-normal{
        --ph-glist-h: 46px;
    }
    &-large{
        --ph-glist-h: 54px;
    }
}
</style>
