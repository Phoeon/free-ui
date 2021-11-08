export const c1=`<f-accordion v-model="state.v1">
    <f-accordion-item title="面板一">我是内容我是内容我是内容，。</f-accordion-item>
    <f-accordion-item title="面板二">我是内容我是内容我是内容，。</f-accordion-item>
    <f-accordion-item title="面板三" :disabled="true" >我是内容我是内容我是内容，。</f-accordion-item>
    <f-accordion-item title="面板四">我是内容我是内容我是内容，。</f-accordion-item>
</f-accordion>
<!-- accordion:true 每次只有一个展开-->
<f-accordion v-model="state.v2" :accordion="true">
    <f-accordion-item title="面板一">我是内容我是内容我是内容，。</f-accordion-item>
    <f-accordion-item title="面板二">我是内容我是内容我是内容，。</f-accordion-item>
    <f-accordion-item title="面板三" :disabled="true" >我是内容我是内容我是内容，。</f-accordion-item>
</f-accordion>`
export const c2=`<script setup>
const state = reactive({
    v1:0,
    v2:1,
})
</script>`