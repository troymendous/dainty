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
      <div v-if="isStripeLoaded">
        <div id="error-message">Test Error</div>
        <button @click="checkout" :disabled="isLoadingCheckout" class="checkout-btn">
          <loader v-if="isLoadingCheckout" class="animate-spin h-5 w-10 mr-3" />
          <span v-else>Proceed to checkout</span>
        </button>
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
import loader from "../../components/loader.vue"

export default {
  components: { toggle, loader },
  data() {
    return {
      slug: this.$route.params.slug,
      selectedPlan: null,
      isMonthly: false,
      successUrl: "http://localhost:3000/",
      cancelUrl: "http://localhost:3000/",
      isLoadingCheckout: false,
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
  async fetch() {
    this.selectedPlan = await this.$content("pricing-and-plans")
      .where({ plan: `${this.slug}` })
      .fetch()
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
      this.stripe = Stripe(process.env.stripePublishableKey)

      this.isLoadingCheckout = true

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
          this.isLoadingCheckout = false

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

  &:disabled {
    color: #d3d3d3;
    // opacity: 0.6;
  }
}
</style>
