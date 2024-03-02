<template>
  <section class="mt-36 max-md:mt-10">
    <h2 class="header-xl text-center">
      Как начать обучать <span class="text-main">клиентов</span> уже завтра?
    </h2>
    <div class="container relative max-md:mt-0 mt-16 w-full max-w-[1000px]">
      <div class="absolute left-1/2">
        <div class="absolute -left-1.5 flex flex-col gap-[163px]">
          <svg
            class="max-md:hidden"
            v-for="n of 7"
            :key="n"
            width="16.000000"
            height="16.000000"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <circle
              id="Ellipse 1"
              cx="8.000000"
              cy="8.000000"
              r="8.000000"
              fill="#D9D9D9"
              fill-opacity="1.000000"
            />
          </svg>
        </div>

        <svg
          width="1.000061"
          height="1240.000000"
          viewBox="0 0 1.00006 1440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <line
            id="Line 1"
            x1="0.500061"
            y1="0.000000"
            x2="0.500000"
            y2="1440.000000"
            stroke="#D9D9D9"
            stroke-opacity="1.000000"
            stroke-width="1.000000"
            stroke-dasharray="10.000000,10.000000"
          />
        </svg>
      </div>

      <div class="flex flex-col">
        <div
          class="max-w-[650px] relative w-full mt-12 flex items-center justify-between max-md:justify-center"
          v-for="n of 8"
          :key="n"
          :class="{ 'self-end max-md:self-start': n % 2 === 0 }"
        >
          <div :class="{ 'ml-auto': n % 2 === 0 }">
            <h2
              class="text-3xl text-[#575757] max-md:text-center max-md:text-xl opacity-30 !leading-[46px] font-medium"
              :class="{ '!text-black !opacity-100': n === 1 }"
            >
              Вы связываетесь с нами
            </h2>
            <p
              class="text-[#575757] opacity-30 text-base max-md:text-center max-xl:max-w-[320px] !leading-[150%] mt-2 max-w-[390px] w-full"
              :class="{ '!text-green-100 !opacity-100': n === 1 }"
            >
              Расскажите о вашем продукте, предоставьте логотипы, баннеры,
              тексты и то, как вы видите свой будущий сайт
            </p>
          </div>

          <div
            class="absolute max-md:hidden"
            :class="{ 'left-[85%]': n % 2 !== 0 }"
          >
            <svg
              width="80.000000"
              height="104.000000"
              viewBox="0 0 80 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <linearGradient
                  id="paint_linear_10_52_0"
                  x1="40.000008"
                  y1="0.000000"
                  x2="40.000008"
                  y2="104.000000"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E0E0E0" />
                  <stop
                    offset="1.000000"
                    stop-color="#E0E0E0"
                    stop-opacity="0.000000"
                  />
                </linearGradient>
              </defs>
              <rect
                id="999"
                width="80.000000"
                height="104.000000"
                fill="#FFFFFF"
                fill-opacity="0"
              />
              <path
                id="01"
                d="M42.4512 43.8438C42.4512 61 35.3672 70.8613 23.2734 70.8613C11.1445 70.8438 4.06055 60.9824 4.06055 43.8438C4.0957 26.793 11.25 16.9141 23.2734 16.9141C35.2617 16.9141 42.4512 26.8105 42.4512 43.8438ZM63.7175 17.6348L71.4167 17.6348L71.4167 70L63.489 70L63.489 25.5625L63.1726 25.5625L50.657 33.7363L50.657 26.1777L63.7175 17.6348ZM11.918 43.8438C11.918 56.9395 16.1895 64.041 23.2734 64.041C30.3223 64.041 34.5938 56.9395 34.5938 43.8438C34.5938 30.8008 30.3047 23.6113 23.2734 23.6113C16.207 23.6113 11.9355 30.8008 11.918 43.8438Z"
                fill="url(#paint_linear_10_52_0)"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
