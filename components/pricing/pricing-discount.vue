<template>
  <div class="pricing-discount">
    <div class="pricing-discount_title"><h4>Looking for a discount?</h4></div>
    <div class="discount-options">
      <div class="discount-options_item">
        <nuxt-link to="/">
          <div class="title">Help Dainty for Good</div>
          <div class="text">For organizations with a focus on the environment & social impact.</div>
          <div class="pricing-btn_animated">Learn more <span> > </span></div>
        </nuxt-link>
      </div>
      <div class="discount-options_item">
        <nuxt-link to="/">
          <div class="title">Help Dainty for Startups</div>
          <div class="text">For new companies that could use a price break for the first year.</div>
          <div class="pricing-btn_animated">Learn more <span> > </span></div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PricingDiscount",
}
</script>

<style lang="scss">
.pricing-discount {
  margin: 50px 0;
  .pricing-discount_title {
    width: fit-content;
    margin: 15px auto;
  }
  .discount-options {
    display: flex;
  }
  .discount-options {
    width: 80%;
    margin: 0 auto;
    .discount-options_item {
      height: 340px;
      width: 540px;
      padding: 70px 50px;
      text-align: center;
      border-bottom: 1px solid #f1f3f5;
      &:nth-child(1) {
        border-left: 1px solid #f1f3f5;
        border-right: 1px solid #f1f3f5;
        box-shadow: -10px 15px 25px 1px #f1f3f5;
        border-radius: 6px 0 0 6px;
      }
      &:nth-child(2) {
        border-right: 1px solid #f1f3f5;
        box-shadow: 10px 15px 25px 1px #f1f3f5;
        border-radius: 0 6px 6px 0;
      }
      .title {
        font-size: 28px;
        margin: 20px;
      }
      .text {
        font-size: 20px;
        font-weight: 100;
        line-height: 1.8;
        color: #556575;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
