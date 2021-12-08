<template>
    <grid-item class="ph-form-divider" :block="true">
        <f-divider :align="align" :offset="offset" :type="type"><slot></slot></f-divider>
    </grid-item>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import type { IThemeType } from '../../shared/types'
import GridItem from '../grid/grid-item.vue'
import FDivider from '../divider/main.vue'
defineProps({
    type:{type:String as PropType<IThemeType>,default:'normal'},
    align:{type:String as PropType<'left'|'center'|'right'>,default:'center'},
    offset:{type:Number,default:32}
})
</script>
<style lang="scss">
.ph-form-divider{
    position: relative;
    padding: 0;
}
</style>