export const c1=`<f-steps :steps="steps"></f-steps>
<f-steps :steps="steps" size="small"></f-steps>
<f-steps :steps="steps" direction="vt"></f-steps>
<f-steps :steps="steps" direction="vt" size="small"></f-steps>

<script setup>
const steps = [{
    title:"处理完成",
    desc:"描述内容文字",
    status:1
},{
    title:"处理中",
    desc:"描述内容文字",
    status:0
},{
    title:"待处理",
    desc:"描述内容文字",
    status:-1
}]
</script>`