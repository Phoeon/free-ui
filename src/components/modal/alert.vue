<template>
<base-modal 
    class="ph-modal-alert"
    :title="title"
    :content="content"
    >
    <template v-slot:action="scope">
        <f-button :fillMode="state.sm?'none':'normal'" :type="state.sm?'primary':'default'" @click="scope.close(1)">{{doneText||'知道了'}}</f-button>
    </template>
</base-modal>
</template>
<script lang="ts" setup>
import { defineProps, reactive } from 'vue'
import { CustomIcon } from '../icon'
import BaseModal from './base.vue'
import FButton from '../button/main.vue'
import MediaQuery from '../../shared/media-query'
const props = defineProps({
    doneText:String,
    title:String,
    content:String
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
.ph-modal-alert{
    .ph-modal{
        &-action{
            justify-content: center;
        }
    }
}
@media screen and ( max-width:768px){
    .ph-modal-alert{
        .ph-modal{
            &-action{
                height: var(--ph-gmodal-ah);
                position:relative;
                .ph-btn{
                    flex: 1;
                    margin: 0;
                    height: 100%;
                }
                &:before{
                    content: "";
                    position: absolute;
                    background-color: var(--ph-bc-1);
                    z-index: 1;
                    width: 100%;
                    height: 1px;
                    top: 0;
                    left: 0;
                }
            }
        }
    }
}
</style>