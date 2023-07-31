<script setup lang="ts">
defineProps<{
  image?: string | undefined | null
  size: string
}>()
</script>

<template>
  <div :class="`w-[${size}] h-[${size}]`">
    <img
      :src="image ? image : '/_nuxt/assets/images/blank_profile.png'"
      alt="foto de perfil"
      class="w-full h-full rounded-full border-gray-400 border"
    />
  </div>
</template>
