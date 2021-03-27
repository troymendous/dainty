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
            <!-- <button type="submit" :disabled="isLoading">
              <span>Proceed</span>
              <loader v-if="isLoading" class="animate-spin h-5 w-10 mr-3" />
            </button> -->
            <p class="policy-agreement">
              By clicking this button, you agree to our Terms, Privacy Policy and Security Policy.
            </p>
          </form>
          <paymentIntent v-else v-on:closePaymentIntent="closePaymentIntentStep" />
        </div>
      </div>

      <div class="free-trial_content-side" v-if="slug === 'plus'">
        <div class="free-trial_content-side-headliner">
          <div>
            <h4>Plus</h4>
            <p>$249/month</p>
          </div>
        </div>

        <ul>
          <div>
            <li v-for="service in plusServices" :key="service.length">
              <check-icon />
              <span> {{ service }}</span>
            </li>
          </div>
        </ul>
      </div>

      <div class="free-trial_content-side" v-else>
        <div class="free-trial_content-side-headliner">
          <div>
            <h4>Enteprise</h4>
            <p>$599/month</p>
          </div>
        </div>

        <ul>
          <div>
            <li v-for="service in enterpriseServices" :key="service.length">
              <check-icon />
              <span> {{ service }}</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import paymentIntent from "../../components/payment-intent/payment-intent.vue"
import checkIcon from "../../components/home/plans/check-icon.vue"
// import loader from "../../components/loader.vue"

export default {
  components: {
    checkIcon,
    //  loader,
    paymentIntent,
  },
  data() {
    return {
      showPaymentIntentStep: false,
      isLoading: false,
      slug: "",
      plusServices: [
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
      enterpriseServices: [
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

.free-trial_content-side {
  border-top: 6px solid var(--acc-purple-color);
  padding: 30px 70px 60px;
  box-shadow: 0 5px 30px 0 rgba(39, 63, 74, 0.15);

  &-headliner {
    display: flex;
    justify-content: center;
  }

  li {
    padding: 0.6rem 0;
  }

  svg {
    display: inline-block !important;
    margin-right: 0.3rem;
    width: 12px;
    height: 12px;
  }
}
</style>
