<template>
    <div class="ph-flex" :dir="dir" :wrap="wrap"><slot></slot></div>
</template>
<script lang="ts" setup>
import { computed, defineProps, PropType } from 'vue'
const props = defineProps({
    dir:String as PropType<'row'|'col'>,
    wrap:Boolean
})
</script>
<style lang="scss">
.ph-flex{
    display: flex;
    &[dir=row]{
        flex-direction: row;
    }
    &[dir=col]{
        flex-direction: column;
    }
    &[wrap=true]{
        flex-wrap: wrap;
    }
}
</style>