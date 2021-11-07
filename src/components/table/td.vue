<template>
    <td class="ph-tb-cell ph-tb-td"><slot></slot></td>
</template>
<style lang="scss">
@import './cell.scss';
.ph-tb-cell{
    &.ph-tb-td{
        word-break: break-all;
    }
}
</style>