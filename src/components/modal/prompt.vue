<template>
<base-modal 
    class="ph-modal-prompt"
    :title="title"
    :content="content"
    >
    <template v-slot:action="scope">
        <f-button :fillMode="state.sm?'none':'normal'" @click="scope.close(0)">{{cancelText||'关&ensp;闭'}}</f-button>
        <f-button :fillMode="state.sm?'none':'normal'" type="primary" @click="scope.close(1)">{{doneText||'确&ensp;认'}}</f-button>
    </template>
</base-modal>
</template>
<script lang="ts" setup>
import { defineProps, reactive } from 'vue'
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
.ph-modal-prompt{
    .ph-modal{
        &-action{
            .ph-btn{
                margin-left: 8px;
            }
        }
    }
}
@media screen and ( max-width:768px){
    .ph-modal-prompt{
        .ph-modal{
            &-action{
                display: flex;
                height: var(--ph-modal-ah);
                position:relative;
                .ph-btn{
                    flex: 1;
                    margin: 0;
                    height: 100%;
                }
                &:before,
                &:after{
                    content: "";
                    position: absolute;
                    background-color: var(--ph-bd-2);
                    z-index: 1;
                }
                &:before{
                    width: 100%;
                    height: 1px;
                    top: 0;
                    left: 0;
                }
                &:after{
                    height: 100%;
                    width: 1px;
                    left: 0;
                    right: 0;
                    top: 0;
                    margin: auto;
                }
            }
        }
    }
}

</style>