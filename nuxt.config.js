const webpack = require('webpack')

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: true,
  mode: 'spa',
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-vozovoz',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-typed-vuex',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  bootstrapVue: {
    icons: true,
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // prefix: '/api/',
    credentials: true,
    baseURL: process.env.API_URL || 'https://api.vozovoz.xyz',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    cache: false,
    extractCSS: false,
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash',
        // '$': 'jquery',
        // ...etc.
      }),
    ],
  },
}
