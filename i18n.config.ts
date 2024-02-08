import en from '@/locales/en'
import fr from '@/locales/fr'

// const lang = process.client ? navigator.language.split("-")[0] : 'fr'

export default defineI18nConfig(() => ({
    legacy: false,
    globalInjection: true,
    messages: {
      en, 
      fr, 
    },
}))