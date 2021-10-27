<template>
    <div class="ph-tb-cell ph-tb-td"><slot></slot></div>
</template>
<style lang="scss">
@import './cell.scss';
.ph-tb-cell{
    &.ph-tb-td{
        word-break: break-all;
    }
}
</style>