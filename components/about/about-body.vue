<template>
  <section class="about-body">
    <about-info></about-info>
    <about-values></about-values>
    <about-started></about-started>
    <about-terms></about-terms>
  </section>
</template>

<script>
import AboutInfo from "./about-info"
import AboutValues from "./about-values"
import AboutStarted from "./about-started"
import AboutTerms from "./about-terms"
export default {
  name: "AboutBody",
  components: { AboutTerms, AboutStarted, AboutValues, AboutInfo },
}
</script>

<style lang="scss">
@import "@/assets/scss/pages/about-body.scss";
</style>
