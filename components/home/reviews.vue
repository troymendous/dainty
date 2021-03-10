<template>
  <section class="reviews-section">
    <h2>Reviews</h2>
    <div class="reviews-section_inner">
      <div class="review-card" v-for="{ review, name, slug } in reviews" v-bind:key="slug">
        <h5>{{ name }}</h5>
        <p>{{ review }}</p>
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
  grid-template-columns: repeat(3, 370px);
}

.review-card {
  border-radius: 4px;
  padding: 20px;
  margin: 12px auto;
  min-height: 350px !important;

  p {
    color: black !important;
  }
}
</style>
