<script setup lang="ts">
defineProps<{
  text: string
  date: string | undefined
}>()
</script>

<template>
  <div class="w-full h-min flex items-center justify-between bg-gray-700 p-4 rounded">
    <div>
      <h3 class="font-bold text-lg capitalize text-white mb-1">{{ text }}</h3>
      <div class="flex items-center gap-1 text-white">
        <Icon name="solar:lock-keyhole-minimalistic-unlocked-bold" />
        <span class="text-[12px]">Desbloqueada: {{ date }}</span>
      </div>
    </div>

    <div class="w-[120px] h-[70px]">
      <img src="~/assets/images/quiz_time.png" alt="quiz image" class="w-full h-full" />
    </div>
  </div>
</template>
