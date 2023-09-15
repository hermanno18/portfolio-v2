// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      title:'Hermann FOKOU',
      viewport: 'width=device-width, initial-scale=1'
    }
  },

  //modules
  modules: [
    '@nuxtjs/device',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxt/content'
  ],
  // content: {
  //   // https://content.nuxtjs.org/api/configuration
  // },

  // ssr: false,
    //font famili
  googleFonts: {
    families: {
      'Reem+Kufi': true
    }
  },

  tailwindcss: {
    exposeConfig: true,
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeLevel: 2,
    injectPosition: 'first',
    viewer: true,
  },

  // ssr: false, // pour annuler le SSR
  colorMode: {
    classSuffix: ''
  },

  devtools: {
    enabled: true
  },
  
})