<template>
  <button
    class="button"
    :type="type"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "button",
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: var(--spacing-cozy);
  background: var(--color-interactive-primary);
  border: none;
  border-radius: var(--border-radius-button);
  color: white;

  &:hover {
    cursor: pointer;
  }
}
</style>