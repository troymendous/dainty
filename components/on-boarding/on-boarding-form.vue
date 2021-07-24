<template>
  <div class="web-development-form">
    <div class="form-group">
      <label>Name your project ( 'business name here' logo, marketing content, banner, etc) </label
      ><br />
      <input placeholder="Name your project" class="input" v-model="answers.projectName" />
    </div>
    <div class="form-group">
      <label>Give us the size you need</label><br />
      <input
        placeholder="Your desired size (Eg: 820 х 312 px)"
        class="input"
        v-model="answers.designSize"
      />
    </div>
    <div class="form-group">
      <label
        >Give us your content and instructions (you can give suggestions, or anything you wish to be
        used for your project) </label
      ><br />
      <textarea
        placeholder="Your content or instruction"
        class="input"
        rows="5"
        v-model="answers.instruction"
      />
    </div>
    <div class="form-group">
      <label>What style do you prefer? (vintage, modern, upmarket, minimalistic, etc) </label><br />
      <input placeholder="Your preferred style" class="input" v-model="answers.preferredStyle" />
    </div>
    <div class="form-group">
      <label
        >Please provide some links to designs you'd like us to use as inspiration for this design </label
      ><br />
      <textarea
        placeholder="Inspiration design links"
        class="input"
        rows="5"
        v-model="answers.links"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    answers: {},
    designSizes: ["1200 x 628 px", "1200 x 630 px", "820 х 312 px"],
  }),
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
}
</style>
