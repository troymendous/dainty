<template>
  <section class="development-header">
    <img class="main-image" :src="activeStage.mainImage" />
    <h3>{{ activeStage.title }}</h3>
    <div class="h3-bottom-border"></div>
    <div class="development-cards">
      <web-development-card
        v-for="(card, i) in activeStage.cards"
        :key="i"
        v-bind="card"
        :checked="activeStage.activeCardIndex === i + 1"
        @click.native="activeStage.activeCardIndex = i + 1"
      />
    </div>
    <div class="btn-next-previous-group">
      <div
        class="previous-btn"
        v-if="activeStage.previousValue === 1"
        @click="previousStage(activeStage.previousValue, !activeStage.activeCardIndex)"
      >
        <img src="/web-development/next.svg" />
        Back
      </div>
      <div
        :class="`next-btn ${!activeStage.activeCardIndex ? 'disabled' : ''}`"
        @click="nextStage(activeStage.nextValue, !activeStage.activeCardIndex)"
      >
        Next
        <img src="/web-development/next.svg" />
      </div>
    </div>
  </section>
</template>

<script>
import WebDevelopmentCard from "./web-development-card.vue"
export default {
  components: {
    WebDevelopmentCard,
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
        mainImage: "/web-development/header1.png",
        cards: [
          { image: "/web-development/1.svg", text: "Banner Design" },
          { image: "/web-development/2.svg", text: "Logo Design" },
          { image: "/web-development/3.svg", text: "Social Media Post" },
          { image: "/web-development/4.svg", text: "Other Design" },
        ],
        activeCardIndex: null,
        nextValue: 1,
        previousValue: 0,
      },
      {
        title: "What was this design used for?",
        mainImage: "/web-development/header2.svg",
        cards: [
          { image: "/web-development/personal.svg", text: "Personal" },
          { image: "/web-development/business.svg", text: "Business" },
          { image: "/web-development/other.svg", text: "Other" },
        ],
        activeCardIndex: null,
        nextValue: 0,
        previousValue: 1,
      },
    ],
  }),
  methods: {
    nextStage(value = 0, disbaled) {
      if (!disbaled) this.step += value
    },
    previousStage(value = 0) {
      this.step -= 1
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
    .previous-btn {
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
