<template>
  <section>
    <h1>Pricing Table</h1>
    <pre>
        {{ pricingTable }}
    </pre>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pricingTable: [],
    }
  },
  async fetch() {
    this.pricingTable = await this.$content("pricing-table-content").fetch()
  },
}
</script>

<style lang="scss" scoped></style>
