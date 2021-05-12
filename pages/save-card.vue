<template>
  <div class="free-trial">
    <h2>Create your account</h2>
    <div class="free-trial_inner">
      <div class="free-trial_content-wrapper">
        <div class="free-trial_content">
          <str-form
            :isLoading="isLoading"
            :showNextStep="showSetupIntentStep"
            v-on:showStrCheckout="toggleShowSetupIntentStep"
          />
          <h3 v-if="showSetupIntentStep">Hello Wordl</h3>
          <future-payments
            v-if="showSetupIntentStep"
            v-on:closeSetupIntent="closeSetupIntentStep"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StrForm from "../components/stripe-checkout/str-form.vue"
import FuturePayments from "../components/stripe-checkout/future-payments.vue"

export default {
  components: {
    StrForm,
    FuturePayments,
  },
  data() {
    return {
      showSetupIntentStep: false,
      isLoading: false,
    }
  },
  methods: {
    closeSetupIntentStep() {
      this.showSetupIntentStep = false
    },
    toggleShowSetupIntentStep() {
      this.showSetupIntentStep = true
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
