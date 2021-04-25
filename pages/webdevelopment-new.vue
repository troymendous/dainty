<template>
  <div>
    <header-section />
    <job-description />
    <services-offered />
    <how-it-works />
    <div id="map-wrap" style="height: 100vh">
      <no-ssr>
        <l-map :zoom="2" :center="[0, 0]" :padding="[0, 0, 0, 0]">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" :noWrap="true"></l-tile-layer>
          <l-marker :lat-lng="[55.9464418, 8.1277591]"></l-marker>
        </l-map>
      </no-ssr>
    </div>
    <pricing-section />
  </div>
</template>

<script>
import HeaderSection from "../components/web-development/header-section"
import HowItWorks from "../components/web-development/how-it-works.vue"
import JobDescription from "../components/web-development/job-description"
import ServicesOffered from "../components/web-development/services-offered"
import PricingSection from "../components/web-development/pricing-section"

export default {
  components: {
    HeaderSection,
    JobDescription,
    ServicesOffered,
    HowItWorks,
    PricingSection,
  },
  mounted() {
    // console.log(this.$L.)
    // const map = this.$L.map("map", {
    //   minZoom: 1,
    //   maxZoom: 1,
    // })
    // map.setView([0, 0], 0)
  },
}
</script>

<style></style>
