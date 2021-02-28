<template>
  <div>
    <pricing-cards />
    <button @click="checkout">Buy Now!</button>
    <testimomials />
    <pricing-table />
  </div>
</template>

<script>
import PricingCards from "../../components/home/pricing-cards.vue"
import PricingTable from "../../components/pricing-table.vue"
import Testimomials from "../../components/testimomials.vue"

export default {
  components: {
    PricingCards,
    PricingTable,
    Testimomials,
  },
  data() {
    return {
      sku: "price_1IPLXICD5ZUxyIJEBBqGaw5G",
      successUrl: "http://localhost:3000/",
      cancelUrl: "http://localhost:3000/",
    }
  },
  methods: {
    checkout: function (event) {
      this.stripe
        .redirectToCheckout({
          lineItems: [
            {
              price: this.sku,
              quantity: 1,
            },
          ],
          mode: "subscription",
          successUrl: this.successUrl,
          cancelUrl: this.cancelUrl,
        })
        .then(function (result) {
          if (result.error) {
            const displayError = document.getElementById("error-message")
            displayError.textContent = result.error.message
          }
        })
    },
  },
  mounted() {
    const STRIPE_PK = process.env.STRIPE_PK
    this.stripe = Stripe(STRIPE_PK)
  },
}
</script>

<style lang="scss"></style>
