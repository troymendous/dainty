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
              <input type="email" :value="email" />
            </div>

            <div class="input-field">
              <label> Payment details </label>
              <div id="card-element">
                <!-- A Stripe card Element will be inserted here. -->
              </div>
            </div>
            <div class="sr-field-error" id="card-errors" role="alert"></div>
            <str-button :isLoading="isLoading" :disabled="isLoading"> Subscribe </str-button>
          </form>
          <div class="sr-result hidden">
            <p>Subscription is sucessful 🎊<br /></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mail from "../../mixins/mail"
import StrButton from "../stripe-checkout/str-button.vue"

// const PLUS_PLAN_PRICE_ID = "price_1Ib5EYF5dr8554IRBnAavHaX"
// const ENTERPRISE_PLAN_PRICE_ID = "price_1Ib5BPF5dr8554IR6NMccYTf"

const PLUS_PLAN_PRICE_ID = "price_1Ib2tSF5dr8554IRccQ0lWa3"
const ENTERPRISE_PLAN_PRICE_ID = "price_1Ib2quF5dr8554IR9Zxi4XWc"

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
      // price: "",
      plan: "",
    }
  },
  mounted() {
    this.plan = this.$route.params.slug
    // if (slug === "plus") {
    //   this.price = PLUS_PLAN_PRICE_ID
    // } else {
    //   this.price = ENTERPRISE_PLAN_PRICE_ID
    // }

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
  computed: {
    email() {
      return this.$store.state.email
    },
    fullname() {
      return this.$store.state.fullname
    },
    price() {
      if (this.plan === "plus") {
        return PLUS_PLAN_PRICE_ID
      }
      if (this.plan === "enterprise") {
        return ENTERPRISE_PLAN_PRICE_ID
      }
    },
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
        }),
      })

      const result = await res.json()

      if (result) {
        this.isLoading = false
      }

      if (result.status === 200) {
        document.querySelector(".setup-intent-form").classList.add("hidden")
        document.querySelector(".sr-result").classList.remove("hidden")

        // Send mail to subbed client and admins
        await this.sendUserMail()
        await this.sendAdminsMail()

        if (this.plan === "plus") {
          this.$router.push({ name: "welcome", params: { price: 249.0 } })
        } else if (this.plan === "enterprise") {
          this.$router.push({ name: "welcome", params: { price: 599.0 } })
        }

        this.$store.commit("updateEmail", "")
        this.$store.commit("updateFullname", "")
      }

      if (result.status === 400) {
        this.displayError(result.message)
      }

      if (result.status === 500) {
        this.displayError(result.message)
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

  .input-field {
    margin-top: 1rem;
  }

  .sr-field-error {
    color: red;
  }
}
</style>
