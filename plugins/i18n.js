import { createI18n } from 'vue-i18n'

import en from '../locales/en.json' 
import fr from '../locales/fr' 

const lang = navigator.language.split("-")[0] || 'en'
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: lang,
    fallbackLocale: "en",
    messages: {
      en, 
      fr, 
    }
  })

  vueApp.use(i18n)
})