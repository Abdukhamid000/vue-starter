<template>
  <div
    class="bg-green-300 rounded-3xl px-8 pt-12 pb-16 max-md:pb-10 max-md:px-4"
    :class="{ 'border-[1.5px] border-main': popular }"
  >
    <div class="max-w-[373px] w-full flex flex-col items-center">
      <h5 class="text-2xl font-medium !leading-[35px] text-center">Вебинар</h5>
      <p class="mt-4 text-green-100 text-base leading-[150%] text-center">
        Подходит, если вам нужно постоянно продавать одинаковый продукт
      </p>

      <div class="flex flex-col items-center mt-12 max-md:mt-5 gap-[26px]">
        <p class="text-black font-semibold text-[32px] !leading-[150%]">
          <span class="!font-normal"> от </span>
          $300
        </p>

        <ul class="flex flex-col gap-6">
          <li
            v-for="n of 4"
            :key="n"
            class="text-black text-center text-base !leading-[23px]"
          >
            Чат и рассылка по клиентам, подключение мессенджером
          </li>
        </ul>
      </div>

      <Button class="px-8 py-4 max-w-[240px] w-full max-md:mt-10 mt-[112px]"
        >Заказать</Button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../Button.vue'

defineProps<{
  popular?: boolean
}>()
</script>

<style scoped>
.bg-color {
  border: 1.5px solid rgb(46, 5, 255);
  border-radius: 24px;
  background: rgb(249, 248, 255);
}
</style>
