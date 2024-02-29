<template>
  <section class="mt-[137px] max-md:mt-10">
    <div class="container">
      <h2 class="header-xl !leading-[58px] text-center">
        Остались <span class="text-main">вопросы?</span>
      </h2>
      <div
        class="grid grid-cols-2 max-sm:grid-cols-1 gap-6 max-md:mt-5 mt-[67px]"
      >
        <div
          id="accordion-collapse"
          class="flex flex-col gap-6"
          data-accordion="collapse"
        >
          <div v-for="n of 4" :key="n">
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                class="flex items-center justify-between w-full py-4 px-6 bg-green-400 rounded-[14px] text-base !leading-[23px]"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
              >
                <span>What is Flowbite?</span>
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
                    <clipPath id="clip2_202">
                      <rect
                        id="plus-sign"
                        width="24.000000"
                        height="24.000000"
                        fill="white"
                        fill-opacity="0"
                      />
                    </clipPath>
                  </defs>
                  <g clip-path="url(#clip2_202)">
                    <path
                      id="Vector"
                      d="M12 4L12 20M20 12L4 12"
                      stroke="#575757"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div
                class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
              >
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to
                  <a
                    href="/docs/getting-started/introduction/"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                    >get started</a
                  >
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="max-sm:hidden"
          id="accordion-collapse"
          data-accordion="collapse"
        >
          <div
            id="accordion-collapse"
            class="flex flex-col gap-6"
            data-accordion="collapse"
          >
            <div v-for="n of 4" :key="n">
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  class="flex items-center justify-between w-full py-4 px-6 bg-green-400 rounded-[14px] text-base !leading-[23px]"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span>What is Flowbite?</span>
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
                      <clipPath id="clip2_202">
                        <rect
                          id="plus-sign"
                          width="24.000000"
                          height="24.000000"
                          fill="white"
                          fill-opacity="0"
                        />
                      </clipPath>
                    </defs>
                    <g clip-path="url(#clip2_202)">
                      <path
                        id="Vector"
                        d="M12 4L12 20M20 12L4 12"
                        stroke="#575757"
                        stroke-opacity="1.000000"
                        stroke-width="1.500000"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div
                  class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                >
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                  <p class="text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to
                    <a
                      href="/docs/getting-started/introduction/"
                      class="text-blue-600 dark:text-blue-500 hover:underline"
                      >get started</a
                    >
                    and start developing websites even faster with components on
                    top of Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
