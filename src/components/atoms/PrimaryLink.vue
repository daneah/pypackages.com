<template>
  <a
    :class="['link', variant ? `link--${variant}` : null]"
    :href="href"
    :target="target"
    :rel="target === '_blank' && !trusted ? 'noopener nofollow' : null"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: "PrimaryLink",
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
    },
    variant: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.link {
  display: inline-block;
  vertical-align: top;
  color: var(--color-interactive-text);
}

.link--dark {
  color: var(--color-font);
}
</style>
