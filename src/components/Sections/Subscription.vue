<template>
  <section class="mt-36 max-md:mt-10">
    <div class="container">
      <h2 class="header-xl !leading-[58px] text-4xl text-center">
        Выберите <span class="text-main">тариф</span>
      </h2>
      <p
        class="max-w-[631px] w-full mx-auto text-center text-2xl max-md:text-base !leading-[150%]"
      >
        Сколько проектов — столько и вариантов <br />
        реализации. Выберите то, что подходит вашему <br />
        продукту
      </p>
      <div
        class="flex gap-x-[25px] mt-6 items-center justify-center gap-6 max-lg:flex-wrap"
      >
        <SubscriptionCard />
        <SubscriptionCard popular />
        <SubscriptionCard />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SubscriptionCard from '@/components/Cards/SubscriptionCard.vue'
</script>

<style scoped></style>
