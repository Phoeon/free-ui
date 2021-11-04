<template>
    <div class="ph-datetime-layout">
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
    </div>
</template>
<style lang="scss">
.ph-datetime-layout{
    --ph-dt-barh:40px;
    color: var(--ph-c);
    font-size: 14px;
    font-weight: var(--ph-fw-m);
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    .ph-dt-btn{
        border: none;
    }
}
</style>