<template>
  <div>
    <banner-section />
    <features-section />
    <call-to-action />
    <testimomials />
    <pricing-cards />
  </div>
</template>

<script>
import BannerSection from "../components/home/banner-section"
import CallToAction from "../components/home/call-to-action.vue"
import FeaturesSection from "../components/home/features-section"
import PricingCards from "../components/home/pricing-cards.vue"
import Testimomials from "../components/testimomials.vue"

export default {
  components: {
    BannerSection,
    FeaturesSection,
    CallToAction,
    PricingCards,
    Testimomials,
  },
}
</script>

<style lang="scss" scoped></style>
