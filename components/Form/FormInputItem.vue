<script setup lang="ts">
defineEmits(['update:modelValue'])

defineProps<{
  id: string
  type: string
  label: string
  modelValue: string
  disabled?: boolean
  placeholder?: string
}>()
</script>

<template>
  <div>
    <label :for="id" class="text-gray-600 dark:text-gray-400 capitalize text-base">{{
      label
    }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :placeholder="placeholder"
      class="w-full h-10 p-4 rounded block text-sm border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-900 border outline-none placeholder:text-sm"
      :disabled="disabled"
      required
    />
  </div>
</template>
