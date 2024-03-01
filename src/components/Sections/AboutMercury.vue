<template>
  <section class="mt-36 max-md:mt-10" id="about">
    <h2 class="header-xl text-center">
      <span class="text-main"> Mercury </span> — это ...
    </h2>
    <Swiper
      class="mt-16"
      :space-between="24"
      :pagination="{ clickable: true }"
      :slides-per-view="4"
      :breakpoints="breakpoints"
      :initial-slide="1"
      centered-slides
    >
      <SwiperSlide class="max-lg:mt-5 min-w-[437px]" v-for="n of 4" :key="n">
        <AboutCard />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
// Import Swiper styles
import 'swiper/css'

import { Swiper, SwiperSlide } from 'swiper/vue'

import AboutCard from '@/components/Cards/AboutCard.vue'

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 15,
  },
  520: {
    slidesPerView: 2,
    spaceBetween: 5,
  },
  720: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  1280: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
}
</script>
