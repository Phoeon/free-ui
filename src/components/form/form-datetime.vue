<template>
    <form-field class="ph-form-datetime">
        <template v-slot:default="scope">
            <field-datetime
                :modelValue="scope.value as string"
                :disabled="scope.disabled"
                :placeholder="scope.placeholder"
                :valid="scope.valid"
                :startPlaceholder="startPlaceholder"
                :endPlaceholder="endPlaceholder"
                :format="format"
                :min="min"
                :max="max"
                :now="now"
                :clear="clear"
                :type="type"
                @input="scope.onInput"
            />
        </template>
    </form-field>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import FormField from './field.vue'
import FieldDatetime from './datetime.vue'
import type { IDtType } from '../../shared/types'
defineProps({
    startPlaceholder:String,
    endPlaceholder:String,
    format:String,
    min:String,
    max:String,
    now:Boolean,
    clear:Boolean,
    type:String as PropType<IDtType>
})
</script>
<style lang="scss">
.ph-form-datetime{
    overflow: hidden;
}
</style>