<template>
  <section class="max-xl:mt-4 mt-16">
    <div
      class="container flex justify-between items-center max-md:flex-col-reverse"
    >
      <div
        class="max-md:flex max-md:flex-col items-center max-lg:max-w-[400px] max-xl:max-w-[500px] max-w-[668px] w-full"
      >
        <h2
          class="text-[56px] font-semibold max-md:text-3xl max-md:text-center max-md:mt-2 !leading-[120%] text-left tracking-normal max-lg:text-3xl max-xl:text-[40px]"
        >
          Запустите собственную
          <span class="text-main">онлайн-школу</span> за 1 день
        </h2>
        <p
          class="mt-8 text-base max-md:text-center max-lg:text-sm max-lg:mt-2 max-xl:mt-4 !leading-[150%] text-left text-green-100"
        >
          Создавайте курсы любой сложности, собирайте базы студентов, принимайте
          оплаты и управляйте всеми процессами
        </p>
        <Button
          class="py-4 px-8 mt-16 w-[240px] max-lg:w-[150px] max-lg:py-3 max-lg:mt-5 max-xl:mt-10"
        >
          Запустить
        </Button>
      </div>
      <div>
        <img
          class="h-[611px] max-xl:h-[450px] max-lg:h-[300px]"
          src="/public/hero2.webp"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'
</script>
