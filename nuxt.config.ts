// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/global.scss'],
  modules: ['@nuxtjs/google-fonts', '@vueuse/nuxt'],
  googleFonts: {
    families: {
      Inter: [400, 700, 800],
    },
  },
})
