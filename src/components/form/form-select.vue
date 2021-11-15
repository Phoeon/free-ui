<template>
    <form-field>
        <template v-slot:default="scope">
            <field-select
                :modelValue="scope.value"
                :disabled="scope.disabled"
                :placeholder="scope.placeholder"
                :valid="scope.valid"
                :options="options"
                :multi="multi"
                @input="scope.onInput"
            />
        </template>
    </form-field>
</template>
<script lang="ts" setup>
import { IDropdownItem } from '../../shared/types'
import { defineProps, PropType } from 'vue'
import FormField from './field.vue'
import FieldSelect from './select.vue'
defineProps({
    options:{
        type:Array as PropType<Array<IDropdownItem>>,
        default:()=>[]
    },
    multi:Boolean
})
</script>