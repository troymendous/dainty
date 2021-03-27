<template>
  <div class="free-trial">
    <h2>Checkout</h2>
    <div class="free-trial_inner">
      <div class="free-trial_content-wrapper">
        <div class="free-trial_content">
          <form
            @submit.prevent="handleSubmit"
            v-if="!showPaymentIntentStep"
            class="setup-intent-form"
          >
            <h4>Heading 1</h4>
            <input type="text" placeholder="Full name*" required v-model="fullname" />
            <input type="email" placeholder="Work Email*" required v-model="email" />
            <str-button :isLoading="isLoading" :disabled="isLoading"> Proceed </str-button>
            <p class="policy-agreement">
              By clicking this button, you agree to our Terms, Privacy Policy and Security Policy.
            </p>
          </form>
          <paymentIntent v-else v-on:closePaymentIntent="closePaymentIntentStep" />
        </div>
      </div>

      <str-services :services="plus.services" :slug="slug" v-if="slug === 'plus'">
        <template v-slot:heading> {{ plus.name }} </template>
        <template v-slot:price> {{ plus.price }}</template>
      </str-services>

      <str-services :services="enterprise.services" :slug="slug" v-if="slug === 'enterprise'">
        <template v-slot:heading> {{ enterprise.name }} </template>
        <template v-slot:price> {{ enterprise.price }}</template>
      </str-services>
    </div>
  </div>
</template>

<script>
import paymentIntent from "../../components/payment-intent/payment-intent.vue"

export default {
  components: {
    paymentIntent,
  },
  data() {
    return {
      showPaymentIntentStep: false,
      isLoading: false,
      slug: "",
      plus: {
        name: "Plus",
        price: "249",
        services: [
          "Unlimited concepts and revisions",
          "All source files",
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
      enterprise: {
        name: "Enterprise",
        price: "599",
        services: [
          "Unlimited concepts and revisions",
          "All source files",
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
    closePaymentIntentStep() {
      this.showPaymentIntentStep = false
    },
    handleSubmit() {
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

  @screen sm {
    grid-template-columns: repeat(1fr);
  }
}

.free-trial_content-wrapper {
  border-top: 1px solid #d5d5d5;
  padding: 30px 60px 60px;
}

.setup-intent-form {
  h1 {
    font-weight: 500;
    margin-bottom: 8px;
    @apply text-darkColor;
    font-size: 23px;
  }

  input {
    display: block;
    width: 100%;
    background: transparent;
    // border: 1px solid rgb(165, 178, 189);
    height: 50px;
    padding: 0 1rem;
    margin: 1rem 0;
    font-size: 14px;
  }

  input[type="email"],
  input[type="text"] {
    border: 1px solid rgb(165, 178, 189);
    border-radius: 3px;
  }

  button[type="submit"] {
    border: 2px solid var(--acc-purple-color);
    border-radius: 8px;
    padding: 0.75rem;
    font-weight: 500;
    @apply text-accentPurple;
    margin-top: 1rem;
    width: 220px;

    svg {
      display: inline-block;
    }

    &:hover,
    &:active,
    &:disabled {
      background: var(--acc-pink-color);
      border: 2px solid transparent;
      color: #fff;
    }

    &:disabled {
      opacity: 0.8;
    }
  }

  .policy-agreement {
    font-size: 12px;
    color: #556575;
  }
}
</style>
