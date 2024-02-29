import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/pages/Main.vue'),
  },
] as RouteRecordRaw[]
