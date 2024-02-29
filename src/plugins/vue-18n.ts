import { createI18n } from 'vue-i18n'

import ru from '@/locales/ru.json'

const i18n = createI18n({
  allowComposition: true,
  locale: 'ru',
  messages: {
    ru,
  },
})

export { i18n }
