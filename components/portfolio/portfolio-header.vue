<template>
  <div class="section-header">
    <div class="portfolio-header-text">
      <h5>THE LATEST</h5>
      <h2>Greetings, Hallmark.</h2>
      <nuxt-link to="/" class="portfolio-header_button"><span>View Case Study</span></nuxt-link>
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
    a {
      color: white;
    }
  }
  .portfolio-header_button {
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
    width: 320px;
    height: 75px;
    font-size: 20px;
    font-weight: 600;
    margin: 30px 0;
    border: 3px solid;
    overflow: hidden;
    transition: all 0.3s;
    span {
      position: relative;
      width: 100%;
      left: 0;
      transition: all 0.3s;
    }
    &:before {
      position: absolute;
      left: -100%;
      content: url("/portfolio/arrow-white.svg");
      transition: all 0.3s;
    }
    &:hover {
      span {
        left: 100%;
        transition: all 0.3s;
      }
    }
    &:hover:before {
      left: 43%;
    }
  }
}
</style>
