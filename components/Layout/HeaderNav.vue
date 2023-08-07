<script setup lang="ts"></script>

<template>
  <nav>
    <ul class="flex gap-6">
      <li class="tracking-wider">
        <NuxtLink to="/" class="tracking-wider hover:underline dark:text-white">Home</NuxtLink>
      </li>
      <li class="tracking-wider">
        <NuxtLink to="/modos-do-quiz" class="tracking-wider hover:underline dark:text-white"
          >Quiz</NuxtLink
        >
      </li>
      <li>
        <NuxtLink class="tracking-wider hover:underline dark:text-white" to="/leaderboard"
          >Leaderboard</NuxtLink
        >
      </li>
      <li class="tracking-wider">
        <NuxtLink class="tracking-wider hover:underline dark:text-white" to="/sobre"
          >Sobre</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>
