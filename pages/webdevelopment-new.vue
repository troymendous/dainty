<template>
  <div>
    <header-section />
    <job-description />
    <services-offered />
  </div>
</template>

<script>
import HeaderSection from "../components/web-development/header-section"
import JobDescription from "../components/web-development/job-description"
import ServicesOffered from "../components/web-development/services-offered"

export default {
  components: {
    HeaderSection,
    JobDescription,
    ServicesOffered,
  },
}
</script>

<style></style>
