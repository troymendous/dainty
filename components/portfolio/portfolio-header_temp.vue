<template>
  <div class="portfolio-header-temp"><h2>Portfolio</h2></div>
</template>

<script>
export default {
  name: "PortfolioHeaderTemp",
}
</script>

<style lang="scss" scoped>
.portfolio-header-temp {
  min-height: 200px;
  text-align: center;
  padding: 12rem 0 8rem 0;
  h2 {
    font-size: 5rem;
    text-transform: uppercase;
    @screen md {
      font-size: 4rem;
    }
    @screen sm {
      font-size: 3rem;
    }
  }
}
</style>
