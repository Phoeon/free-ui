<template>
    <div class="ph-carousel-item"><slot></slot></div>
</template>
<style lang="scss">
.ph-carousel-item{
    width: 100%;
    height: 100%;
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--ph-bg-a1-reverse);
}
</style>