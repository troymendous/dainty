<template>
  <section class="development-header">
    <img class="main-image" :src="activeStage.mainImage" />
    <h3>{{ activeStage.title }}</h3>
    <div class="h3-bottom-border"></div>
    <div class="development-cards">
      <on-boarding-card
        v-for="(card, i) in activeStage.cards"
        :key="i"
        v-bind="card"
        :checked="activeStage.activeCardIndex === i + 1"
        @click.native="activeStage.activeCardIndex = i + 1"
      />
    </div>
    <on-boarding-form v-if="activeStage.isForm" @answers="answers = $event" />
    <div class="btn-next-previous-group">
      <div
        class="previous-btn"
        v-if="activeStage.previousValue === 1"
        @click="previousStage(activeStage.previousValue, !activeStage.activeCardIndex)"
      >
        <img src="/on-boarding/next.svg" />
        Back
      </div>
      <div
        :class="`next-btn ${!activeStage.activeCardIndex ? 'disabled' : ''}`"
        v-if="activeStage.nextValue"
        @click="nextStage(activeStage.nextValue, !activeStage.activeCardIndex)"
      >
        Next
        <img src="/on-boarding/next.svg" />
      </div>
      <div class="submit-btn" v-if="activeStage.submit" @click="submitForm">Submit</div>
    </div>
  </section>
</template>

<script>
import ApiService from "@/service/index.js"

import OnBoardingCard from "./on-boarding-card.vue"
import OnBoardingForm from "./on-boarding-form.vue"

export default {
  components: {
    OnBoardingCard,
    OnBoardingForm,
  },
  computed: {
    activeStage() {
      return this.stages[this.step]
    },
  },
  data: () => ({
    step: 0,
    stages: [
      {
        title: "What was the design you are after?",
        mainImage: "/on-boarding/header1.png",
        cards: [
          { image: "/on-boarding/1.svg", text: "Banner Design" },
          { image: "/on-boarding/2.svg", text: "Logo Design" },
          { image: "/on-boarding/3.svg", text: "Social Media Post" },
          { image: "/on-boarding/4.svg", text: "Other Design" },
        ],
        activeCardIndex: null,
        nextValue: 1,
        previousValue: 0,
        isForm: false,
      },
      {
        title: "What was this design used for?",
        mainImage: "/on-boarding/header2.svg",
        cards: [
          { image: "/on-boarding/personal.svg", text: "Personal" },
          { image: "/on-boarding/business.svg", text: "Business" },
          { image: "/on-boarding/other.svg", text: "Other" },
        ],
        activeCardIndex: null,
        nextValue: 1,
        previousValue: 1,
        isForm: false,
      },
      {
        title: "Questionnaire.",
        activeCardIndex: null,
        nextValue: null,
        previousValue: null,
        submit: true,
        isForm: true,
      },
    ],
    answers: {
      projectName: null,
      email: null,
      designSize: null,
      instruction: null,
      preferredStyle: null,
      links: null,
    },
  }),
  methods: {
    nextStage(value = 0, disbaled) {
      if (!disbaled) this.step += value
    },
    previousStage(value = 0) {
      this.step -= 1
    },
    submitForm() {
      const message = `
        From /onboarding

        ${this.getCardString()}

        Form Data
        Name your project ( 'business name here' logo, marketing content, banner, etc)
          ${this.answers.projectName}

        Your business email
          ${this.answers.email}

        Give us the size you need
          ${this.answers.designSize}

        Give us your content and instructions (you can give suggestions, or anything you wish to be used for your project)
          ${this.answers.instruction}

        What style do you prefer? (vintage, modern, upmarket, minimalistic, etc)
          ${this.answers.preferredStyle}

        Please provide some links to designs you'd like us to use as inspiration for this design
          ${this.answers.links}
      `
      ApiService.submitOnboardingForm({ message })
        .then(() => {
          this.$router.push("/welcome-onboarding")
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getCardString() {
      return `'${this.stages[0].cards[this.stages[0].activeCardIndex - 1].text}' -> '${
        this.stages[1].cards[this.stages[1].activeCardIndex - 1].text
      }'`
    },
  },
}
</script>

<style lang="scss" scoped>
.development-header {
  max-width: 1152px;
  margin: auto;
  padding: 8rem 0 0;
  @screen md {
    padding: 6rem 2rem;
  }
  @screen sm {
    padding: 5rem 1rem;
  }
  .main-image {
    width: 260px;
    margin: auto;
    @screen sm {
      width: 180px;
    }
  }
  h3 {
    text-align: center;
    @screen sm {
      margin: 30px 3rem 0;
    }
  }
  .h3-bottom-border {
    border: 1px solid var(--acc-purple-color);
    width: 40px;
    margin: 12px auto 36px;
    @screen sm {
      margin: 12px auto 30px;
    }
  }
  .development-cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
    @screen md {
      justify-content: flex-start;
    }
    @screen sm {
      gap: 10px;
    }
  }
  .btn-next-previous-group {
    margin: 48px auto 0;
    width: fit-content;
    display: flex;
    gap: 24px;
    .next-btn,
    .previous-btn,
    .submit-btn {
      display: flex;
      align-items: center;
      gap: 16px;
      background: var(--acc-purple-color);
      color: white;
      padding: 12px 30px;
      border-radius: 8px;
      &:hover {
        cursor: pointer;
      }
      img {
        width: 17px;
        height: 16px;
      }
    }
    .previous-btn {
      img {
        transform: rotate(180deg);
      }
    }
  }
  .disabled {
    opacity: 0.5;
    &:hover {
      cursor: default !important;
    }
  }
}
</style>
