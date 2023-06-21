<template>
  <div class="pricing">
    <div v-if="isActive" class="overlay" @click="hideOverlay"></div>
    <PricingCardsV2 ref="cards2" :is-stripe-loaded="isStripeLoaded" />
    <!-- <get-started /> -->
    <pricing-discount />
    <pricing-support />
    <!-- <pricing-table /> -->
  </div>
</template>

<script>
// import PricingCards from "../../components/home/pricing-cards.vue"
// import PricingTable from "../../components/pricing-table-hosting.vue"
import PricingCardsV2 from "../../components/pricing-hosting/pricing-cards-v2.vue"
// import GetStarted from "../../components/pricing-hosting/get-started"
import PricingDiscount from "../../components/pricing-hosting/pricing-discount"
import PricingSupport from "../../components/pricing-hosting/pricing-support"

export default {
  components: {
    PricingSupport,
    PricingDiscount,
    // GetStarted,
    // PricingCards,
    // PricingTable,
    PricingCardsV2,
  },
  data() {
    return {
      isStripeLoaded: false,
    }
  },
  computed: {
    isActive() {
      return this.$store.state.showOverlay
    },
  },
  methods: {
    hideOverlay() {
      const services = this.$refs.cards2.$refs.services
      for (let i = 0; i < services.length; i++) {
        if (services[i].id !== "") {
          services[i].hideOverlay()
        }
      }
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
