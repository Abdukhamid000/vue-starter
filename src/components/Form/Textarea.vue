<template>
  <div class="relative">
    <textarea
      type="text"
      id="floating_outlined"
      class="block px-4 pb-2.5 resize-none !h-[200px] pt-4 w-full border-style text-sm text-black bg-transparent appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      :placeholder="placeholder"
    />
    <label
      for="floating_outlined"
      class="absolute text-sm text-black font-medium duration-300 transform -translate-y-4 !leading-5 top-2 z-10 origin-[0] bg-white translate-x-4"
      >{{ label }}</label
    >
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  placeholder: string
}>()
</script>

<style scoped>
.border-style {
  border: 1px solid rgb(174, 174, 174);
  border-radius: 14px;
}
</style>
