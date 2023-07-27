<script setup lang="ts">
defineProps<{
  image?: string
}>()
</script>

<template>
  <div class="w-[15.625rem] h-[15.625rem] mb-4">
    <img
      :src="image ? image : '/_nuxt/assets/images/blank_profile.png'"
      alt="foto de perfil"
      class="w-full h-full rounded-full border-gray-400 border"
    />
  </div>
</template>
