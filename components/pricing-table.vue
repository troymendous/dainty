<template>
  <section class="pricing-table">
    <h2>Features Comparison</h2>
    <table v-for="{ category, id, services } in pricingTable" :key="id">
      <thead>
        <tr>
          <th class="pricing-features_table-row-heading">{{ category }}</th>
          <th
            v-for="(heading, index) in headings"
            :key="index"
            class="pricing-features_table-column-heading"
          >
            {{ heading }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ service, serviceId, availability } in services" :key="serviceId">
          <th class="pricing-features_table-row-sub-heading">{{ service }}</th>
          <td
            v-for="(value, index) in availability"
            :key="index"
            class="pricing-features_table-cell"
          >
            <span v-if="value === 'Available'"><check-icon /> </span>
            <span v-else> {{ value }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import checkIcon from "./home/plans/check-icon.vue"
// import CheckIcon from "./plans/check-icon.vue"
export default {
  components: { checkIcon },
  data() {
    return {
      pricingTable: [],
      headings: ["Core", "Plus", "Enterprise"],
    }
  },
  async fetch() {
    this.pricingTable = await this.$content("pricing-table-content").fetch()
  },
}
</script>

<style lang="scss" scoped>
.pricing-table {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 6rem 2rem;
}

h2 {
  padding: 3rem 0;
}

table {
  position: relative;
  @apply table-fixed;
  width: 100%;
}

table,
td,
th {
  //   border: 1px solid red;
  border-bottom: 2px solid #eef2f6;
}

th {
  position: sticky;
  top: 90px;
  z-index: 3;
  font-size: 20px;
  line-height: 75px;
  @apply text-darkColor;
  background: #fff;
}

.pricing-features_table-row-heading,
.pricing-features_table-row-sub-heading {
  text-align: left;
}

.pricing-features_table-row-heading {
  text-transform: capitalize;
}

.pricing-features_table-heading {
  background: deeppink;
  line-height: 75px;
  font-weight: 700;
}

.pricing-features_table-row-sub-heading {
  z-index: 0 !important;
  padding-left: 32px;
  font-size: 15px;
  opacity: 0.8;
  white-space: nowrap;
}

.pricing-features_table-column-heading {
  text-align: center;
  width: 220px;
}

.pricing-features_table-cell {
  padding: 18px 0;
  text-align: center;
  @apply text-lightColor;
  @apply text-base;

  > span {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
