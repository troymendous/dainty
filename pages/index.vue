<template>
  <div class="homepage">
    <banner-section />
    <!-- <services-section /> -->
    <!-- <media-section /> -->
    <!-- <reviews /> -->
    <!--    <call-to-action />-->
    <!-- <portfolio-examples /> -->
    <PricingCardsV2 :is-stripe-loaded="isStripeLoaded" />
  </div>
</template>

<script>
import BannerSection from "../components/home/banner-section-hosting"
// import CallToAction from "../components/home/call-to-action.vue"
import PricingCardsV2 from "../components/pricing-hosting/pricing-cards-v2.vue"
// import MediaSection from "../components/home/media-section"
// import PortfolioExamples from "../components/home/portfolio-examples"
// import Reviews from "../components/home/reviews/reviews.vue"

export default {
  components: {
    // PortfolioExamples,
    // MediaSection,
    BannerSection,
    // CallToAction,
    PricingCardsV2,
    // Reviews,
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

<style lang="scss">
.homepage {
  position: relative;
}
.text-btn {
  text-align: center;
  margin: 3rem auto 1rem auto;
  a,
  button {
    color: var(--acc-purple-color);
  }
  @screen sm {
    display: block;
    width: 90%;
    margin: 1rem auto;
    padding-left: 1rem;
  }
}
</style>
