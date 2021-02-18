<template>
  <div>
    <banner-section />
    <features-section />
    <call-to-action />
  </div>
</template>

<script>
import BannerSection from "../components/home/banner-section"
import CallToAction from "../components/home/call-to-action.vue"
import FeaturesSection from "../components/home/features-section"

export default {
  components: {
    BannerSection,
    FeaturesSection,
    CallToAction,
  },
}
</script>

<style lang="scss" scoped></style>
