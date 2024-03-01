<template>
  <section class="mt-36 max-md:mt-10">
    <div class="container">
      <h2 class="header-xl text-center !leading-[130%]">
        Наши популярные <span class="text-main">курсы</span>
      </h2>

      <div class="text-center mt-16">
        <div
          class="rounded-[100px] max-lg:rounded-2xl border border-main inline-block p-1"
        >
          <ul class="flex items-center justify-center max-lg:flex-wrap">
            <li
              @click="active = i"
              v-for="(item, i) of tabs"
              :key="item"
              class="py-4 px-[26px] rounded-[100px] max-lg:w-full max-lg:rounded-2xl transition-300 text-main !leading-5 font-semibold text-sm cursor-pointer"
              :class="{ 'bg-main text-white': active === i }"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <div
        class="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 items-center gap-6 mt-10"
      >
        <StudentCourseCardVue v-for="n of 3" :key="n" />
      </div>
      <Button
        class="max-w-[240px] w-full max-md:mt-10 max-md:py-3 mt-16 py-4 px-8 mx-auto block"
        >Все курсы</Button
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Button from '../Button.vue'
import StudentCourseCardVue from '../Cards/StudentCourseCard.vue'

const tabs = [
  'Все',
  'Трейдинг',
  'Дизайн',
  'Программирование',
  'Кулинария',
  'Языки',
  'Безопастность',
]

const active = ref(0)
</script>

<style scoped></style>
