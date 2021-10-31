<template>
    <div class="ph-dt-footer" :style="style"><slot></slot></div>
</template>
<script lang="ts" setup>
import {computed, defineProps} from 'vue'
const props = defineProps({
    justify:String
})
const style = computed(()=>{
    const style = {} as Record<string,unknown>
    if(props.justify)style['--ph-dth-justify'] = props.justify
    return style
})
</script>
<style lang="scss">
@import '../../../assets/style/fn.scss';
.ph-dt-footer{
    display: flex;
    align-items: center;
    position: relative;
    font-size: 12px;
    padding: 0 var(--ph-pd);
    height: var(--ph-dt-barh);
    justify-content: var(--ph-dth-justify,'flex-start');
    &:after{
        @include tlMx(var(--ph-bc-1));
    }
    .ph-dt-btn{
        --ph-dtbtn-pdv:3px;
        --ph-dtbtn-pdh:4px;
        &[hover=true]:hover{
            color: var(--ph-primary);
        }
    }
    .ph-dt-footer-left{
        flex: 1;
    }
    .ph-dt-footer-right{
        text-align: right;
    }
}
</style>