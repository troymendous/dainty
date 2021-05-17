<template>
  <div class="free-trial">
    <h2>Checkout</h2>
    <div class="free-trial_inner">
      <div class="free-trial_content-wrapper">
        <div class="free-trial_content">
          <str-form
            :isLoading="isLoading"
            :showNextStep="showFuturePaymentsStep"
            v-on:showStrCheckout="toggleShowFuturePaymentsStep"
          />
          <!-- <future-payments
            v-show="showFuturePaymentsStep"
            v-on:closeSetupIntent="closeFuturePaymentsStep"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import futurePayments from "../components/stripe-checkout/future-payments"
import StrForm from "../components/stripe-checkout/str-form"

export default {
  components: {
    // futurePayments,
    StrForm,
  },
  data() {
    return {
      showFuturePaymentsStep: false,
      isLoading: false,
      slug: "",
    }
  },
  mounted() {
    this.slug = this.$route.params.slug
  },
  computed: {
    email: {
      get() {
        return this.$store.state.email
      },
      set(value) {
        this.$store.commit("updateEmail", value)
      },
    },
    fullname: {
      get() {
        return this.$store.state.fullname
      },
      set(value) {
        this.$store.commit("updateFullname", value)
      },
    },
  },
  methods: {
    closeFuturePaymentsStep() {
      this.showFuturePaymentsStep = false
    },
    toggleShowFuturePaymentsStep() {
      this.showFuturePaymentsStep = true
    },
  },
}
</script>

<style lang="scss" scoped>
.free-trial {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding-top: 9rem;

  h2 {
    text-align: center;
  }
}

.free-trial_inner {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;

  @screen md {
    grid-template-columns: repeat(1, 1fr);
  }
}

.free-trial_content-wrapper {
  border-top: 1px solid #d5d5d5;
  padding: 30px 60px 60px;

  @screen sm {
    padding: 20px 30px;
  }
}
</style>
