<template>
    <f-drawer class="ph-as-mask" position="bottom" padding="0px" v-model="drawerVisible">
        <div :class="['ph-as','ph-as-'+type]">
            <div class="ph-as-topbar" v-if="desc&&title">
                <div class="ph-as-title" v-if="title">{{title}}</div>
                <div class="ph-as-desc" v-if="desc">{{desc}}</div>
            </div>
            <ul class="ph-as-ul">
                <li class="ph-as-li" v-for="(item,index) in options" :key="index">
                    <template v-if="type==='grid'">
                        <f-button 
                            shape="square" 
                            class="ph-as-gicon"
                            :disabled="item.disabled" 
                            @click="notify(item.value,item)">
                            <template v-slot:leftIcon v-if="item.icon">
                                <custom-icon :fill="item.iconColor" :name="item.icon"/>    
                            </template> 
                        </f-button>
                        <span class="ph-as-gtext">{{item.text}}</span>
                    </template>
                    <f-button 
                        v-else
                        fillMode="reverse"
                        :radius="false" 
                        :disabled="item.disabled" 
                        :block="true" 
                        :type="item.type" 
                        @click="notify(item.value,item)">
                        <template v-slot:leftIcon v-if="item.icon">
                            <custom-icon :fill="item.iconColor" :name="item.icon"/>    
                        </template>
                        {{item.text}}</f-button>
                </li>
            </ul>
            <div class="ph-as-cancelwrap">
                <f-button :radius="false" :block="true" @click="notify()">{{cancelText||'取消'}}</f-button>
            </div>
        </div>
    </f-drawer>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, PropType, computed, nextTick } from 'vue'
import { IActionOption } from './types'
import { CustomIcon } from '../icon'
import FDrawer from '../drawer/main.vue'
import FButton from '../button/main.vue'
const emits = defineEmits(['update:modelValue','update:visible','action'])
const props = defineProps({
    modelValue:[String,Number],
    visible:Boolean,
    autoClose:{type:Boolean,default:true},//是否选择后自动关闭
    title:String,
    desc:String,
    cancelText:String,
    type:{type: String as PropType<"list"|"grid">, default:"list"},
    options:{type:Array as PropType<Array<IActionOption>>,default:()=>[]},
    notify:Function as PropType<(...a:any[])=>void>
})
const hide = ()=>{
    emits("update:visible",false)
}
const notify =(v:unknown,b?:IActionOption)=>{
    emits("update:modelValue",v,b)
    emits("action",b,hide)
    props.notify?.(b,hide)
    if(props.autoClose||v===undefined) hide()
}
const drawerVisible = computed({
    set(v){
        emits("update:visible",v)
    },
    get(){
        return props.visible
    }
})
</script>
<style lang="scss">
.ph-as{
    --ph-as-cmp: 8px;
    border-radius: inherit;
    background-color: var(--ph-bg-view);
    &-grid{
        --ph-as-tbg:transparent;
        .ph-as-ul{
            padding: var(--ph-gas-gpd) 0 var(--ph-gas-gpd) 0;
            display: grid;
            grid-template-columns: repeat(auto-fit,var(--ph-gas-gitem-h));
            justify-content: center;
            align-items: center;
            gap: var(--ph-gas-gitem-gap);
            .ph-as-li{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 100%;
            }
            .ph-as-gicon{
                --ph-btn-h: var(--ph-gas-gitem-h);
                background-color: var(--ph-modal-bg);
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: var(--ph-gas-gitem-ih);
                .ph-icon{
                    --ph-i-size:var(--ph-gas-gitem-ih);
                }
            }
            .ph-as-gtext{
                font-size: var(--ph-gas-gitem-fs);
                margin-top: var(--ph-as-cmp);
                padding: 0;
                line-height: 1.4;
            }
        }
    }
    &-list{
        --ph-as-tbg:var(--ph-bg-view);
        .ph-as-li{
            margin-top: 1px;
        }
        .ph-as-cancelwrap{
            padding: 5px 0;
        }
        .ph-btn{
            --ph-btn-bg:var(--ph-mode);
            --ph-btn-bc:var(--ph-mode);
        }
    }
    &-topbar{
        background-color: var(--ph-mode);//var(--ph-bg-a1-reverse);
        padding-top: var(--ph-pd);
        padding-bottom: 8px;
    }
    &-title{
        color: var(--ph-c-d1);
        font-size: var(--ph-gas-desc);
        line-height: var(--ph-24);
        font-weight: var(--ph-fw-m);
    }
    &-desc{
        color: var(--ph-c-l1);
        font-size: var(--ph-gas-desc);
        line-height: var(--ph-22);
    }
    &-title,
    &-desc{
        text-align: center;
    }
    .ph-btn{
        font-weight: initial;
        height: var(--ph-gas-bh);
    }    
    &-cancelwrap{
        .ph-btn{
            --ph-btn-fs:var(--ph-gas-bfs);
            --ph-btn-bg:var(--ph-mode);
            --ph-btn-bc:var(--ph-mode);
        }
    }
}
@media screen and (max-width:768px) {
    .ph-as{
        --ph-as-cmp: calc(var(--ph-rvw) * 20);
    }
}
</style>