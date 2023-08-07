<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    @click="toggleDark()"
    class="border-gray-300 dark:border-gray-700 border rounded p-2 cursor-pointer hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 duration-300"
  >
    <Icon
      name="emojione-monotone:first-quarter-moon-face"
      size="1.25rem"
      v-if="isDark"
      class="text-white"
    />
    <Icon name="grommet-icons:sun" size="1.25rem" v-else />
  </button>
</template>
