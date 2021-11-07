<template>
    <th class="ph-tb-cell ph-tb-th"><slot></slot></th>
</template>

<style lang="scss">
@import './cell.scss';
.ph-tb-cell{
    &.ph-tb-th{
        height: 54px;
        color: var(--ph-c-d1);
        font-weight: var(--ph-fw-m);
        background-color: var(--ph-bg-a15);
        position: relative;
        &:after{
            content: "";
            height: 80%;
            width: 1px ;
            background-color: var(--ph-bd);
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