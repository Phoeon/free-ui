export const c1 = `<f-button-group>
    <f-button>Default</f-button>
    <f-button type="info">info</f-button>
    <f-button type="success">Success</f-button>
    <f-button type="danger">Danger</f-button>
    <f-button type="warning">Warning</f-button>
    <f-button type="noble">noble</f-button>
</f-button-group>`

export const c2 = `<f-button-group>
    <f-button fillMode="outline">Default</f-button>
    <f-button fillMode="outline" type="primary">Primary</f-button>
    <f-button fillMode="outline" type="success">Success</f-button>
    <f-button fillMode="outline" type="danger">Danger</f-button>
    <f-button fillMode="outline" type="warning">Warning</f-button>
</f-button-group>
f-button-group>
    <f-button fillMode="none">Default</f-button>
    <f-button fillMode="none" type="primary">Primary</f-button>
    <f-button fillMode="none" type="success">Success</f-button>
    <f-button fillMode="none" type="danger">Danger</f-button>
    <f-button fillMode="none" type="warning">Warning</f-button>
</f-button-group>`

export const c3 = `<f-button-group>
    <f-button type="info" :block="true">Block</f-button>
    <f-button type="success" :block="true">Block</f-button>
    <f-button type="danger" :block="true">Default</f-button>
    <f-button type="normal" :block="true">Default</f-button>
</f-button-group>`
export const c4 = `<f-button-group>
    <f-button type="primary" size="mini">Mini</f-button>
    <f-button type="primary" size="small">Small</f-button>
    <f-button type="primary" >Normal</f-button>
    <f-button type="primary" size="large">Large</f-button>
</f-button-group>`
export const c5 = `<f-button-group>
    <f-button type="normal"><template v-slot:leftIcon><custom-icon name="filter"></custom-icon></template>Icon</f-button>
    <f-button type="normal" dropdown="down">Dropdown</f-button>
    <f-button type="normal">Default</f-button>
    <f-button type="normal" fillMode="outline">outline</f-button>
    <f-button type="normal" fillMode="none">transparent</f-button>
    <f-button type="normal" :disabled="true">Default</f-button>
</f-button-group>
<br />
<f-button-group>
    <f-button type="primary"><template v-slot:leftIcon><custom-icon name="filter"></custom-icon></template>Icon</f-button>
    <f-button type="primary" dropdown="down">Dropdown</f-button>
    <f-button type="primary">Default</f-button>
    <f-button type="primary" fillMode="outline">outline</f-button>
    <f-button type="primary" fillMode="none">transparent</f-button>
    <f-button type="primary" :disabled="true">Default</f-button>
</f-button-group>`
export const c6=`<f-button-group>
    <f-button disabled type="normal"><template v-slot:leftIcon><custom-icon name="filter"></custom-icon></template>Icon</f-button>
    <f-button disabled type="normal" dropdown="down">Dropdown</f-button>
    <f-button disabled type="normal">Default</f-button>
    <f-button disabled type="normal" fillMode="outline">outline</f-button>
    <f-button disabled type="normal" fillMode="none">transparent</f-button>
</f-button-group>
<br />
<f-button-group>
    <f-button disabled type="primary"><template v-slot:leftIcon><custom-icon name="filter"></custom-icon></template>Icon</f-button>
    <f-button disabled type="primary" dropdown="down">Dropdown</f-button>
    <f-button disabled type="primary">Default</f-button>
    <f-button disabled type="primary" fillMode="outline">outline</f-button>
    <f-button disabled type="primary" fillMode="none">transparent</f-button>
</f-button-group>`
export const c7 = `<f-button-group>
    <f-button :loading="true" disabled type="primary">Loading</f-button>
    <f-button :loading="true" type="primary">Loading</f-button>
    <f-button :loading="true">Loading</f-button>
    <f-button :loading="true" disabled>Loading</f-button>
</f-button-group>`
export const c8=`<f-button-group>
    <f-button dropdown="up">浏览器</f-button>
    <f-button dropdown="down">浏览器</f-button>
    <f-button type="primary" dropdown="up">浏览器</f-button>
    <f-button type="primary" dropdown="down">浏览器</f-button>
</f-button-group>`
export const c9=`<f-button-group justify="center">
    <f-button shape="square" type="primary"><custom-icon name="firefox"/></f-button>
    <f-button shape="square" type="success"><custom-icon name="opera"/></f-button>
    <f-button shape="square"><custom-icon name="chrome"/></f-button>
    <f-button shape="square" type="danger"><custom-icon name="internet-explorer"/></f-button>
    <f-button shape="square" type="warning"><custom-icon name="safari"/></f-button>
</f-button-group>
<br/>
<f-button-group justify="center">
    <f-button shape="square" type="primary">1</f-button>
    <f-button shape="square" type="success">2</f-button>
    <f-button shape="square">3</f-button>
    <f-button shape="square" type="danger">4</f-button>
    <f-button shape="square" type="warning">5</f-button>
</f-button-group>`