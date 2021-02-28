<template>
  <div
    class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
  >
    <input
      type="checkbox"
      name="toggle"
      id="toggle"
      class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
      v-model="checked"
      v-on:change="$emit('change', checked)"
    />
    <label
      for="toggle"
      class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
    ></label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.toggle-checkbox:checked {
  @apply right-0 border-green-400;
  right: 0;
  border-color: #68d391;
}
.toggle-checkbox:checked {
  @apply bg-green-400;
  background-color: #68d391;
}
</style>
