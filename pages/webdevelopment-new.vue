<template>
  <div>
    <header-section />
    <job-description />
    <services-offered />
    <how-it-works />
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
