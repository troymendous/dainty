<template>
  <form @submit.prevent="handleSubmit" v-if="!showSetupIntentStep" class="str-form">
    <h4>Create your account:</h4>
    <!-- <input type="text" placeholder="Full name*" required v-model="fullname" /> -->
    <ValidationProvider name="Full name" rules="required|min:3" v-slot="{ errors }">
      <input type="text" v-model="name" placeholder="Full name*" />
      <span v-show="errors.length > 0" class="is-invalid">{{ errors[0] }}</span>
    </ValidationProvider>

    <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
      <input type="email" v-model="email" placeholder="Work Email*" />
      <span v-show="errors.length > 0" class="is-invalid">{{ errors[0] }}</span>
    </ValidationProvider>

    <!-- <input type="email" placeholder="Work Email*" required v-model="email" /> -->
    <str-button :isLoading="isLoading" :disabled="isLoading"> Proceed </str-button>
    <p class="policy-agreement">
      By clicking this button, you agree to our Terms, Privacy Policy and Security Policy.
    </p>
  </form>
</template>

<script>
export default {
  props: {
    isLoading: Boolean,
  },
  data() {
    return {
      showSetupIntentStep: false,
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
    handleSubmit() {
      console.log("Hello World")
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
    font-size: 12px;
    color: #556575;
  }
}
</style>
