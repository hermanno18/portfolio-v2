import { createI18n } from 'vue-i18n'

import en from '../locales/en.json' 
import fr from '../locales/fr' 

export default defineNuxtPlugin(({ vueApp }) => {

  const lang = process.client ? navigator.language.split("-")[0] : 'en'
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