<template>
  <div>
    <banner-section />
    <features-section />
    <call-to-action />
    <testimomials />
    <pricing-cards-v-2 :isStripeLoaded="isStripeLoaded" />
  </div>
</template>

<script>
import BannerSection from "../components/home/banner-section"
import CallToAction from "../components/home/call-to-action.vue"
import FeaturesSection from "../components/home/features-section"
import PricingCardsV2 from "../components/pricing/pricing-cards-v2.vue"
import Testimomials from "../components/testimomials.vue"

export default {
  components: {
    BannerSection,
    FeaturesSection,
    CallToAction,
    Testimomials,
    PricingCardsV2,
  },
  data() {
    return {
      isStripeLoaded: false,
    }
  },
  head() {
    return {
      script: [
        {
          hid: "stripe",
          src: "https://js.stripe.com/v3/",
          defer: true,
          callback: () => {
            this.isStripeLoaded = true
          },
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
