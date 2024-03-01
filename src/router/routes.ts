import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/pages/Main.vue'),
  },
  {
    path: '/student',
    name: 'Student',
    component: () => import('@/pages/Student.vue'),
  },
] as RouteRecordRaw[]
