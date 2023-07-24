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
    <label :for="id" class="text-gray-500 capitalize text-base">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :placeholder="placeholder"
      class="w-full h-10 p-4 rounded block border-gray-300 border outline-none placeholder:text-sm"
      :disabled="disabled"
      required
    />
  </div>
</template>
