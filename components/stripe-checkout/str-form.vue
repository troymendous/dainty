<template>
  <ValidationObserver slim v-slot="{ invalid, validate }">
    <form @submit.prevent="validate().then(handleSubmit)" v-if="!showNextStep" class="str-form">
      <h4 v-if="currentRouteName === 'save-card'">Personal Details</h4>
      <h4 v-else>Create your account:</h4>
      <ValidationProvider name="fullname" rules="required|alpha_spaces|min:3" v-slot="{ errors }">
        <input type="text" v-model="fullname" placeholder="Full name*" />
        <span v-show="errors.length > 0" class="is-invalid">{{ errors[0] }}</span>
      </ValidationProvider>

      <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
        <input type="email" v-model="email" placeholder="Work Email*" />
        <span v-show="errors.length > 0" class="is-invalid">{{ errors[0] }}</span>
      </ValidationProvider>

      <str-button :isLoading="isLoading" :disabled="invalid || isLoading"> Proceed </str-button>
      <div v-if="currentRouteName === 'save-card'">
        <p class="policy-agreement">
          By clicking this button, you agree to our Terms, Privacy Policy and Security Policy.
        </p>

        <p class="policy-agreement">
          Inaddition to that, you also authorise Dainty to send instructions to the financial
          institution that issued your card to take payments from your card account in accordance
          with the terms of your agreement.
        </p>
      </div>

      <div v-else>
        <p class="policy-agreement">
          By clicking this button, you agree to our Terms, Privacy Policy and Security Policy.
        </p>

        <p class="policy-agreement">
          You will not be charged for your core plan until your 15 day trial is over, if you do not
          wish to continue the paid Core Plan you just need to let us know.
        </p>
      </div>
    </form></ValidationObserver
  >
</template>

<script>
export default {
  props: {
    isLoading: Boolean,
    showNextStep: {
      type: Boolean,
      default: false,
    },
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
    currentRouteName() {
      return this.$route.name
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("showStrCheckout")
    },
  },
}
</script>

<style lang="scss" scoped>
.str-form {
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

  .is-invalid {
    color: red;
    font-size: 14px;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  .is-invalid::first-line {
    text-transform: capitalize;
  }

  .policy-agreement {
    margin-top: 0.5rem;
    font-size: 12px;
    color: #556575;
    line-height: 1.1rem;
  }
}
</style>
