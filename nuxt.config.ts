// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    assets:'/<rootDir>/assets'
  },
  css:['~/assets/styles/main.scss'],
  modules: [
    "@nuxt/ui", 
    "@hypernym/nuxt-gsap"
  ],
  gsap: {
    composable: true,
    provide: false,
    extraPlugins: {
      scrollTrigger: true,
    },
  }
})