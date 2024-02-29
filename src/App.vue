<template>
  <div>
    <Header />
    <RouterView class="pb-[145px] max-md:pb-10" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import Footer from '@/layouts/Footer.vue'
import Header from '@/layouts/Header.vue'
</script>

<style scoped></style>
