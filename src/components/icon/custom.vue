<template>
    <i :class="cns"></i>
</template>
<script lang="ts" setup>
import { computed, defineProps, getCurrentInstance } from 'vue'
const ins = getCurrentInstance() as any
const props = defineProps({
    name:{type:String,required:true},
    cname:String,
    prefix:String
})
const cns = computed(()=>{
    const cns = ['ph-icon','ph-custom-icon']
    const icon:{cname:string,prefix?:string} = ins?.proxy?.ph?.icon
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
<style lang="scss">
@import "./icon.scss";
</style>