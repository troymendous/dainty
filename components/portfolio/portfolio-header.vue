<template>
  <div class="section-header">
    <div class="portfolio-header-text">
      <h5>THE LATEST</h5>
      <h2>Greetings, Hallmark.</h2>
      <button class="portfolio-header_button">View Case Study</button>
    </div>
    <div
      class="section-header_background"
      style="background-image: url('/portfolio/hallmark.jpg'); background-position-y: top"
    ></div>
  </div>
</template>

<script>
export default {
  name: "PortfolioHeader",
}
</script>

<style lang="scss">
.portfolio {
  .section-header {
    min-height: 600px;
  }
  .portfolio-header-text {
    padding: 50px;
    margin-bottom: 40px;
    h5,
    h2,
    button {
      color: white;
    }
  }
  .portfolio-header_button {
    font-size: 20px;
    font-weight: 600;
    padding: 20px 70px;
    margin: 30px 0;
    border: 3px solid;
  }
}
</style>
