export const c1=`<f-button type="success" v-popover="{...data,position:'tl'}">上左</f-button>
<f-button type="danger" v-popover="{...data,position:'tc'}">上中</f-button>
<f-button type="warning" v-popover="{...data,position:'tr'}">上右</f-button>

<f-button type="success" v-popover="{...data,position:'bl'}">下左</f-button>
<f-button type="danger" v-popover="{...data,position:'bc'}">下中</f-button>
<f-button type="warning" v-popover="{...data,position:'br'}">下右</f-button>

<f-button type="success" v-popover="{...data,position:'lt'}">左上</f-button>
<f-button type="danger" v-popover="{...data,position:'lc'}">左中</f-button>
<f-button type="warning" v-popover="{...data,position:'lb'}">左下</f-button>

<f-button type="success" v-popover="{...data,position:'rt'}">右上</f-button>
<f-button type="danger" v-popover="{...data,position:'rc'}">右中</f-button>
<f-button type="warning" v-popover="{...data,position:'rb'}">右下</f-button>

<script setup>
const data = {
    title:"问题提示",
    content:"描述文字描述文字描述文字描述",
}
</script>
`