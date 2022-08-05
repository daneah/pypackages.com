<template>
  <p>
    To learn the basics of Python packaging, head over to the official
    <PrimaryLink href="https://packaging.python.org/" target="_blank"
    >Python Packaging User Guide</PrimaryLink
    >.
  </p>
</template>

<script>
import PrimaryLink from "./atoms/PrimaryLink.vue";

export default {
  name: "PyPA",
  components: {
    PrimaryLink,
  },
}
</script>