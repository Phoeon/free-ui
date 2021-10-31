<template>
    <i :class="cns" :style="style"></i>
</template>
<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import Env from '../../shared/env'
const props = defineProps({
    name:{type:String,required:true},
    cname:String,
    prefix:String,
    size:String,
    fill:String
})
const cns = computed(()=>{
    const cns = ['ph-icon','ph-custom-icon']
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
const style = computed(()=>{
    const style = {} as {[k:string]:unknown}
    if(props.size) style['--ph-i-size'] = props.size
    if(props.fill) style['--ph-i-fill'] = props.fill
    return style
})
</script>
<style lang="scss">
@import "./icon.scss";
.ph-custom-icon{
    font-size: var(--ph-i-size,inherit);
    color: var(--ph-i-fill,inherit);
}
</style>