<template>
  <div class="pre-checkout-wrapper">
    <div v-if="selectedPlan" class="pre-checkout">
      <button @click="goToPricingPage" class="back-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke=" #5b39c9"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-arrow-left"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>

      <div class="pre-checkout-field">
        <span class="heading">Plan</span>
        <span class="text">{{ selectedPlan[0].plan }}</span>
      </div>

      <div class="pre-checkout-field">
        <span class="heading">Billing Cycle</span>
        <label>Yearly</label>
        <toggle @change="toggleBillingCycle" />
        <label>Monthly</label>
        <subscription-price
          :annualPrice="selectedPlan[0].annualPrice"
          :monthlyPrice="selectedPlan[0].monthlyPrice"
          :isMonthly="isMonthly"
        />
      </div>

      <div class="services">
        <p
          v-for="{ type, isOffered, serviceId } in selectedPlan[0].services"
          v-bind:key="serviceId"
        >
          <check-icon v-if="isOffered" />
          <cross-icon v-else />
          <span>{{ type }}</span>
        </p>
      </div>

      <div v-if="isStripeLoaded">
        <div id="error-message"></div>
        <div class="checkout-btn-wrapper">
          <button :disabled="isLoadingCheckout" class="checkout-btn" @click="checkout">
            <div class="checkout-btn-inner">
              <loader v-if="isLoadingCheckout" class="animate-spin h-5 w-10 mr-3" />
              <span>Proceed to checkout</span>
            </div>
          </button>
        </div>
      </div>
    </div>
    <loader v-else />
  </div>
</template>

<script>
import toggle from "../../components/pricing/pre-checkout/toggle.vue"
import loader from "../../components/loader.vue"
import SubscriptionPrice from "../../components/pricing/subscription-price.vue"

export default {
  layout: "stripe-checkout-layout",
  components: { toggle, loader, SubscriptionPrice },
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
  async fetch() {
    this.selectedPlan = await this.$content("pricing-and-plans")
      .where({ plan: `${this.slug}` })
      .fetch()
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
    priceId() {
      if (this.isMonthly) {
        return this.selectedPlan[0].monthlyPriceId
      } else {
        return this.selectedPlan[0].annualPriceId
      }
    },
  },
  watch: {
    $route(to, from) {
      this.isLoadingCheckout = false
    },
  },
  methods: {
    toggleBillingCycle(checked) {
      this.isMonthly = checked
    },
    checkout(event) {
      /*
       * The logic below is only executed when the Stripe script has been fully loaded
       * When this page is mounted Stripe does not exist, when in dev mode eslint picks up that issue and kills the server
       * So we disable the eslint-no-undef rule to prevent constantly restarting the server
       */

      /* eslint-disable-next-line */
      const stripe = Stripe(process.env.stripePublishableKey)

      this.isLoadingCheckout = true

      stripe
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
          // TODO Logic to handle custom errors
          if (result.error) {
            const displayError = document.getElementById("error-message")
            displayError.textContent = result.error.message
          }
        })
    },
    goToPricingPage() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss" scoped>
.pre-checkout {
  margin: 2rem 0 6rem;

  .services {
    margin-bottom: 2.5rem;

    p {
      display: flex;
      align-items: center;
    }
  }
}

.checkout-btn {
  width: 300px;
  height: 60px;
  @apply text-accentPurple;
  border: 2px solid var(--acc-purple-color);
  border-radius: 8px;

  &:hover {
    background: var(--acc-purple-color);
    color: #fff;
  }

  &:disabled {
    opacity: 0.2;
  }

  &-wrapper {
    display: flex;
    justify-content: center;
  }

  &-inner {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      display: block;
    }
  }
}

.back-btn {
  padding: 1rem 0;
  margin-bottom: 2rem;

  &:hover {
    @apply animate-bounce;
  }
}

.pre-checkout-field {
  margin-bottom: 1.5rem;

  > span {
    display: block;
  }

  .heading {
    @apply text-darkColor;
    font-weight: 500;
  }

  .text {
    text-transform: capitalize;
  }

  .pricing {
    position: relative;

    span:nth-child(1) {
      // position: absolute;
      top: 0;
      font-size: 10px;
    }
  }
}
</style>
