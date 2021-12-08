<template>
    <form-field>
        <template v-slot:default="scope">
            <field-color
                :modelValue="scope.value as string"
                :disabled="scope.disabled"
                :placeholder="scope.placeholder"
                :valid="scope.valid"
                :colors="colors"
                :type="type"
                @input="scope.onInput"
            />
        </template>
    </form-field>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import FormField from './field.vue'
import FieldColor from './color.vue'
import type { IColorType } from '../../shared/types'
defineProps({
    type:String as PropType<IColorType>,
    colors:Array as PropType<Array<string>>
})
</script>