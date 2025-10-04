<template>
  <p>
    In addition to English, <em>Publishing Python Packages</em> is available in the following
    languages:
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
    <li>
      <PrimaryLink href="https://www.tenlong.com.tw/products/9787302694007" target="_blank">
        Simplified Chinese
      </PrimaryLink>
    </li>
  </ul>
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
