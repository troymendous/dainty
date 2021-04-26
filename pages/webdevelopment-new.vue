<template>
  <div>
    <header-section />
    <job-description />
    <services-offered />
    <how-it-works />
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
}
</script>

<style></style>
