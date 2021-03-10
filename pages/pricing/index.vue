<template>
  <div class="pricing">
    <div v-if="isActive" class="overlay"></div>
    <PricingCardsV2 :isStripeLoaded="isStripeLoaded" />
    <testimomials />
    <pricing-table />
  </div>
</template>

<script>
// import PricingCards from "../../components/home/pricing-cards.vue"
import PricingTable from "../../components/pricing-table.vue"
import PricingCardsV2 from "../../components/pricing/pricing-cards-v2.vue"
import Testimomials from "../../components/testimomials.vue"

export default {
  components: {
    // PricingCards,
    PricingTable,
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
  computed: {
    isActive() {
      return this.$store.state.showOverlay
    },
  },
}
</script>

<style lang="scss" scoped>
.pricing {
  position: relative;
  width: 100%;
}

.overlay {
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 35;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}
</style>
