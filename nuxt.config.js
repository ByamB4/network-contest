export default {
  ssr: false,
  target: "static",
  head: {
    titleTemplate: "%s - network-contest",
    title: "network-contest",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/png", href: "/ccs-logo.png" }]
  },
  css: ["~/assets/sass/theme.sass", "~/assets/sass/class.sass"],
  plugins: ["~/plugins/consts"],
  components: true,
  buildModules: ["@nuxtjs/eslint-module", "@nuxtjs/vuetify"],
  modules: ["@nuxtjs/axios", "nuxt-webfontloader"],
  axios: {},
  webfontloader: {
    google: {
      families: ["Press+Start+2P", "Montserrat", "Exo+2", "Play"],
      urls: [
        "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap",
        "https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap",
        "https://fonts.googleapis.com/css2?family=Exo+2:wght@300&display=swap",
        "https://fonts.googleapis.com/css2?family=Play&display=swap"
      ]
    }
  },
  vuetify: {
    customVariables: ["~/assets/scss/variables.scss"],
    theme: {
      themes: {
        light: {
          success: "#00d93d"
        }
      }
    }
  },
  build: {}
}
