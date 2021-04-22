<template>
  <div>
    <header-section />
    <job-description />
    <services-offered />
    <how-it-works />
    <div id="map-wrap" style="height: 100vh">
      <no-ssr>
        <l-map :zoom="13" :center="[55.9464418, 8.1277591]">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <l-marker :lat-lng="[55.9464418, 8.1277591]"></l-marker>
        </l-map>
      </no-ssr>
    </div>
  </div>
</template>

<script>
import HeaderSection from "../components/web-development/header-section"
import HowItWorks from "../components/web-development/how-it-works.vue"
import JobDescription from "../components/web-development/job-description"
import ServicesOffered from "../components/web-development/services-offered"

export default {
  components: {
    HeaderSection,
    JobDescription,
    ServicesOffered,
    HowItWorks,
  },
}
</script>

<style></style>
