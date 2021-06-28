<template>
  <section class="development-header">
    <img src="/web-development/header.png" />
    <h3>What was the design you are after?</h3>
    <div class="h3-bottom-border"></div>
    <div class="development-cards">
      <web-development-card v-for="(card, i) in cards" :key="i" v-bind="card" />
    </div>
  </section>
</template>

<script>
import WebDevelopmentCard from "./web-development-card.vue"
export default {
  components: {
    WebDevelopmentCard,
  },
  data: () => ({
    cards: [
      { image: "/web-development/1.svg", checked: false, text: "Banner Design" },
      { image: "/web-development/2.svg", checked: true, text: "Logo Design" },
      { image: "/web-development/3.svg", checked: false, text: "Social Media Post" },
      { image: "/web-development/4.svg", checked: false, text: "Other Design" },
    ],
  }),
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
  img {
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
    @apply grid;
    @apply grid-cols-4;
    width: 100%;
    gap: 25px;
    @screen md {
      @apply grid-cols-2;
    }
    @screen sm {
      gap: 10px;
    }
  }
}
</style>
