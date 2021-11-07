<template>
    <table class="ph-table"><slot></slot></table>
</template>

<style lang="scss">
.ph-table{
    background-color: var(--ph-block-bg);
    width: 100%;
    border: none;
    border-collapse: collapse;
    table-layout: fixed;
    tr,th,td{
        border: none;
    }
}
</style>