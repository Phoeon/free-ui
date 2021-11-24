<template>
    <footer class="ph-footer">
        <div class="ph-footer-left" v-if="slots.left"><slot name="left"></slot></div>
        <slot></slot>
        <div class="ph-footer-right" v-if="slots.right"><slot name="right"></slot></div>
    </footer>
</template>
<script lang="ts">
export default {
    name:"FFooter"
}
</script>
<script lang="ts" setup>
import { inject, nextTick, onMounted, useSlots } from 'vue'
const slots = useSlots()
const registerBar = inject("registerBar") as ()=>void
onMounted(()=>{
    nextTick(()=>{
        registerBar?.()
    })
})
</script>
<style lang="scss">
@import '../../assets/style/fn.scss';
.ph-footer{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    flex: 0 0 auto;
    box-sizing: border-box;
    z-index: 1;
    padding: 0 var(--ph-pd);
    min-height: var(--ph-gtopbar-h);
    font-size: var(--ph-gtopbar-fs);
    background-color: var(--ph-topbar-bg);
    color: var(--ph-c-d1);
    &:after{
        @include blMx(var(--ph-bd));
    }
    &-right,
    &-left{
        height: 100%;
        display: flex;
        align-items: center;
        gap:4px;
        flex: 1;
    }
    &-left{
        justify-content: flex-start;
    }
    &-right{
        justify-content: flex-end;
    }
    .ph-icon{
        --ph-i-size:var(--ph-gicon);
        font-size:var(--ph-gicon);
    }
}
</style>