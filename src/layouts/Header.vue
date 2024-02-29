<template>
  <header class="header">
    <div
      class="bg-red-300 container w-full flex items-center justify-between py-4"
    >
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-4">
          <svg
            width="24.000000"
            height="24.000000"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs>
              <clipPath id="clip7_438">
                <rect
                  id="call"
                  width="24.000000"
                  height="24.000000"
                  fill="white"
                  fill-opacity="0"
                />
              </clipPath>
            </defs>
            <g clip-path="url(#clip7_438)">
              <path
                id="Vector"
                d="M3.77759 11.9424L6.33398 9.0061C7.26733 7.93384 7.73401 7.39771 7.80273 6.7395C7.87134 6.0813 7.52527 5.46045 6.83313 4.21899L5.95996 2.65234C5.57324 1.9585 4.82349 1.77637 4.16943 2.30957C2.62183 3.5708 1.68762 5.54761 2.09583 7.57129C2.37183 8.93945 2.82959 10.2893 3.77759 11.9424C5.69653 15.2883 8.70789 18.3013 12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9041C18.4524 22.3123 20.4292 21.3782 21.6906 19.8306C22.2236 19.1765 22.0415 18.4268 21.3477 18.04L19.7811 17.1667C18.5394 16.4746 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0662 16.7327 14.994 17.666L12.0576 20.2224"
                stroke="#141B34"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <span class="text-black-200 text-base !leading-[23px] max-lg:!text-sm"
            >998 90 540 70 50</span
          >
        </div>
        <div class="flex items-center gap-4">
          <svg
            width="24.000000"
            height="24.000000"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs>
              <clipPath id="clip7_422">
                <rect
                  id="mail-01"
                  width="24.000000"
                  height="24.000000"
                  fill="white"
                  fill-opacity="0"
                />
              </clipPath>
            </defs>
            <g clip-path="url(#clip7_422)">
              <path
                id="Vector 7163"
                d="M2 6L8.91302 9.91699C11.4616 11.3611 12.5384 11.3611 15.087 9.91699L22 6"
                stroke="#141B34"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
              />
              <path
                id="Vector"
                d="M9.09882 20.4634C5.95032 20.3843 4.3761 20.3447 3.24493 19.2095C2.11383 18.074 2.08112 16.5413 2.01575 13.4756C1.99475 12.49 1.99475 11.51 2.01575 10.5244C2.08112 7.45874 2.11383 5.92603 3.24493 4.79053C4.3761 3.65527 5.95032 3.61572 9.09882 3.53662C11.0393 3.48779 12.9607 3.48779 14.9012 3.53662C18.0497 3.61572 19.6239 3.65527 20.7551 4.79077C21.8862 5.92603 21.9189 7.45874 21.9843 10.5244C22.0052 11.51 22.0052 12.49 21.9843 13.4756C21.9189 16.5413 21.8862 18.074 20.7551 19.2095C19.6239 20.3447 18.0497 20.3843 14.9012 20.4634C12.9607 20.5122 11.0393 20.5122 9.09882 20.4634Z"
                stroke="#141B34"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
              />
            </g>
          </svg>

          <span class="text-black-200 text-base !leading-[23px] max-md:text-sm"
            >help@mercuryedu.uz</span
          >
        </div>
      </div>
      <button
        type="button"
        class="text-base font-medium !leading-[23px] text-main tracking-normal"
      >
        Студентам
      </button>
    </div>
    <div class="bg-main opacity-40 w-full h-[1px]"></div>

    <div class="container py-4 flex justify-between items-center">
      <RouterLink to="#">
        <img src="/public/mercury.webp" class="w-[189px] h-[56px]" alt="logo" />
      </RouterLink>

      <ul class="flex gap-12 items-center max-lg:hidden">
        <li v-for="item of 4" :key="item">
          <RouterLink
            to="#"
            class="text-blue-200 leading-[23px] tracking-normal text-base hover:text-main transition-300"
          >
            Тарифы
          </RouterLink>
        </li>
        <li>
          <Button class="py-4 px-8">Зарегистрироваться</Button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'
</script>

<style scoped>
.header {
  box-shadow: 0px 2px 10px 0px rgba(46, 5, 255, 0.06);
  background: rgb(253, 253, 255);
}
</style>
