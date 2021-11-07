<template>
<f-mask v-model="state.visible" :alpha="!state.sm" @click="close">
<transition :name="state.animation">
    <div v-if="state.visible" 
    @click.stop :class="cns" 
    ref="edom" :style="style">
        <div class="ph-ppdd-header" v-if="title&&state.sm">{{title}}</div>
        <ul class="ph-ppdd-list">
            <li class="ph-ppdd-li" :disabled="item.disabled" :active="state.value.includes(item.value)" v-for="(item,idx) in dataSource" :key="idx" @click="(!item.disabled)&&onClick(item)" :hover="state.hover&&!item.disabled">
                <custom-icon class="ph-ppdd-icon" :name="item.icon" v-if="item.icon"/>
                <span class="ph-ppdd-text">{{item.text}}</span>
                <tick v-if="state.value.includes(item.value)" type="primary"/>
            </li>
        </ul>
        <div class="ph-ppdd-action" v-if="multi">
            <f-button :radius="false" :block="true" fillMode="reverse" type="primary" @click="onDone">确定</f-button>
        </div>
    </div>
</transition>
</f-mask>
</template>
<script lang="ts" setup>
import './popover.scss';
import { defineProps, nextTick, onMounted, PropType, reactive, ref, computed } from 'vue'
import { CustomIcon, Tick } from '../icon'
import { ISelectPosition, IDropdownItem } from './types'
import { getAnimation, sumArray } from '../../shared/utils'
import FButton from '../button/main.vue'
import MediqQuery from '../../shared/media-query'
import FMask from '../mask/main.vue'

const edom = ref<HTMLElement>()
const props = defineProps({
    dataSource:{type:Array as PropType<Array<IDropdownItem>>,default:()=>[]},
    value:{type:Array as PropType<Array<string|number>>,default:()=>[]},
    position:{type:String as PropType<ISelectPosition>,default:"b"},
    theme:{type:String as PropType<'normal'|'reverse'>},
    title:String,
    x:{type:Number,default:0},
    y:{type:Number,default:0},
    height:{type:Number,default:0},
    width:{type:Number,default:0},
    multi:Boolean,
    notify:Function as PropType<(item:Array<IDropdownItem>)=>void>,
    animation:{type:String,default:'ph-upbit'}
})

const state = reactive({
    visible:false,
    hover:!("ontouchstart" in window),
    sm:false,
    position:props.position,
    animation:props.animation,
    value:props.value
})

const style = reactive({
    left:'auto',
    top:'auto',
    minWidth:(props.width+"px")
})
const cns = computed(()=>{
    const cns = ['ph-pop-select','ph-pop','ph-pop-'+state.position]
    if(props.theme==="reverse")
        cns.push("ph-pop-reverse")
    return cns
})
const close = ()=>{
    state.visible = false
}
const onClick = (item:IDropdownItem)=>{
    if(!props.multi){
        if(item.value===state.value[0])
        props.notify?.([])
        else
        props.notify?.([item])
        close()
    }
    else{
        const checked = state.value.findIndex(v=>v===item.value)>-1
        if(checked)state.value = state.value.filter(v=>v!=item.value)
        else state.value.push(item.value)
    }
}
const onDone = ()=>{
    props.notify?.(props.dataSource.filter(item=>state.value.includes(item.value)))
    close()
}
const mediaQuery = (a:any,dw:number)=>{
    state.sm = dw<768
}
MediqQuery.all(mediaQuery)
onMounted(()=>{
    mediaQuery(true,document.documentElement.clientWidth)
    state.visible = true
    if(state.sm){
        style.left = "0px"
        style.top="auto"
        style.minWidth="auto"
        state.animation = "ph-slideup"
        return
    }
    nextTick(()=>{
        if(!edom.value)return
        const of = 24
        const { offsetWidth, offsetHeight } = edom.value
        const vs = [of,offsetWidth,offsetHeight,0]
        let position = props.position,
            btnH = 0;
        if(position == "b"){
            if(document.documentElement.clientHeight<props.y+offsetHeight+10){
                position = "t"
                btnH = -props.height
            }
        }else{
            if(props.y-offsetHeight-10<0){
                position = "b"
                btnH = props.height
            }
        }
        state.position = position
        const ymatrix = {
            b:[0,0,0,1],
            t:[0,0,-1,-1]
        } as Record<string,Array<number>>
        const 
        x = props.x,
        y = sumArray(vs,ymatrix[position])+props.y+btnH;
        style.left = x+"px"
        style.top = y+"px"
    })
})
</script>
<style lang="scss">
.ph-pop-select{
    --ph-last-bd-line:none;
    --ph-select-btn-br: 0 0 var(--ph-pop-br) var(--ph-pop-br);
    &:after{
        display: none!important;
    }
    .ph-ppdd-header{
        display: flex;
        height: var(--ph-gdd-h);
        justify-content: center;
        align-items: center;
        color: var(--ph-c-d1);
        font-weight: var(--ph-fw-m);
        border-bottom: 1px solid var(--ph-bd-1);
    }
    .ph-ppdd-action{
        border-radius: var(--ph-select-btn-br);
        overflow: hidden;
        .ph-btn{
            --ph-btn-h:var(--ph-gdd-h);
            --ph-btn-bg:var(--ph-mode);
            --ph-btn-bc:var(--ph-mode);
        }
    }
    .ph-ppdd-list{
        max-height: var(--ph-pop-listh);
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        .ph-ppdd-li{
            height: var(--ph-gdd-h);
            font-size: var(--ph-gdd-fs);
            display: flex;
            align-items: center;
            color: var(--ph-pop-c);
            padding: 0 var(--ph-pd);
            position: relative;
            cursor: pointer;
            &:after{
                content: "";
                left: 10px;
                right: 10px;
                bottom: 0;
                height: 1px;
                background-color: var(--ph-pop-bc);
                position: absolute;
            }
            &:nth-last-of-type(1){
                &:after{
                    display: var(--ph-last-bd-line);
                }
            }
            .ph-ppdd-icon{
                margin-right: var(--ph-pd-sm);
            }
            .ph-ppdd-text{
                flex: 1;
                white-space: nowrap;
            }
            &:not([active=true]):active,
            &:not([active=true])[hover=true]:hover{
                background-color: var(--ph-pop-bg-hover);
            }
            &[active=true]{
                background-color: var(--ph-primary-a1);
                color: var(--ph-primary);
            }
        }
    }
}

@media screen and (max-width:768px){
    .ph-pop-select{
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        --ph-last-bd-line:block;
        --ph-select-btn-br:0;
        --ph-gdd-h:var(--ph-45);
        --ph-pop-br:0;
    }
}
</style>