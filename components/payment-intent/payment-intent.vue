<template>
  <div class="setup-intent">
    <div>
      <div>
        <div>
          <form class="setup-intent-form" @submit.prevent="handleSubmit">
            <div class="setup-intent-form-heading">
              <h4>Some Heading</h4>
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
            <button type="submit" :disabled="isLoading">
              <span id="button-text"> Link your card to your account </span>
              <loader v-if="isLoading" class="animate-spin h-5 w-10 mr-3" />
            </button>
          </form>
          <div class="sr-result hidden">
            <p>Card setup completed 🎊<br /></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loader from "../loader.vue"
export default {
  components: {
    loader,
  },
  data() {
    return {
      stripe: "",
      card: null,
      isLoading: false,
    }
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

    console.log({ card: this.card })

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
    planPrice() {
      if (this.slug === "plus") {
        return "price_1IVInFF5dr8554IR6PCOPrGq"
      }

      if (this.slug === "enterprise") {
        return "price_1IVIqyF5dr8554IRJNZvIHjq"
      }
    },
  },
  methods: {
    async handleSubmit() {
      this.isLoading = true

      const res = await this.stripe.paymentMethods.create({
        type: "card",
        card: this.card,
      })

      const result = await res.json()

      if (result.error) {
        displayError(error.message)
      } else {
        createSubscription(result.paymentMethod.id)
      }

      // // Reset the store
      // this.$store.commit("updateEmail", "")
      // this.$store.commit("updateFullname", "")
      // this.$store.commit("updateSetupIntent", {})
    },
  },
  async createSubscription(id) {
    const res = await fetch("/api/subscribe", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.$store.state.fullname,
        email,
        payment_id: id,
        plan_price: this.planPrice,
      }),
    })

    const result = await res.json()

    this.isLoading = false

    if (result.satus === 400) {
      console.log(result.message)
    }

    if (result.satus === 200) {
      console.log(result.body)
      // Reset the store
      this.$store.commit("updateEmail", "")
      this.$store.commit("updateFullname", "")
    }
  },
  toggleShowSetupIntent() {
    this.$emit("closePaymentIntent")
  },
  displayError(text) {
    const cardErrors = document.querySelector("#card-errors")
    cardErrors.textContent = text
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
}
</style>