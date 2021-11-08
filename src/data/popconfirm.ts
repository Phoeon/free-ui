export const c1=`
<f-button type="success" v-confirm:click="{...data,position:'tl'}">上左</f-button>
<f-button type="danger" v-confirm:click="{...data,position:'tc'}">上中</f-button>
<f-button type="warning" v-confirm:click="{...data,position:'tr'}">上右</f-button>

<f-button type="success" v-confirm:click="{...data,position:'bl'}">下左</f-button>
<f-button type="danger" v-confirm:click="{...data,position:'bc'}">下中</f-button>
<f-button type="warning" v-confirm:click="{...data,position:'br'}">下右</f-button>

<f-button type="success" v-confirm:click="{...data,position:'lt'}">左上</f-button>
<f-button type="danger" v-confirm:click="{...data,position:'lc'}">左中</f-button>
<f-button type="warning" v-confirm:click="{...data,position:'lb'}">左下</f-button>

<f-button type="success" v-confirm:click="{...data,position:'rt'}">右上</f-button>
<f-button type="danger" v-confirm:click="{...data,position:'rc'}">右中</f-button>
<f-button type="warning" v-confirm:click="{...data,position:'rb'}">右下</f-button>
`
export const c2 = `const data = {
    title:"确定要关闭么？？",
    done(){
        FToast.success("确定事件")
    },
    cancel(){
        FToast.error("取消事件")
    }
}`