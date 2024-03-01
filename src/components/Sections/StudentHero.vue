<template>
  <section class="mt-16">
    <div
      class="container bg-style max-sm:rounded-none rounded-[40px] w-full flex items-center justify-between max-md:flex-col-reverse"
    >
      <div class="pl-[72px] max-md:pl-0 max-md:pb-10">
        <h1
          class="text-[56px] text-white font-semibold max-md:text-3xl max-md:text-center max-md:mt-2 !leading-[120%] text-left tracking-normal max-lg:text-3xl max-xl:text-[40px]"
        >
          Не огорчяйся, новая платформа для обучения
        </h1>
        <p
          class="mt-8 text-base max-md:text-center max-lg:text-sm max-lg:mt-2 max-xl:mt-4 !leading-[150%] text-left text-white"
        >
          Популярные онлайн и оффлайн курсы теперь у тебя под рукой, только
          выберисвой любимый курс и наслаждайся!
        </p>

        <Button
          class="py-4 px-8 max-lg:py-3 max-md:mx-auto block max-lg:mt-5 max-xl:mt-10 mt-16 !bg-black-200"
          >Присоединиться</Button
        >
      </div>
      <img
        class="h-[664px] -mt-16 max-xl:h-[450px] max-lg:h-[400px]"
        src="/studentHero.webp"
        alt="hero"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '../Button.vue'
</script>

<style scoped>
.bg-style {
  background: linear-gradient(
    135deg,
    rgb(135, 112, 255) 0%,
    rgb(46, 5, 255) 100%
  );
}
</style>
