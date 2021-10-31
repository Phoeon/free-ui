<template>
    <div class="ph-dt-grid">
        <dt-btn 
            v-for="(item,idx) in dataSource" 
            @click="$emit('item-click',item)"
            :disabled="item.disabled"
            :active="item.active"
            :class="item.cn"
            :key="idx"
            >{{item.text}}</dt-btn>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { IGridItem } from '../types'
import DtBtn from './btn.vue'

const props = defineProps({
    dataSource:{type:Array as PropType<Array<IGridItem>>,default:()=>[]}
})
</script>
<style lang="scss">
.ph-dt-grid{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    flex: 1;
}
</style>