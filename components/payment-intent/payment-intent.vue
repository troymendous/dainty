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
            <str-button :is-loading="isLoading" :disabled="isLoading"> Subscribe </str-button>
          </form>
          <div class="sr-result hidden">
            <p>Subscription is sucessful 🎊<br /></p>
            <div v-if="isSendingEmails" class="flex justify-center text-gray-500">
              <loader class="mt-2 h-10 w-20 animate-spin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mail from "../../mixins/mail"
import slackNotifs from "../../mixins/slack-notifs"
import zapierDocs from "../../mixins/zapier-docs"

import StrButton from "../stripe-checkout/str-button.vue"

// New keys copied from checkout-button component
/** Stripe live mode **/
const CORE_PLAN_PRICE_ID = "price_1Ib5FJF5dr8554IRIF0KhudR"
const PLUS_PLAN_PRICE_ID = "price_1Ib5EYF5dr8554IRBnAavHaX"
const ENTERPRISE_PLAN_PRICE_ID = "price_1Ib5BPF5dr8554IR6NMccYTf"

/** Stripe test mode **/
// const CORE_PLAN_PRICE_ID = "price_1Ib2uXF5dr8554IRCc5EDvHU"
// const PLUS_PLAN_PRICE_ID = "price_1Ib2tSF5dr8554IRccQ0lWa3"
// const ENTERPRISE_PLAN_PRICE_ID = "price_1Ib2quF5dr8554IR9Zxi4XWc"

export default {
  components: {
    StrButton,
  },
  mixins: [mail, slackNotifs, zapierDocs],
  data() {
    return {
      stripe: "",
      card: null,
      isLoading: false,
      plan: "",
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
    // eslint-disable-next-line vue/return-in-computed-property
    price() {
      if (this.plan === "core") {
        return CORE_PLAN_PRICE_ID
      }
      if (this.plan === "plus") {
        return PLUS_PLAN_PRICE_ID
      }
      if (this.plan === "enterprise") {
        return ENTERPRISE_PLAN_PRICE_ID
      }
    },
    capitalizedPlan() {
      return this.plan.charAt(0).toUpperCase() + this.plan.slice(1)
    },
  },
  mounted() {
    this.plan = this.$route.params.slug
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
  },
  methods: {
    async handleSubmit() {
      this.isLoading = true
      const res = await this.stripe.createPaymentMethod({
        type: "card",
        card: this.card,
      })

      if (res.error) {
        this.displayError(res.error.message)
        this.isLoading = false
      } else {
        this.createSubscription(res.paymentMethod.id)
      }
    },
    async createSubscription(id) {
      const res = await fetch("/api/subscribe", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.$store.state.fullname,
          email: this.email,
          payment_id: id,
          price: this.price,
          plan: this.capitalizedPlan,
        }),
      })

      const result = await res.json()

      if (result) {
        this.isLoading = false
      }

      if (result.status === 200) {
        document.querySelector(".setup-intent-form").classList.add("hidden")
        document.querySelector(".sr-result").classList.remove("hidden")

        this.isSendingEmails = true

        try {
          // Send slack notifications
          await this.sendSlackNotifs(this.capitalizedPlan)

          // Send mail to subbed client and admins
          await this.sendUserMail()
          await this.sendAdminsMail()

          // Append the user to Google Doc
          await this.appendUsersToGoogleDocs(this.capitalizedPlan)
        } catch (error) {
          // TODO: How to effectively handle errors
          console.log(error)
        }

        this.isSendingEmails = false

        if (this.plan === "plus") {
          this.$router.push({ name: "welcome", params: { price: 499.0 } })
        } else if (this.plan === "enterprise") {
          this.$router.push({ name: "welcome", params: { price: 499.0 } })
        } else if (this.plan === "core") {
          this.$router.push({ name: "welcome", params: { price: 99.0 } })
        }

        this.$store.commit("updateEmail", "")
        this.$store.commit("updateFullname", "")
      }

      if (result.status === 400) {
        this.displayError(result.message)
      }

      if (result.status === 500) {
        this.displayError(result.error.raw.message)
      }
    },
    toggleShowSetupIntent() {
      this.$emit("closePaymentIntent")
    },
    displayError(text) {
      const cardErrors = document.querySelector("#card-errors")
      cardErrors.textContent = text
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

  input[type="email"]:disabled {
    background-color: transparent;
  }

  .input-field {
    margin-top: 1rem;
  }

  .sr-field-error {
    color: red;
  }
}
</style>
