<template>
  <div class="website-maintenance">
    <maintenance-header />
    <maintenance-who-we-are />
  </div>
</template>

<script>
import MaintenanceHeader from "../components/services/maintenance-header.vue"
import MaintenanceWhoWeAre from "../components/services/maintenance-who-we-are.vue"
export default {
  components: {
    MaintenanceHeader,
    MaintenanceWhoWeAre,
  },
}
</script>
