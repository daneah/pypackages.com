<template>
  <section class="free-content">
    <p>
      Manning has graciously made some of the book's content available for free, which I hope will help you make a decision to purchase the full text:
    </p>

    <ul>
      <li>
        <em>
          <PrimaryLink variant="dark" target="_blank" :trusted="false" href="https://freecontent.manning.com/continuous-integration-with-github-actions/">
            Continuous Integration with GitHub Actions
          </PrimaryLink>
        </em>
      </li>
      <li>
        <em>
          <PrimaryLink variant="dark" target="_blank" :trusted="false" href="https://freecontent.manning.com/what-is-a-python-package-anyway/">
            What is a (Python) Package, Anyway?
          </PrimaryLink>
        </em>
      </li>
      <li>
        <em>
          <PrimaryLink variant="dark" target="_blank" :trusted="false" href="https://freecontent.manning.com/parts-of-the-python-build-system/">
            Parts of the Python Build System
          </PrimaryLink>
        </em>
      </li>
    </ul>
  </section>
</template>

<script>
import PrimaryLink from "./atoms/PrimaryLink.vue";

export default {
  name: "FreeContent",
  components: {
    PrimaryLink,
  }
}
</script>

<style scoped>
.free-content {
  padding: var(--spacing-roomy);
  background: var(--color-eton-blue);
  border-radius: 2px;
}
</style>