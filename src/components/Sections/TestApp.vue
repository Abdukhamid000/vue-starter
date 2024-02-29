<template>
  <section
    class="bg-color w-full mt-36 max-md:mt-10 py-36 max-lg:py-20 max-md:py-10"
  >
    <div class="container justify-between flex items-center max-md:flex-col">
      <h2
        class="text-green-200 !leading-[130%] font-semibold text-[40px] max-md:text-center max-md:text-2xl max-lg:text-3xl max-w-[820px] w-full"
      >
        Вы хотите запросить демо-версию или просто задать вопрос? Напишите нам
      </h2>

      <Button class="!bg-white !text-blue-200 px-8 py-4 max-md:py-3 max-md:mt-5"
        >Протестировать</Button
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'
</script>

<style scoped>
.bg-color {
  background:
    url('/public/svg/m.svg') no-repeat,
    linear-gradient(135deg, rgb(130, 105, 255) 0%, rgb(42, 0, 255) 100%);
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
}
</style>
