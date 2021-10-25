<template>
<base-modal 
    class="ph-modal-option"
    :title="title"
    :content="content"
    >
    <template v-slot:action="scope">
        <f-button 
            v-for="(item,idx) in options" 
            :key="idx"
            :block="state.sm" 
            :fillMode="state.sm?'none':'outline'" 
            :type="item.type||'primary'" 
            @click="scope.close(item.value)">{{item.text}}</f-button>
        <f-button 
            :block="state.sm" 
            :fillMode="state.sm?'none':'outline'"  
            @click="scope.close()">取消</f-button>
    </template>
</base-modal>
</template>
<script lang="ts" setup>
import { defineProps, PropType, reactive } from 'vue'
import { CustomIcon, Triangle } from '../icon'
import { IModalOption } from './types'
import BaseModal from './base.vue'
import FButton from '../button/main.vue'
import MediaQuery from '../../shared/media-query'
const props = defineProps({
    title:String,
    content:String,
    options:Object as PropType<Array<IModalOption>>
})
const state = reactive({
    sm:false
})
const mediaQuery = (matches:boolean,dw:number)=>{
    state.sm = dw<769
}
MediaQuery.all(mediaQuery)
mediaQuery(true,document.documentElement.clientWidth)
</script>
<style lang="scss">
.ph-modal-option{
    .ph-modal{
        &-action{
            justify-content: center;
            .ph-btn{
                margin: 0 4px;
            }
        }
    }
}
@media screen and ( max-width:768px){
    .ph-modal-option{
        .ph-modal{
            &-action{
                flex-direction: column;
                .ph-btn{
                    font-weight: initial;
                    flex: 1 0 auto;
                    margin: 0;
                    height: var(--ph-gmodal-ah);
                    border-top: 1px solid var(--ph-bc-1)!important;
                }
            }
        }
    }
}
</style>