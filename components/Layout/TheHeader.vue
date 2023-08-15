<script setup lang="ts">
const { $authStore } = useNuxtApp()

const userMenu = ref(false)
</script>

<template>
  <header
    class="bg-white dark:bg-gray-900 text-slate-900 text-sm flex justify-between items-center px-12 py-4 h-[70px]"
  >
    <div class="flex items-center gap-16">
      <HeaderLogo />
      <HeaderNav />
    </div>

    <div class="flex items-center gap-3">
      <DarkMode />

      <div
        v-if="$authStore.user"
        @click="() => (userMenu = !userMenu)"
        class="relative text-slate-900 dark:text-white px-4 py-2 flex items-center gap-2 h-[36px] cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 duration-300 rounded"
      >
        <ProfilePicture :image="$authStore.user?.image" class="w-[1.625rem] h-[1.625rem]" />
        <span class="text-sm capitalize"> {{ $authStore.user?.name }} </span>

        <MenuDropdown v-show="userMenu" />
      </div>
      <div v-else>
        <NuxtLink
          to="/login"
          class="text-slate-900 dark:text-white flex items-center gap-1 dark:hover:bg-gray-800 dark:border-gray-700 border-gray-300 border hover:bg-gray-100 font-bold text-sm duration-300 px-4 py-2 rounded tracking-wider"
        >
          <Icon name="solar:login-line-duotone" size="1.25rem" />Login</NuxtLink
        >
      </div>
    </div>
  </header>
</template>
