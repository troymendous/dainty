<template>
  <div class="on-boarding-section">
    <on-boarding-header />
  </div>
</template>

<script>
import OnBoardingHeader from "../components/on-boarding/on-boarding-header"
export default {
  name: "WebDevelopment",
  components: {
    OnBoardingHeader,
  },
}
</script>

<style lang="scss">
.on-boarding-section {
  width: 100%;
  background: transparent linear-gradient(181deg, #f3fbff 0%, #ffffff00 100%) 0% 0% no-repeat
    padding-box;
}
</style>
