<template>
  <div>
    <website-management-header />
    <website-management-body />
  </div>
</template>

<script>
import WebsiteManagementHeader from "~/components/website-management/website-management-header.vue"
import WebsiteManagementBody from "~/components/website-management/website-management-body.vue"

export default {
  name: "WebsiteManagement",
  components: {
    WebsiteManagementBody,
    WebsiteManagementHeader,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
