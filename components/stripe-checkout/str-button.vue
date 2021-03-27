<template>
  <button>
    <span>
      <slot></slot>
    </span>
    <loader v-if="isLoading" class="animate-spin h-5 w-10 mr-3" />
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
button {
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
