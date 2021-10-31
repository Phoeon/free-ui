<template>
    <div class="ph-dt-body"><slot></slot></div>
</template>
<style lang="scss">
.ph-dt-body{
    flex: 1;
    display: flex;
    .ph-dt-date-th{
        display: flex;
        align-items: center;
        height: var(--ph-dt-barh);
        flex: 0 0 auto;
        .ph-dt-date-thcell{
            flex: 1;
            text-align: center;
            width: 100%;
        }
    }
    .ph-dt-date-cell-cm{
        background-color: var(--ph-primary-l1);//var(--ph-c-l5);
        &[hover=true]:hover{
            background-color: var(--ph-modal-bg);
        }
    }
    .ph-dt-date-cell-imp{
        position: relative;
        color: var(--ph-c-d1);
        &:after{
            content: "";
            position: absolute;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: var(--ph-danger);
            left: 0;
            right: 0;
            bottom: 3px;
            margin: auto;
        }
    }
}
</style>