<template>
  <div class="web-development-section">
    <web-development-header />
  </div>
</template>

<script>
import WebDevelopmentHeader from "../components/web-development/web-development-header"
export default {
  name: "WebDevelopment",
  components: {
    WebDevelopmentHeader,
  },
}
</script>

<style lang="scss">
.web-development-section {
  width: 100%;
  background: transparent linear-gradient(181deg, #f3fbff 0%, #ffffff00 100%) 0% 0% no-repeat
    padding-box;
}
</style>
