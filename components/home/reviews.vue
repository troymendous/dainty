<template>
  <section class="reviews-section">
    <h2>Reviews</h2>
    <div class="reviews-section_inner">
      <div class="review-card" v-for="{ review, name, slug } in reviews" v-bind:key="slug">
        <h5>{{ name }}</h5>
        <p>{{ review.replace(/(([^\s]+\s\s*){35})(.*)/, "$1…") }}</p>
        <span class="show-review-btn" v-if="review.match(/(\w+)/g).length > 36" role="button"
          >Continue reading</span
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      reviews: [],
    }
  },
  async fetch() {
    this.reviews = await this.$content("reviews").fetch()
  },
}
</script>

<style lang="scss" scoped>
.reviews-section {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 6rem 2rem;
}

.reviews-section_inner {
  display: grid;
  grid-template-columns: repeat(3, 350px);
  justify-content: space-between;
}

.review-card {
  padding: 20px;
  margin: 12px auto;
  min-height: 350px !important;
  border: 1px solid #eaebec;
  border-radius: 5px;
  box-shadow: 0 1px 5px 3px #f7f3f3;

  p {
    color: black !important;
  }
}

.show-review-btn {
  display: inline-block;
  @apply text-accentPink;
}
</style>
