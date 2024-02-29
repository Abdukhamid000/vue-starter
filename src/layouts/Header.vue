<template>
  <header class="header">
    <div
      class="bg-red-300 container w-full flex items-center justify-between py-4"
    >
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-3">
          <span>998 90 540 70 50</span>
        </div>
        <div class="flex items-center gap-3">
          <span>help@mercuryedu.uz</span>
        </div>
      </div>
      <button
        type="button"
        class="text-base font-medium leading-[23px] text-main tracking-normal"
      >
        Студентам
      </button>
    </div>
    <div class="bg-main opacity-40 w-full h-[1px]"></div>

    <div class="container py-4 flex justify-between items-center">
      <RouterLink to="#">
        <img src="/public/mercury.webp" class="w-[189px] h-[56px]" alt="logo" />
      </RouterLink>

      <ul class="flex gap-12 items-center max-lg:hidden">
        <li v-for="item of 4" :key="item">
          <RouterLink
            to="#"
            class="text-blue-200 leading-[23px] tracking-normal text-base hover:text-main transition-300"
          >
            Тарифы
          </RouterLink>
        </li>
        <li>
          <Button class="py-4 px-8">Зарегистрироваться</Button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'
</script>

<style scoped>
.header {
  box-shadow: 0px 2px 10px 0px rgba(46, 5, 255, 0.06);
  background: rgb(253, 253, 255);
}
</style>
