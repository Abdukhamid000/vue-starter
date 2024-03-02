<template>
  <section class="mt-36 max-md:mt-10" id="subscription">
    <div class="container">
      <h2 class="header-xl !leading-[58px] text-4xl text-center">
        Выберите <span class="text-main">тариф</span>
      </h2>
      <p
        class="max-w-[631px] w-full mx-auto text-center text-2xl max-md:text-base !leading-[150%]"
      >
        Сколько проектов — столько и вариантов реализации. Выберите то, что
        подходит вашему продукту
      </p>
      <div
        class="flex gap-x-[25px] mt-16 items-center justify-center gap-6 max-lg:flex-wrap"
      >
        <SubscriptionCard
          v-for="(item, i) of subscriptions"
          :popular="(i + 1) % 2 === 0"
          :key="i"
          v-bind="{ ...item }"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SubscriptionCard from '@/components/Cards/SubscriptionCard.vue'

const subscriptions = [
  {
    title: 'Вебинар',
    text: 'Подходит, если вам нужно постоянно продавать одинаковый продукт',
    list: [
      'Платформа для вебинара',
      'Чат и рассылка по клиентам',
      'Автоворонка',
      'Отправка записей и материаловна почту участникам',
    ],
    price: '$300',
  },
  {
    title: 'Курс',
    text: 'Подходит, если у вас есть курс из нескольких уроков с домашними заданиями и разными тарифами',
    list: [
      'Платформа для создания и ведения курса',
      'Платформа для вебинаров',
      'Чат и рассылка по клиентам, подключениемессенджером',
      'Автоворонки и рекламные кампании',
      'Автоворонки и рекламные кампании',
      'Автоворонки и рекламные кампании',
    ],
    price: '$600',
  },
  {
    title: 'Онлайн-школа',
    text: 'Подходит, если вам нужно постоянно продавать одинаковый продукт',
    list: [
      'Платформа для вебинара',
      'Чат и рассылка по клиентам',
      'Автоворонка',
      'Мгновенная прямая связь с поддержкой',
    ],
    price: 'Договорная',
  },
]
</script>

<style scoped></style>
