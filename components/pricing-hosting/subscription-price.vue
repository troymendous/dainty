<template>
  <div class="pricing-plans_content-item-price">
    <!--    <span>$</span>-->
    <span v-if="isMonthly">{{ monthlyPrice }}</span>
    <span v-else>{{ annualPrice }}</span>
  </div>
</template>

<script>
export default {
  props: {
    monthlyPrice: Number,
    annualPrice: Number,
    isMonthly: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.pricing-plans_content-item-price {
  position: relative;
  text-align: center !important;
  > span:first-child {
    display: inline;
    text-indent: 102px;
    position: relative;
    @apply text-accentPink;
    font-size: 60px;

    @screen sm {
      text-indent: 90px;
      font-size: 40px;
    }
    &:before {
      content: "$";
      position: absolute;
      right: 100%;
      font-size: 26px;
      font-weight: 500;
      vertical-align: text-top;
      @apply text-darkColor;

      @screen sm {
        font-size: 16px;
      }
    }
  }
}
</style>
