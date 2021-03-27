<template>
  <div class="free-trial">
    <h2>15 Day Free Trial</h2>
    <div class="free-trial_inner">
      <div class="free-trial_content-wrapper">
        <div class="free-trial_content">
          <form
            @submit.prevent="getSetupIntent"
            v-if="!showSetupIntentStep"
            class="setup-intent-form"
          >
            <h4>Start your free trial</h4>
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
          <setup-intent v-else v-on:closeSetupIntent="closeSetupIntentStep" />
        </div>
      </div>

      <div class="free-trial_content-side">
        <div class="free-trial_content-side-headliner">
          <div>
            <h4>Core</h4>
            <p>$99/month</p>
          </div>
        </div>

        <ul>
          <div>
            <li v-for="service in services.slice(0, 9)" :key="service.length">
              <check-icon />
              <span> {{ service }}</span>
            </li>
          </div>

          <div>
            <li v-for="service in services.slice(9)" :key="service.length">
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
// import setupIntent from "../components/free-trial/setup-intent.vue"
import checkIcon from "../components/home/plans/check-icon.vue"
// import loader from "../components/loader.vue"
import StrButton from "../components/stripe-checkout/str-button.vue"

export default {
  components: {
    checkIcon,
    //  loader,
    StrButton,
  },
  data() {
    return {
      showSetupIntentStep: false,
      isLoading: false,
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
    async getSetupIntent() {
      this.isLoading = true
      const res = await fetch("/api/create-setup-intent", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: this.email, name: this.fullname }),
      })

      const setupIntent = await res.json()

      this.$store.commit("updateSetupIntent", setupIntent)

      this.isLoading = false

      this.showSetupIntentStep = true

      // this.$router.push("/pricing/free-trial/finish")
    },
    closeSetupIntentStep() {
      this.showSetupIntentStep = false
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
