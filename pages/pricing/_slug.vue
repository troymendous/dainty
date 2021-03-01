<template>
  <div class="pre-checkout">
    <div v-if="selectedPlan">
      <div>
        <span>Plan</span>
        <span>{{ selectedPlan[0].plan }}</span>
      </div>
      <div>
        <span>Billing Cycle</span>
        <span>Yearly</span>
        <toggle @change="toggleBillingCycle" />
        <span>Monthly</span>
      </div>
      <div>
        <span v-if="isMonthly">{{ selectedPlan[0].monthlyPrice }}</span>
        <span v-else>{{ selectedPlan[0].annualPrice }}</span>
      </div>
      <div>
        <button @click="checkout" class="checkout-btn">Proceed to checkout</button>
      </div>
      <!-- 
      <pre>
      {{ selectedPlan[0] }}
    </pre -->
    </div>
    <p v-else>Loading</p>
  </div>
</template>

<script>
import toggle from "../../components/pricing/pre-checkout/toggle.vue"

export default {
  components: { toggle },
  data() {
    return {
      slug: this.$route.params.slug,
      selectedPlan: null,
      isMonthly: false,
      successUrl: "http://localhost:3000/",
      cancelUrl: "http://localhost:3000/",
    }
  },
  async fetch() {
    this.selectedPlan = await this.$content("pricing-and-plans")
      .where({ plan: `${this.slug}` })
      .fetch()
  },
  mounted() {
    this.stripe = Stripe(process.env.stripePublishableKey)
  },
  computed: {
    priceId: function () {
      if (this.isMonthly) {
        return this.selectedPlan[0].monthlyPriceId
      } else {
        return this.selectedPlan[0].annualPriceId
      }
    },
  },
  methods: {
    toggleBillingCycle(checked) {
      this.isMonthly = checked
    },
    checkout: function (event) {
      this.stripe
        .redirectToCheckout({
          lineItems: [
            {
              price: this.priceId,
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
}
</script>

<style lang="scss" scoped>
.pre-checkout {
  margin-top: 6rem;
}

.checkout-btn {
  width: 300px;
  height: 60px;
  border: 1px solid var(--dark-color);

  &:hover {
    color: var(--acc-pink-color);
  }
}
</style>
