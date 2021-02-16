<template>
  <div class="wrapper">
    <header-section />
    <div class="layout-inner">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import HeaderSection from "../components/header-section.vue"
export default {
  components: {
    HeaderSection,
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
