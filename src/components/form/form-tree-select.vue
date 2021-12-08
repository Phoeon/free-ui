<template>
    <form-field>
        <template v-slot:default="scope">
            <field-tree-select
                :modelValue="scope.value as IValue"
                :disabled="scope.disabled"
                :placeholder="scope.placeholder"
                :valid="scope.valid"
                :options="options"
                @input="scope.onInput"
            />
        </template>
    </form-field>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import FormField from './field.vue'
import FieldTreeSelect from './tree-select.vue'
import type { ITree, IValue } from '../../shared/types'
defineProps({
    options:{type : Array as PropType<ITree>,required:true}
})
</script>