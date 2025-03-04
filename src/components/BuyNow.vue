<template>
  <aside class="copies-sold">
    <em>
      Over <strong>{{ numCopiesSold }}</strong> copies sold so far!
    </em>

    <ul>
      <li>
        <PrimaryLink
          href="https://www.manning.com/books/publishing-python-packages?utm_source=danehillard&utm_medium=affiliate&utm_campaign=book_hillard3_publishing_8_26_21&a_aid=danehillard&a_bid=3698229e"
          target="_blank"
        >
          Buy from Manning
        </PrimaryLink>
      </li>
      <li>
        <PrimaryLink
          href="https://amzn.to/3TI6ine"
          target="_blank"
        >
          Buy from Amazon
        </PrimaryLink>
        (affiliate link)
      </li>
      <li>
        <PrimaryLink
          href="https://learning.oreilly.com/library/view/publishing-python-packages/9781617299919/"
          target="_blank"
        >
          Read on O'Reilly
        </PrimaryLink>
      </li>
    </ul>
  </aside>
</template>

<script>
import PrimaryLink from "./atoms/PrimaryLink.vue";

export default {
  name: "BuyNow",
  components: {
    PrimaryLink,
  },
  data() {
    return {
      numCopiesSold: 2000,
    };
  },
};
</script>

<style scoped>
.copies-sold {
  display: block;
  margin: var(--spacing-roomy) auto;
  text-align: center;
}
</style>
