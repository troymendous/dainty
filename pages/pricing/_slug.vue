<template>
  <div class="free-trial">
    <h2>Checkout</h2>
    <div class="free-trial_inner">
      <div class="free-trial_content-wrapper">
        <div class="free-trial_content">
          <str-form
            :is-loading="isLoading"
            :show-next-step="showPaymentIntentStep"
            @showStrCheckout="toggleShowPaymentIntentStep"
          />
          <paymentIntent
            v-show="showPaymentIntentStep"
            @closePaymentIntent="closePaymentIntentStep"
          />
        </div>
      </div>

      <str-services
        v-if="slug === 'core'"
        :services="core.services"
        :price="core.price"
        :slug="slug"
      >
        <template #heading> {{ core.name }} </template>
        <template #price> {{ core.price }}</template>
      </str-services>

      <str-services
        v-if="slug === 'plus'"
        :services="plus.services"
        :price="plus.price"
        :slug="slug"
      >
        <template #heading> {{ plus.name }} </template>
        <template #price> {{ plus.price }}</template>
      </str-services>

      <str-services
        v-if="slug === 'enterprise'"
        :services="enterprise.services"
        :price="enterprise.price"
        :slug="slug"
      >
        <template #heading> {{ enterprise.name }} </template>
        <template #price> {{ enterprise.price }}</template>
      </str-services>
    </div>
  </div>
</template>

<script>
import paymentIntent from "../../components/payment-intent/payment-intent.vue"
import StrForm from "../../components/stripe-checkout/str-form"

export default {
  components: {
    paymentIntent,
    StrForm,
  },
  data() {
    return {
      showPaymentIntentStep: false,
      isLoading: false,
      slug: "",
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
      plus: {
        name: "Plus",
        price: "499",
        services: [
          "All in Core",
          "Presentation templates",
          "Powerpoint templates",
          "Unlimited concepts and revisions",
          "All source files",
          "Reselling",
          "Quality Assurance",
          "No contracts - cancel anytime",
        ],
      },
      enterprise: {
        name: "Enterprise",
        price: "999",
        services: [
          "All in Core & Plus",
          "Unlimited concepts and revisions",
          "Web Design Mockups",
          "White-labelling",
          "Agency support",
          "Priority support",
          "Basic Custom Illustrations",
          "Fillable PDFs",
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
  mounted() {
    this.slug = this.$route.params.slug
  },
  methods: {
    closePaymentIntentStep() {
      this.showPaymentIntentStep = false
    },
    toggleShowPaymentIntentStep() {
      this.showPaymentIntentStep = true
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
