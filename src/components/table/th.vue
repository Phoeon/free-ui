<template>
    <div class="ph-tb-cell ph-tb-th"><slot></slot></div>
</template>

<style lang="scss">
@import './cell.scss';
.ph-tb-cell{
    &.ph-tb-th{
        height: 54px;
        color: var(--ph-c-d1);
        font-weight: var(--ph-fw-m);
        background-color: var(--ph-table-header-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        &:after{
            content: "";
            height: 80%;
            width: 1px ;
            background-color: var(--ph-c-l3);
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            position: absolute;
        }
        &:nth-last-of-type(1):after{
            display: none;
        }
    }
}
</style>