<template>
  <aside class="copies-sold">
    <em>
      Over <strong>{{ numCopiesSold }}</strong> copies sold so far!
    </em>

    <PrimaryButton
        class="buy-now"
        href="https://www.manning.com/books/publishing-python-packages?utm_source=danehillard&utm_medium=affiliate&utm_campaign=book_hillard3_publishing_8_26_21&a_aid=danehillard&a_bid=3698229e"
        :external="true"
    >
      Buy now
    </PrimaryButton>
  </aside>
</template>

<script>
import PrimaryButton from "./atoms/PrimaryButton.vue";

export default {
  name: "BuyNow",
  components: {
    PrimaryButton,
  },
  data() {
    return {
      numCopiesSold: 814,
    };
  },
}
</script>

<style scoped>
.copies-sold {
  display: block;
  margin: var(--spacing-roomy) auto;
  text-align: center;
}

.buy-now {
  margin-left: var(--spacing-cozy);
}
</style>
