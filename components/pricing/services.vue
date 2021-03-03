<template>
  <ul>
    <li v-for="{ type, isOffered, serviceId } in services.slice(0, 7)" v-bind:key="serviceId">
      <check-icon v-if="isOffered" />
      <cross-icon v-else />
      <span>{{ type }}</span>
    </li>
    <li role="button" @click="isActive = !isActive" class="toggle-services">View more services</li>
    <div v-if="isActive">
      <li v-for="{ type, isOffered, serviceId } in services.slice(8)" v-bind:key="serviceId">
        <check-icon v-if="isOffered" />
        <cross-icon v-else />
        <span>{{ type }}</span>
      </li>
    </div>
  </ul>
</template>

<script>
export default {
  props: {
    services: Array,
  },
  data() {
    return {
      isActive: false,
    }
  },
}
</script>

<style lang="scss" scoped>
ul {
  text-align: left;
}

svg {
  display: inline-block !important;
  margin-right: 0.3rem;
  width: 12px;
  height: 12px;
}

li {
  padding: 0.6rem 0;
}

.toggle-services {
  @apply text-accentPink;
}
</style>
