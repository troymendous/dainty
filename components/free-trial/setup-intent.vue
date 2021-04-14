<template>
  <div class="setup-intent">
    <div>
      <div>
        <div>
          <form class="setup-intent-form" @submit.prevent="handleSubmit">
            <div class="setup-intent-form-heading">
              <h4>Card Details</h4>
              <div role="button" @click="toggleShowSetupIntent">
                <back-arrow />
              </div>
            </div>
            <div class="input-field">
              <label> Account details </label>
              <input type="email" :value="email" disabled />
            </div>

            <div class="input-field">
              <label> Payment details </label>
              <div id="card-element">
                <!-- A Stripe card Element will be inserted here. -->
              </div>
            </div>
            <div id="card-errors" class="sr-field-error" role="alert"></div>
            <str-button :is-loading="isLoading" disabled>
              Link your card to your account
            </str-button>
            <p class="policy-agreement">
              You will not be charged for your core plan until your 15-day trial is over, if you do
              not wish to continue the paid Core Plan you just need to let us know to avoid being
              charged.
            </p>
          </form>
          <div class="sr-result hidden">
            <p>Card setup completed 🎊<br /></p>
            <div v-if="isSendingEmails" class="flex justify-center text-gray-500">
              <loader class="animate-spin h-10 w-20 mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mail from "../../mixins/mail"
import StrButton from "../stripe-checkout/str-button.vue"

export default {
  mixins: [mail],
  components: {
    StrButton,
  },
  data() {
    return {
      stripe: "",
      card: null,
      isLoading: false,
      setupIntent: {},
      plan: "Core",
      isSendingEmails: false,
    }
  },
  computed: {
    email() {
      return this.$store.state.email
    },
    fullname() {
      return this.$store.state.fullname
    },
  },
  mounted() {
    /* eslint-disable-next-line */
    this.stripe = Stripe(process.env.stripePublishableKey)
    const elements = this.stripe.elements({
      fonts: [
        {
          cssSrc: "https://fonts.googleapis.com/css2?family=Poppins",
        },
      ],
    })

    const style = {
      base: {
        fontSize: "16px",
        color: "#32325d",
        fontFamily: "Poppins, sans-serif",
        "::placeholder": {
          color: "rgba(0,0,0,0.4)",
        },
      },
    }
    this.card = elements.create("card", { style })

    this.card.mount("#card-element")

    // Element focus ring
    this.card.on("focus", function () {
      const el = document.getElementById("card-element")
      el.classList.add("focused")
    })

    this.card.on("blur", function () {
      const el = document.getElementById("card-element")
      el.classList.remove("focused")
    })

    this.card.on("change", function (event) {
      const el = document.getElementById("str-btn")
      if (event.complete) {
        el.disabled = false
      } else if (!event.complete) {
        el.disabled = true
      }
    })
  },
  methods: {
    async handleSubmit() {
      this.isLoading = true

      await this.getSetupIntent()

      const confirmationResult = await this.stripe.confirmCardSetup(
        this.setupIntent.client_secret,
        {
          payment_method: {
            card: this.card,
            billing_details: { email: this.email },
          },
        }
      )

      if (confirmationResult.error) {
        this.isLoading = false
        const displayError = document.getElementById("card-errors")
        displayError.textContent = confirmationResult.error.message
      } else {
        this.isLoading = false
        document.querySelector(".setup-intent-form").classList.add("hidden")
        document.querySelector(".sr-result").classList.remove("hidden")
        this.isSendingEmails = true

        const res = await this.subscribeFreeTrial(this.setupIntent)
        const { status } = await res.json()
        if (status === "success") {
          // Send mail to subbed client and admins
          // await this.sendUserMail()
          // await this.sendAdminsMail()

          await this.sendSlackNotifs()

          this.isSendingEmails = false

          // Redirect the user to the welcome page
          this.$router.push({ name: "welcome", params: { price: 0.0 } })
        }

        // Reset the store
        this.$store.commit("updateEmail", "")
        this.$store.commit("updateFullname", "")
        this.$store.commit("updateSetupIntent", {})
      }
    },
    subscribeFreeTrial({ customer }) {
      return fetch("/api/subscriptions", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customer }),
      })
    },
    toggleShowSetupIntent() {
      this.$emit("closeSetupIntent")
    },
    async getSetupIntent() {
      const res = await fetch("/api/create-setup-intent", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: this.email.trim(), name: this.fullname.trim() }),
      })

      this.setupIntent = await res.json()
    },
    async sendSlackNotifs() {
      const res = await fetch("/api/create-slack-notif", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email.trim(),
          name: this.fullname.trim(),
          plan: "Core Plan",
        }),
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.setup-intent {
  position: relative;

  &-form-heading {
    display: flex;
    justify-content: space-between;
  }

  label {
    // display: inline-block;
    font-weight: 500;
    margin-bottom: 8px;
    @apply text-darkColor;
  }

  input {
    display: block;
  }

  .input-field {
    margin-top: 1rem;
  }

  input[type="email"]:disabled {
    background-color: transparent;
  }

  .sr-field-error {
    color: red;
  }

  button {
    border: 2px solid var(--acc-purple-color);
    border-radius: 8px;
    padding: 0.75rem;
    font-weight: 500;
    @apply text-accentPurple;
    margin-top: 2rem;

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
    margin-top: 0.5rem;
    font-size: 12px;
    color: #556575;
    line-height: 1.1rem;
  }
}
</style>
