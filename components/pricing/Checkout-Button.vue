<template>
  <button :disabled="isLoadingCheckout" @click="checkout(monthlyPriceId)">
    Select Plan
    <loader v-if="isLoadingCheckout" class="animate-spin h-5 w-10 mr-3" />
  </button>
</template>

<script>
export default {
  props: {
    monthlyPriceId: Number,
  },
  data() {
    return {
      isLoadingCheckout: false,
      successUrl: `${process.env.baseUrl}/subscription/success`,
      cancelUrl: `${process.env.baseUrl}/subscription/cancel`,
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

      stripe
        .redirectToCheckout({
          lineItems: [
            {
              price: priceId,
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
  },
}
</script>

<style lang="scss" scoped>
button {
  width: 300px;
  height: 60px;
  border-radius: 8px;
  margin: 1rem 0 0;

  > svg {
    display: inline-block;
  }

  &:disabled {
    opacity: 0.2;
  }

  @screen sm {
    width: 270px;
  }
}
</style>
