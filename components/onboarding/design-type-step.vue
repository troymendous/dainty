<template>
  <div class="container pt-40">
    <h1>Design Type Step</h1>
    <div v-for="(el, index) in designTypes" :key="{ index }" class="mb-4">
      <label class="block w-40 w-40">
        <div class="flex justify-end">
          {{ el.checked }}
          <!-- The checkbox -->
          <input type="checkbox" v-model="el.checked" />
        </div>

        <!-- The image -->
        <img :src="el.iconPath" width="60" height="60" alt="Image" />

        <!-- The text heading -->
        <span>{{ el.type }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    designTypes() {
      return this.$store.state.designTypes
    },
  },
}
</script>
<style lang="scss" scoped></style>
