<template>
  <button :disabled="isLoadingCheckout" @click="checkout(monthlyPriceId)">
    <span v-if="plan === 'core'">15 Days Free</span>
    <span v-else>Select Plan</span>
    <loader v-if="isLoadingCheckout" class="animate-spin h-5 w-10 mr-3" />
  </button>
</template>

<script>
const CORE_PLAN_PRICE_ID = "price_1Ib5FJF5dr8554IRIF0KhudR"
const PLUS_PLAN_PRICE_ID = "price_1Ib5EYF5dr8554IRBnAavHaX"
const ENTERPRISE_PLAN_PRICE_ID = "price_1Ib5BPF5dr8554IR6NMccYTf"

export default {
  props: {
    monthlyPriceId: String,
    plan: String,
  },
  data() {
    return {
      isLoadingCheckout: false,
    }
  },
  methods: {
    checkout(priceId) {
      /*
       * The logic below is only executed when the Stripe script has been fully loaded
       * When this page is mounted Stripe does not exist, when in dev mode eslint picks up that issue and kills the server
       * So we disable the eslint-no-undef rule to prevent constantly restarting the server
       */

      /* eslint-disable-next-line */
      const stripe = Stripe(process.env.stripePublishableKey)

      this.isLoadingCheckout = true

      if (priceId === CORE_PLAN_PRICE_ID) {
        this.$router.push({ path: "/free-trial" })
        return
      }

      if (priceId === PLUS_PLAN_PRICE_ID) {
        this.$router.push("/pricing/plus")
      }

      if (priceId === ENTERPRISE_PLAN_PRICE_ID) {
        this.$router.push("/pricing/enterprise")
      }
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  width: 250px;
  height: 60px;
  border-radius: 8px;
  margin: 1rem 0 0;
  color: var(--acc-purple-color);
  border: 2px solid var(--acc-purple-color);
  font-weight: 500;

  &:hover,
  &:active,
  &:disabled {
    background: var(--acc-pink-color);
    border: 3px solid transparent;
    color: #fff;
  }

  > svg {
    display: inline-block;
  }

  &:disabled {
    opacity: 0.8;
  }

  @screen sm {
    width: 270px;
  }
}
</style>
