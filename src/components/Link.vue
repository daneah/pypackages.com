<template>
  <a
    class="link"
    :href="href"
    :target="target"
    :rel="(target === '_blank' && !trusted) ? 'noopener' : null"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: "Link",
  props: {
    href: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      default: "_self",
    },
    trusted: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  color: var(--color-interactive-text);
}
</style>