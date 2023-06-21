<template>
  <div class="homepage">
    <banner-section />

    <welcome-section />
    <services-section />
    <hr style="margin-left: 8%; margin-right: 8%" />
    <section class="about-body"><home-detail /></section>

    <!-- <services-section />
    <media-section />
    <reviews />
    <call-to-action />
    <portfolio-examples />
    <PricingCardsV2 :is-stripe-loaded="isStripeLoaded" /> -->
  </div>
</template>

<script>
export default {
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
