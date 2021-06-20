<template>
  <div>
    <website-mantainance-intro />
    <website-maintance-reviews />
  </div>
</template>

<script>
import WebsiteMaintanceReviews from "../../components/services/website-mantainance/website-maintance-reviews.vue"
import WebsiteMantainanceIntro from "../../components/services/website-mantainance/website-mantainance-intro.vue"

export default {
  components: { WebsiteMantainanceIntro, WebsiteMaintanceReviews },
}
</script>

<style lang="scss" scoped></style>
