import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/pages/Main.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue'),
  },
] as RouteRecordRaw[]
