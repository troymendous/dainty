<template>
  <div class="web-development-form">
    <ValidationObserver v-slot="{ validate }">
      <form @submit.prevent="validate()" class="str-form" id="str-form">
        <div class="form-group">
          <label
            >Name your project ( 'business name here' logo, marketing content, banner, etc) </label
          ><br />
          <input
            id="projname"
            placeholder="Name your project"
            class="input"
            v-model="answers.projectName"
            required
          />
        </div>
        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
          <div class="form-group">
            <label>Your business email </label><br />
            <input
              id="bizemail"
              placeholder="example@domain.com"
              type="email"
              class="input"
              v-model="answers.email"
              required
            />
            <span v-show="errors.length > 0" class="is-invalid">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <div class="form-group">
          <label>Give us the size you need</label><br />
          <input
            id="size"
            placeholder="Your desired size (Eg: 820 х 312 px)"
            class="input"
            v-model="answers.designSize"
            required
          />
        </div>
        <div class="form-group">
          <label
            >Give us your content and instructions (you can give suggestions, or anything you wish
            to be used for your project) </label
          ><br />
          <textarea
            id="inst"
            placeholder="Your content or instruction"
            class="input"
            rows="5"
            v-model="answers.instruction"
            required
          />
        </div>
        <div class="form-group">
          <label>What style do you prefer? (vintage, modern, upmarket, minimalistic, etc) </label
          ><br />
          <input
            id="style"
            placeholder="Your preferred style"
            class="input"
            v-model="answers.preferredStyle"
            required
          />
        </div>
        <div class="form-group">
          <label
            >Please provide some links to designs you'd like us to use as inspiration for this
            design </label
          ><br />
          <textarea
            id="insp"
            placeholder="Inspiration design links"
            class="input"
            rows="5"
            v-model="answers.links"
            required
          />
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  data: () => ({
    answers: {},
    designSizes: ["1200 x 628 px", "1200 x 630 px", "820 х 312 px"],
  }),
  watch: {
    answers(value) {
      this.$emit("answers", value)
    },
  },
}
</script>

<style lang="scss" scoped>
.web-development-form {
  width: 80%;
  margin: auto;
  .form-group {
    margin: 30px 0;
    .input {
      border-radius: 8px;
      box-shadow: 0px 3px 16px #77767615;
      box-sizing: border-box;
      padding: 12px 16px;
      margin: 10px 0;
      width: 100%;
      &:focus {
        outline: none;
        border: 2px solid var(--acc-pink-color);
      }
    }
    label {
    }
    .radio-group {
      margin: 10px 0 0;
    }
  }
  @screen sm {
    width: 95%;
  }
  .is-invalid {
    color: red;
    font-size: 14px;

    &::first-letter {
      text-transform: uppercase;
    }
  }
}
</style>
