<template>
<base-modal 
    class="ph-modal-confirm"
    :title="title"
    :content="content"
    >
    <template v-slot:icon v-if="!state.sm">
        <custom-icon class="ph-status-icon" :name="icon" v-if="icon"/>
        <circle-warning type="warning" class="ph-status-icon" v-else />
    </template>
    <template v-slot:action="scope">
        <f-button :fillMode="state.sm?'none':'outline'" @click="scope.close(0)">{{cancelText||'关&ensp;闭'}}</f-button>
        <f-button :fillMode="state.sm?'none':'normal'" type="primary" @click="scope.close(1)">{{doneText||'确&ensp;认'}}</f-button>
    </template>
</base-modal>
</template>
<script lang="ts" setup>
import { defineProps, reactive } from 'vue'
import { CustomIcon, CircleWarning } from '../icon'
import BaseModal from './base.vue'
import FButton from '../button/main.vue'
import MediaQuery from '../../shared/media-query'

const props = defineProps({
    cancelText:String,
    doneText:String,
    title:String,
    content:String,
    icon:String,
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
@import '../../assets/style/fn.scss';
.ph-modal-confirm{
    .ph-modal{
        &-layout{
            .ph-status-icon{
                margin-right: 8px;
                --ph-i-size: 24px;
                color: var(--ph-warning);
            }
        }
        &-action{
            .ph-btn{
                margin-left: 8px;
            }
        }
    }
}
@media screen and ( max-width:768px){
    .ph-modal-confirm{
        .ph-modal{
            &-action{
                height: var(--ph-gmodal-ah);
                position:relative;
                .ph-btn{
                    flex: 1;
                    margin: 0;
                    height: 100%;
                }
                &:before,
                &:after{
                    z-index: 1;
                }
                &:before{
                    @include tlMx(var(--ph-bd-2));
                }
                &:after{
                   @include llMx(var(--ph-bd-2));
                   right: 0;
                   margin: auto;
                }
            }
        }
    }
}

</style>