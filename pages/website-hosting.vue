<template>
  <div>
    <website-hosting-header />
    <website-hosting-body />
  </div>
</template>

<script>
import WebsiteHostingHeader from "~/components/website-hosting/website-hosting-header.vue"
import WebsiteHostingBody from "~/components/website-hosting/website-hosting-body.vue"

export default {
  name: "WebsiteHosting",
  components: {
    WebsiteHostingBody,
    WebsiteHostingHeader,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
