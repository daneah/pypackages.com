<template>
  <p>
    In addition to English, <em>Publishing Python Packages</em> is available in the following languages:
  </p>

  <ul>
    <li>
      <PrimaryLink
        href="https://eksmo.ru/book/publikatsiya-paketov-python-ITD1348236/"
        target="_blank"
      >
        Russian
      </PrimaryLink>
    </li>
  </ul>

  <p>
    and is currently being translated into Simplified Chinese.
  </p>
</template>

<script>
import PrimaryLink from "./atoms/PrimaryLink.vue";

export default {
  name: "Informational",
  components: {
    PrimaryLink,
  },
};
</script>
