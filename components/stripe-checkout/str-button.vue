<template>
  <button id="str-btn" type="submit">
    <span>
      <slot></slot>
    </span>
    <loader v-if="isLoading" class="mr-3 h-5 w-10 animate-spin" />
  </button>
</template>

<script>
import loader from "../loader"
export default {
  components: {
    loader,
  },
  props: {
    isLoading: Boolean,
  },
  watch: {
    isLoading(newValue, oldVal) {
      if (newValue === true) {
        const el = document.getElementById("str-btn")
        el.disabled = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  display: block;
  border: 2px solid var(--acc-purple-color);
  border-radius: 8px;
  padding: 0.75rem;
  font-weight: 500;
  @apply text-accentPurple;
  margin-top: 2rem;
  min-width: 220px;

  svg {
    display: inline-block;
  }

  &:hover,
  &:active,
  &:disabled {
    background: var(--acc-pink-color);
    border: 2px solid transparent;
    color: #fff;
  }

  &:disabled {
    opacity: 0.8;
  }
}
</style>
