<template>
  <div>
    <Header />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import Header from '@/layouts/Header.vue'
</script>

<style scoped></style>
