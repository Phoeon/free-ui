<template>
    <icon :class="cns"></icon>
</template>
<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import Env from '../../shared/env'
import Icon from './icon.vue'

const props = defineProps({
    name:{type:String,required:true},
    cname:String,
    prefix:String,
})
const cns = computed(()=>{
    const cns = ['ph-custom-icon']
    const icon:{cname:string,prefix?:string} = Env.get('icon');
    const cname = props.cname||icon?.cname
    const prefix = props.prefix||icon?.prefix
    if(props.name){
        if(!cname) throw new Error(`
            请提供cname 属性(字体库的名字，如iconfont) , 或者通过全局配置如下
            //font-awesome 举例
            import {FIconConfig} from 'free-ui'
            app.use(FIconConfig,{
                cname?://fa 默认
                prefix?://fa- 
            })
        `)
        cns.push(cname)
        cns.push(prefix+props.name)
    }
    return cns
})
</script>