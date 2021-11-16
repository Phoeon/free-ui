export const c1 = `<f-tree :tree="TreeData" v-model="state.s"></f-tree>
<f-tree :tree="TreeData" v-model="state.d"></f-tree>`
export const c2 = `const state = reactive({
    s:'',
    d:[]
})
TreeData = [{/**请打开控制台**/}]
`