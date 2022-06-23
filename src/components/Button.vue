<template>
  <template v-if="href">
    <a
      class="button"
      :href="href"
      :target="external ? '_blank' : ''"
      :rel="external ? 'noopener nofollow' : ''"
    >
      <slot />
    </a>
  </template>
  <template v-else>
    <button
      class="button"
      :type="type"
    >
      <slot />
    </button>
  </template>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      required: false,
      default: "button",
    },
    href: {
      type: String,
      required: false,
      default: undefined,
    },
    external: {
      type: Boolean,
      required: false,
      default: true,
    },
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
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
}
</style>
