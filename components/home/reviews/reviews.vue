<template>
  <section class="reviews-section">
    <div v-if="showHomeOverlay" class="overlay" @click="handleHidePopup"></div>
    <div class="reviews_title"><h2>Reviews</h2></div>
    <div class="reviews-section_inner">
      <div class="reviews-grid">
        <div
          v-for="{ review, name, slug, stars, date, img } in reviews.slice(0, 3)"
          :key="slug"
          class="review-card"
        >
          <heading :name="name" :number-of-stars="stars" :date="date" :img="img" />
          <review-content :review="review" />
          <button
            v-if="review.match(/(\w+)/g).length > 36"
            class="show-review-btn"
            @click="handleShowPopup(slug)"
          >
            Continue reading
          </button>
        </div>
      </div>
      <div class="text-btn">
        <button v-if="!showMoreCards" @click="showMoreCards = !showMoreCards">View More</button>
      </div>

      <div v-if="showMoreCards" class="reviews-grid">
        <div
          v-for="{ review, name, slug, stars, date, img } in reviews.slice(4)"
          :key="slug"
          class="review-card"
        >
          <heading :name="name" :number-of-stars="stars" :date="date" :img="img" />
          <review-content :review="review" />
          <button
            v-if="review.match(/(\w+)/g).length > 36"
            class="show-review-btn"
            @click="handleShowPopup(slug)"
          >
            Continue reading
          </button>
        </div>
      </div>
    </div>
    <div v-if="showHomeOverlay" class="reviews-popup">
      <button @click="handleHidePopup"><span>×</span></button>
      <heading
        :name="selectedReview.name"
        :img="selectedReview.img"
        :date="selectedReview.date"
        :number-of-stars="selectedReview.stars"
      />
      <p class="review-content">“{{ selectedReview.review }}“</p>
    </div>
  </section>
</template>

<script>
import reviews from "../../../static/data/reviews.json"
import reviewContent from "./review-content.vue"
export default {
  components: { reviewContent },
  data() {
    return {
      reviews,
      showHomeOverlay: false,
      selectedReview: {},
      showMoreCards: false,
    }
  },
  methods: {
    handleShowPopup(slug) {
      this.showHomeOverlay = true
      this.selectedReview = this.reviews.find((review) => review.slug === slug)
      document.body.style.overflow = "hidden"
    },
    handleHidePopup() {
      this.showHomeOverlay = false
      this.selectedReview = {}
      document.body.style.overflow = "auto"
    },
  },
}
</script>

<style lang="scss" scoped>
.reviews-section {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem 6rem;
  .reviews_title {
    text-align: center;
  }
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 350px);
  justify-content: space-between;

  @screen md {
    grid-template-columns: 1fr;
  }
}

.review-card {
  padding: 20px;
  margin: 12px auto;
  min-height: 350px !important;
  border: 1px solid #eaebec;
  border-radius: 5px;
  box-shadow: 0 1px 5px 3px #f7f3f3;
}

.overlay {
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reviews-popup {
  position: fixed;
  top: 7%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1001;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  width: 850px;
  min-height: 350px;
  max-height: 90vh;
  overflow-y: scroll;
  margin: 30px auto;
  background: white;
  padding: 25px;

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1002;
    opacity: 0.2;
    font-size: 21px;
    font-weight: 500;
  }

  @screen md {
    width: 600px;
    top: 5%;
  }

  @screen sm {
    width: 355px;
  }
}

.show-review-btn {
  @apply text-accentPink;
  margin-top: 1rem;
}

.show-more-cards-wrapper {
  text-align: center;

  button {
    @apply text-accentPurple;
    padding: 0.75rem;
    font-weight: 500;
    border-radius: 8px;
    width: 140px;
    text-align: center;
    font-size: 14px;
    background: #fff;
    border: 2px solid var(--acc-purple-color);
    margin-top: 1.5rem;

    &:hover {
      background: var(--acc-pink-color);
      border: 2px solid transparent;
      color: #fff;
    }
  }
}
</style>
