<template>
  <div class="portfolio">
    <portfolio-header-temp></portfolio-header-temp>
    <portfolio-body></portfolio-body>
  </div>
</template>

<script>
import PortfolioBody from "../components/portfolio/portfolio-body"
import PortfolioHeaderTemp from "../components/portfolio/portfolio-header_temp"
export default {
  name: "Portfolio",
  components: { PortfolioHeaderTemp, PortfolioBody },
}
</script>

<style scoped></style>
