<template>
  <section class="mt-36 max-md:mt-10">
    <div class="container">
      <h2 class="header-xl text-center">
        Мнения клиентов <span class="text-main">о нас</span>
      </h2>
      <div
        class="flex max-lg:mt-10 mt-[67px] justify-center gap-6 max-lg:flex-wrap"
      >
        <TestamonialCard
          class="max-w-[437px] w-full"
          v-for="(item, i) of testimonials"
          :key="i"
          v-bind="{ ...item }"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TestamonialCard from '../Cards/TestamonialCard.vue'

const testimonials = [
  {
    name: 'Charles Patterson',
    company: 'Google Inc.',
    comment:
      'Платформа проста и удобна в использовании. Отличные возможности, интуитивный интерфейс. Очень доволен!',
  },
  {
    name: 'Vera Duncan',
    company: 'Amazon Inc.',
    comment:
      'Эта платформа - находка для предпринимателей! Интуитивный интерфейс и множество полезных инструментов. Очень доволен результатами.',
  },
  {
    name: 'Bruce Hardy',
    company: 'Google Inc.',
    comment:
      'Платформа проста и удобна в использовании. Отличные возможности, интуитивный интерфейс. Очень доволен!',
  },
]
</script>

<style scoped></style>
