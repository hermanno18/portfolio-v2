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
  
  // site configs
  site: {
    url: 'https://hermann-fokou-v2.vercel.app',
    name: 'Hermann FOKOU - Portfolio',
    description: 'Hermann FOKOU (Hermanno18) : découvrez qui je suis, ce que je fais, et le monde merveilleux du code.',
    defaultLocale: 'fr', // not needed if you have @nuxtjs/i18n installed
  },

  //modules
  modules: [
    '@nuxtjs/device',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    // '@nuxt/content' // ca ne marche pas:  [worker init] Only URLs with a scheme in: file, data are supported by the default ESM loader. On Windows, absolute paths must be valid file:// URLs. Received protocol 'c:'
    'nuxt-icon',
    '@nuxtjs/seo',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'en',
    strategy:'prefix_except_default',
    customRoutes: 'config',
    pages: {
      about: {
        fr: 'a-propos'
      }
    }
  },

  plugins: [
    {
      src: '@/plugins/aos',
      ssr: false,
      mode: 'client',
    },
  ],
  // content: {
  //   // https://content.nuxtjs.org/api/configuration
  // },

  // ssr: false,
    //font famili
  googleFonts: {
    families: {
      'Reem+Kufi': true,
      'Ubuntu+Mono': true,
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
  
  runtimeConfig: {
    apiBaseUrl: ""
  },

  nitro: {
    storage: {
      db: {
        driver: 'fs',
        base: './data/db'
      }
    }
  }
})