<template>
  <section>
    <h1>Pricing Table</h1>
    <table v-for="{ category, id, services } in pricingTable" :key="id">
      <thead>
        <th>{{ category }}</th>
        <th v-for="(heading, index) in headings" :key="index">{{ heading }}</th>
      </thead>
      <tbody>
        <tr v-for="{ service, serviceId, availability } in services" :key="serviceId">
          <th>{{ service }}</th>
          <td v-for="(value, index) in availability" :key="index">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pricingTable: [],
      headings: ["Standard", "Business", "Premium"],
    }
  },
  async fetch() {
    this.pricingTable = await this.$content("pricing-table-content").fetch()
  },
}
</script>

<style lang="scss" scoped></style>
