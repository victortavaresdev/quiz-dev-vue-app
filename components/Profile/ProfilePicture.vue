<script setup lang="ts">
defineProps<{
  image?: string | undefined | null
}>()
</script>

<template>
  <div>
    <img
      :src="image ? image : '/_nuxt/assets/images/blank_profile.png'"
      alt="foto de perfil"
      class="w-full h-full rounded-full border-gray-400 dark:border-gray-700 border"
    />
  </div>
</template>
