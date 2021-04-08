<template>
  <div class="homepage">
    <banner-section />
    <services-section />
    <media-section />
    <reviews />
    <!--    <call-to-action />-->
    <portfolio-examples />
    <pricing-cards-v-2 :is-stripe-loaded="isStripeLoaded" />
  </div>
</template>

<script>
import BannerSection from "../components/home/banner-section"
// import CallToAction from "../components/home/call-to-action.vue"
import PricingCardsV2 from "../components/pricing/pricing-cards-v2.vue"
import MediaSection from "../components/home/media-section"
import PortfolioExamples from "../components/home/portfolio-examples"
import Reviews from "../components/home/reviews/reviews.vue"

export default {
  components: {
    PortfolioExamples,
    MediaSection,
    BannerSection,
    // CallToAction,
    PricingCardsV2,
    Reviews,
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
        {
          type: "text/javascript",
          innerHTML: `
          adroll_adv_id = "HBQATWGWVRC3DMTTHQHWQJ";
          adroll_pix_id = "TCWTBAQL4RFZPPREAEDTJP";
          adroll_version = "2.0";
          (function(w, d, e, o, a) {
              w.__adroll_loaded = true;
              w.adroll = w.adroll || [];
              w.adroll.f = [ 'setProperties', 'identify', 'track' ];
              var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id
                      + "/roundtrip.js";
              for (a = 0; a < w.adroll.f.length; a++) {
                  w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) {
                      return function() {
                          w.adroll.push([ n, arguments ])
                      }
                  })(w.adroll.f[a])
              }
              e = d.createElement('script');
              o = d.getElementsByTagName('script')[0];
              e.async = 1;
              e.src = roundtripUrl;
              o.parentNode.insertBefore(e, o);
          })(window, document);
          adroll.track("pageView");`,
        },
      ],
      __dangerouslyDisableSanitizers: ["script"],
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
