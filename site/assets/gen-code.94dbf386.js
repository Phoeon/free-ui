const s=e=>{let t="";return e.template&&(t+=`<template>
${e.template}
</template>
`),e.style&&(t+=`<style lang="scss">
${e.style}
</style>
`),e.script&&(t+=`<script lang="ts" setup>
${e.script}
<\/script>`),t};export{s as g};
