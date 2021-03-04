<template>
  <div>
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
}
</script>

<style lang="scss"></style>
