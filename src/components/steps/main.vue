<template>
    <div :class="['ph-steps','ph-steps-'+direction,'ph-steps-'+size]" :style="style">
        <template v-for="(item,idx) in steps" :key="idx">
            <div :class="{'ph-step':true,'ph-step-ing':item.status===0,'ph-step-to':item.status===-1}">
                <div class="ph-step-icon-wrap" :line="direction==='vt'&&idx<steps.length-1">
                    <circle-success class="ph-step-icon" type="primary" :outline="true" v-if="item.status===1"/>
                    <i :class="['ph-icon','ph-step-icon',item.status===0?'ph-step-icon-ing':'ph-step-icon-to']" v-else>{{item.value===undefined?idx+1:item.value}}</i>
                </div>
                <div class="ph-step-text">
                    <div class="ph-step-title" :line="direction==='hr'&&idx<steps.length-1" >{{item.title}}</div>
                    <div class="ph-step-desc" v-if="item.desc">{{item.desc}}</div>
                </div>
            </div>
        </template>
    </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, PropType } from 'vue'
import { CircleSuccess } from '../icon'
import type { IStep } from '../../shared/types'
const props = defineProps({
    steps:{
        type:Array as PropType<Array<IStep>>,
        default:()=>[]
    },
    size:{
        type:String as PropType<'normal'|'small'>
    },
    direction:{
        type:String as PropType<'hr'|'vt'>,
        default:'hr'
    },
    lineOffset:Number //垂直线长
})
const style = computed(()=>{
    const style = {} as Record<string,unknown>
    if(props.lineOffset)style['--ph-step-line'] = props.lineOffset+"px"
    return style
})
</script>
<style lang="scss">
.ph-steps{
    display: flex;
    --ph-step-is:var(--ph-gstep-is);
    --ph-step-tfs:16px;
    --ph-step-tc:var(--ph-c-d1);
    --ph-step-linec:var(--ph-c-l2);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    &-hr{
        flex-direction: row;
        --ph-step-mw:200px;
    }
    &-vt{
        flex-direction: column;
        --ph-step-mw:auto;
    }
    &-small{
        --ph-step-is:var(--ph-gstep-is-sm);
        --ph-step-tfs:14px;
    }
    .ph-step{
        display: flex;
        flex: 1;
        color: var(--ph-c);
        min-width: var(--ph-step-mw);
        &:nth-last-of-type(1){
            flex: 0 0 auto;
        }
        &-ing{
            color: var(--ph-c-reverse);
            --ph-step-tc:inherit;
            --ph-step-tfs:16px;
        }
        &-to{
            opacity: 0.7;
        }
        &-icon-wrap{
            margin-right: var(--ph-pd-sm);
            display: flex;
            flex-direction: column;
            &[line=true]{
                position: relative;
                align-items: center;
                &:after{
                    content: "";
                    display: inline-block;
                    flex: 1 0 auto;
                    width:0;
                    height: var(--ph-step-line,150px);
                    margin: var(--ph-pd) 0;
                    border-left: 2px dashed var(--ph-step-linec);
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
        }
        &-text{
            flex: 1;
        }
        &-title{
            height: var(--ph-step-is);
            color: var(--ph-step-tc);
            font-weight: var(--ph-fw-m);
            font-size: var(--ph-step-tfs);
            display: flex;
            align-items: center;
            &[line=true]{
                position: relative;
                &:after{
                    content: "";
                    display: inline-block;
                    flex: 1;
                    height: 0;
                    margin: 0 var(--ph-pd);
                    border-top: 2px dashed var(--ph-step-linec);
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
        &-desc{
            line-height: 22px;
            font-size: 14px;
        }
        &-icon{
            --ph-i-size:var(--ph-step-is);
            font-size: 14px;
        }
        &-icon-ing,
        &-icon-to{
            display: inline-block;
            width: calc(var(--ph-step-is) - 4px);
            height: calc(var(--ph-step-is) - 4px);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
        }
        &-icon-ing{
            background-color: var(--ph-primary);
            color: var(--ph-c-white);
        }
        &-icon-to{
            border: 2px solid var(--ph-c);
            color: var(--ph-c);
        }

    }
}
</style>