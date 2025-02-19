export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      endpoint: process.env.API_ENDPOINT
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    "shadcn-nuxt", 
    "@nuxtjs/tailwindcss", 
    "nuxt-lucide-icons",
    "@nuxtjs/google-fonts"
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700]
    },
    display: 'swap'
  }
})