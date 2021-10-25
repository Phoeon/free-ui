<template>
    <div :class="cn" :ph-progress="progress" :style="style">
        <div class="ph-indicator-wrap">
            <div :class="['ph-indicator',overhalf?'ph-indicator-of':'']"></div>
        </div>
        <circle-tick class="ph-indicator-icon" v-if="status===1" fill="var(--ph-success)" stroke="var(--ph-c-top)"/>
        <circle-times class="ph-indicator-icon" v-else-if="status===-1" fill="var(--ph-error)" stroke="var(--ph-c-top)"/>
        <label v-else class="ph-progress-label">{{progress}}</label>
    </div>
</template>
<script lang="ts" setup>
import { defineProps,computed,PropType } from 'vue'
import { CircleTimes,CircleTick } from '../icon'
const props = defineProps({
    type:{type:String as PropType<'primary'|'success'|'info'|'warning'|'danger'>,default:"primary"},
    value:{type:Number,default:0},
    max:{type:Number,required:true},
    size:{type:Number,default:80},
    strokeWidth:{type:Number,default:4},
    fill:String,//填充的背景色
    status:{type:Number,default:0}//1 success -1 error
})

const m = computed(()=>{
    return props.max;
})
const v = computed(()=>{
    return Math.max(0,props.value<m.value?props.value:m.value)
})
const overhalf = computed(()=>v.value*2>m.value)

const per = computed(()=>{
    return v.value/m.value
})
const style = computed(()=>{
    const style = {} as Record<string,unknown>
    if(props.strokeWidth)
        style["--ph-pb-bh"]= props.strokeWidth+"px"
    if(props.size)
        style["--ph-pb-size"]= props.size+"px"
    if(props.fill)
        style['--ph-primary'] = props.fill

    style['--ph-pb'] = (v.value*360/m.value)+'deg'
    return style
})
const cn = computed(()=>{
    let type = props.type||"primary"
    if(props.status===1)type = 'success'
    else if(props.status===-1)type= 'danger'
    const cns = ["ph-progress","ph-progress-circle","ph-progress-"+type]
    return cns
})

const progress = computed(()=>{
    return (per.value*100).toFixed(0)+"%"
})
</script>
<style lang="scss">
@import './progress.scss';
.ph-progress-circle{
    --ph-pb-size:80px;
    --ph-pb-bh:4px;
    --ph-pb:0deg;
    display: inline-block;
    height: var(--ph-pb-size);
    width:var(--ph-pb-size);
    .ph-progress-label,
    .ph-indicator-icon{
        position: absolute;
        z-index: 1;
    }
    .ph-progress-label{
        top: 50%;
        left: 50%;
        transform: translate3d(-50%,-50%,0);
    }
    .ph-indicator-icon{
        border: none;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    .ph-indicator-wrap{
        position: relative;
        height:100%;
        width: 100%;
        overflow: hidden;
        
        &:before,
        .ph-indicator:before,
        .ph-indicator:after
        {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            border-width: var(--ph-pb-bh);
            border-style: solid;
            border-radius: 50%;
        }
        &:before{
            border-color: var(--ph-pb-indicator);
            overflow: hidden;
            box-shadow: 0 0 1px 1px var(--ph-progress-bg) inset;
        }
        .ph-indicator{
            transform: rotate(-45deg);
            &:before{
                border-color: transparent;
                border-right-color: var(--ph-progress-bg);
                border-bottom-color: var(--ph-progress-bg);
                transform: rotate(var(--ph-pb));
            }
            &:after{
                border-color: transparent;
                border-left-color: var(--ph-progress-bg);
                border-top-color: var(--ph-progress-bg);
            }
            &.ph-indicator-of{
                &:after{
                    border-left-color: transparent;
                    border-top-color: transparent;
                    border-right-color: var(--ph-pb-indicator);
                    border-bottom-color: var(--ph-pb-indicator);
                }
            }
        }
    }
}
</style>