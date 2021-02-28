<template>
  <div>
    <pricing-cards />
    <testimomials />
    <pricing-table />
  </div>
</template>

<script>
import PricingCards from "../../components/home/pricing-cards.vue"
import PricingTable from "../../components/pricing-table.vue"
import Testimomials from "../../components/testimomials.vue"

export default {
  components: {
    PricingCards,
    PricingTable,
    Testimomials,
  },
}
</script>

<style lang="scss"></style>
