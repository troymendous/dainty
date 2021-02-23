<template>
  <div>
    <pricing-cards />
    <pricing-table />
  </div>
</template>

<script>
import PricingCards from "../components/home/pricing-cards.vue"
import PricingTable from "../components/pricing-table.vue"

export default {
  components: {
    PricingCards,
    PricingTable,
  },
}
</script>

<style lang="scss"></style>
