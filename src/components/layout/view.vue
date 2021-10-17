<template>
    <div class="ph-view"><slot></slot></div>
</template>
<style lang="scss">
.ph-view{
    flex: 1;
    padding: var(--ph-pd);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
</style>