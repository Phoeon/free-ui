<template>
    <div class="ph-field-tip"><slot></slot></div>
</template>
<style lang="scss">
.ph-field-tip{
    font-size: 12px;
    display: block;
    text-align: right;
    width: 100%;
    flex: 1 0 auto;
    margin-top: 5px;
    color: var(--ph-danger);
}
</style>