<template>
    <div class="ph-btn-group" :container="container"><slot></slot></div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps({
    container:{type:Boolean,default:true}
})
</script>
<style lang="scss">
.ph-btn-group{
    --ph-btn-gjustify:flex-start;
    --ph-btn-ggap:0;
    --ph-btn-mg:0 0 0 -1px;
    --ph-btn-g-br:0;
    --ph-btn-br:4px;
    --ph-btn-gf-br:var(--ph-btn-br) 0 0 var(--ph-btn-br);
    --ph-btn-gl-br:0 var(--ph-btn-br) var(--ph-btn-br) 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: var(--ph-btn-gjustify);
    gap: var(--ph-btn-ggap);
    padding-left: 1px;


    &[container=true]{
        --ph-btn-ggap:8px;
        --ph-btn-g-br:var(--ph-btn-br);
        --ph-btn-gf-br:var(--ph-btn-br);
        --ph-btn-gl-br:var(--ph-btn-br);
    }
    &[justify=center]{
        --ph-btn-gjustify:center;
    }
    &[justify=flex-end]{
        --ph-btn-gjustify:flex-end;
    }
    .ph-btn{
        margin: var(--ph-btn-mg);
        &-radius{
            border-radius: var(--ph-btn-g-br);
        }
        &:nth-of-type(1){
            border-radius: var(--ph-btn-gf-br);
        }
        &:nth-last-of-type(1){
            border-radius: var(--ph-btn-gl-br);
        }
    }
}
</style>