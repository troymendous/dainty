<template>
  <div class="free-trial">
    <h2>15 Day Free Trial</h2>
    <div class="free-trial_inner">
      <div class="free-trial_content-wrapper">
        <div class="free-trial_content">
          <str-form
            :isLoading="isLoading"
            :showNextStep="showSetupIntentStep"
            v-on:showStrCheckout="toggleShowSetupIntentStep"
          />
          <setup-intent v-if="showSetupIntentStep" v-on:closeSetupIntent="closeSetupIntentStep" />
        </div>
      </div>

      <str-services :services="core.services">
        <template v-slot:heading> {{ core.name }} </template>
        <template v-slot:price> {{ core.price }}</template>
      </str-services>
    </div>
  </div>
</template>

<script>
import StrForm from "../components/stripe-checkout/str-form.vue"

export default {
  components: {
    StrForm,
  },
  data() {
    return {
      showSetupIntentStep: false,
      isLoading: false,
      core: {
        name: "Core",
        price: "99",
        services: [
          "Unlimited concepts and revisions",
          "All source files",
          "Print Design",
          "High quality work",
          "Social Media Posts",
          "Advertisements",
          "Logo Design",
          "Business Card Design",
          "Letterhead Design",
          "Stationary",
          "E-Book Cover",
          "Infographic",
          "Flyer",
          "Brochure",
          "Packaging",
          "T-shirt",
          "and more...",
          "No contracts - cancel anytime",
        ],
      },
    }
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
