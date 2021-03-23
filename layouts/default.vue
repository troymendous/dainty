<template>
  <div>
    <header-section />
    <Nuxt />
    <footer-section />
  </div>
</template>

<script>
import HeaderSection from "../components/header-section.vue"
import FooterSection from "../components/footer-section.vue"
export default {
  components: {
    HeaderSection,
    FooterSection,
  },
  head() {
    return {
      script: [
        {
          hid: "stripe",
          src: "https://js.stripe.com/v3/",
          defer: true,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.wrapper {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

.layout-inner {
  padding-top: 150px;
}
</style>
