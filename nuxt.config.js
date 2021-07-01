const dynamicRoutes = async () => {
  const pricingSlugRoutes = ["core", "plus", "enterprise"]

  return new Promise((resolve) => {
    resolve(pricingSlugRoutes.map((slug) => `pricing/${slug}`))
  })
}

const development = process.env.NODE_ENV !== "production"

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "dainty",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/svg+xml", href: "/icons/favicon.svg" }],
    script: [
      {
        type: "text/javascript",
        innerHTML: `
          adroll_adv_id = "HBQATWGWVRC3DMTTHQHWQJ";
          adroll_pix_id = "TCWTBAQL4RFZPPREAEDTJP";
          adroll_version = "2.0";
          (function(w, d, e, o, a) {
              w.__adroll_loaded = true;
              w.adroll = w.adroll || [];
              w.adroll.f = [ 'setProperties', 'identify', 'track' ];
              var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id
                      + "/roundtrip.js";
              for (a = 0; a < w.adroll.f.length; a++) {
                  w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) {
                      return function() {
                          w.adroll.push([ n, arguments ])
                      }
                  })(w.adroll.f[a])
              }
              e = d.createElement('script');
              o = d.getElementsByTagName('script')[0];
              e.async = 1;
              e.src = roundtripUrl;
              o.parentNode.insertBefore(e, o);
          })(window, document);
          adroll.track("pageView");`,
      },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-Z56903WZJ3",
        async: true,
        innerHTML: `gtag('config', 'AW-398726489');`,
      },
      {
        innerHTML: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-Z56903WZJ3');
                    gtag('config', 'AW-398726489');`,
      },
    ],
    __dangerouslyDisableSanitizers: ["script"],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/scss/styles.scss",
    "~/assets/scss/themes.scss",
    "~/assets/scss/fonts.scss",
    "swiper/css/swiper.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-awesome-swiper.js", mode: "client" },
    { src: "~/plugins/vee-validate.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/dotenv",
    "@nuxtjs/date-fns",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-intercom"],
  intercom: {
    appId: "hglv9vbw",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Router Middleware
  router: {
    middleware: ["menu", "pricingOverlay"],

    async scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }

      // eslint-disable-next-line require-await
      const findEl = async (hash, x = 0) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve) => {
            if (x > 50) {
              return resolve(document.querySelector("#app"))
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1))
            }, 100)
          })
        )
      }

      if (to.hash) {
        const el = await findEl(to.hash)
        if ("scrollBehavior" in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: "smooth" })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    },
  },

  // Register Pricing slug routes in the nuxt generate command
  generate: {
    routes: dynamicRoutes,
  },

  env: {
    baseUrl: development ? "http://localhost:3000" : process.env.BASE_URL,
    stripePublishableKey: process.env.STRIPE_PK,
    emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
    emailjsUserId: process.env.EMAILJS_USER_ID,
  },
}
