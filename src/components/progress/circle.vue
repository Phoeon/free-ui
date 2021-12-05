<template>
    <div :class="cn" :style="style">
        <div class="ph-indicator-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <circle cx="50%" cy="50%" :r="r" class="ph-pb-icircle" />
                <circle cx="50%" cy="50%" :r="r" class="ph-pb-ocircle" :stroke-dasharray="dasharray as any"/>
            </svg>
        </div>
        <tick class="ph-indicator-icon" v-if="status===1" color="var(--ph-success)"/>
        <exclam class="ph-indicator-icon" v-else-if="status===-1" color="var(--ph-danger)"/>
        <label v-else class="ph-progress-label">{{progress}}</label>
    </div>
</template>
<script lang="ts" setup>
import { defineProps,computed,PropType } from 'vue'
import { Exclam,Tick } from '../icon'

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
const per = computed(()=>{
    return v.value/m.value
})
const r = computed(()=>{
    return props.size/2-props.strokeWidth/2
})
const dasharray = computed(()=>{
    const cl = Math.PI*r.value*2,
        ccl = cl*per.value;
    return [ccl,cl]
})
const style = computed(()=>{
    const style = {} as Record<string,unknown>
    if(props.strokeWidth)
        style["--ph-pb-bh"]= props.strokeWidth+"px"
    if(props.size)
        style["--ph-pb-size"]= props.size+"px"
    if(props.fill)
        style['--ph-primary'] = props.fill
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
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        --ph-i-size:24px;
    }
    .ph-pb-icircle,
    .ph-pb-ocircle{
        stroke-width: var(--ph-pb-bh);
        fill: transparent;
    }
    .ph-pb-icircle{
        stroke: var(--ph-progress-bg);
    }
    .ph-pb-ocircle{
        stroke: var(--ph-pb-indicator);
    }
    .ph-indicator-wrap{
        width: 100%;
        height: 100%;
        svg{
            width: 100%;
            height: 100%;
        }
    }
}
</style>