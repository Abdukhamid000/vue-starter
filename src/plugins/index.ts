import { App } from 'vue'

import { pinia } from '@/plugins/pinia.ts'
import { i18n } from '@/plugins/vue-18n.ts'
import router from '@/router'

export function registerPlugins(app: App): void {
  app.use(router).use(pinia).use(i18n)
}
