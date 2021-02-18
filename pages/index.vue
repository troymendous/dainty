<template>
  <div>
    <banner-section />
    <features-section />
    <call-to-action />
    <pricing-section />
  </div>
</template>

<script>
import BannerSection from "../components/home/banner-section"
import CallToAction from "../components/home/call-to-action.vue"
import FeaturesSection from "../components/home/features-section"
import PricingSection from "../components/home/pricing-section.vue"

export default {
  components: {
    BannerSection,
    FeaturesSection,
    CallToAction,
    PricingSection,
  },
}
</script>

<style lang="scss" scoped></style>
