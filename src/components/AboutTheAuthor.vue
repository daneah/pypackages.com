<template>
  <p>
    Dane Hillard is a second-time author with Manning Books. His first book,
    <em><PrimaryLink
      href="https://thepythonpro.com"
      target="_blank"
      trusted
    >Practices of the Python Pro</PrimaryLink></em>, is translated into several languages and has sold thousands of copies internationally.
  </p>
</template>

<script>
import PrimaryLink from "./atoms/PrimaryLink.vue";

export default {
  name: "AboutTheAuthor",
  components: {
    PrimaryLink,
  },
};
</script>
