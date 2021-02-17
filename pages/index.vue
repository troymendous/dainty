<template>
  <div>
    <banner-section></banner-section>
    <features-section />
  </div>
</template>

<script>
import BannerSection from "../components/home/banner-section"
import FeaturesSection from "../components/home/features-section"

export default {
  components: {
    BannerSection,
    FeaturesSection,
  },
}
</script>

<style lang="scss" scoped></style>
