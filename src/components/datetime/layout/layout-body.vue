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
}
</style>