<template>
  <header class="header">
    <div class="cover">
      <a
        href="https://www.manning.com/books/publishing-python-packages?utm_source=danehillard&utm_medium=affiliate&utm_campaign=book_hillard3_publishing_8_26_21&a_aid=danehillard&a_bid=3698229e"
        target="_blank"
        rel="noopener nofollow"
      >
        <img
          src="/publishing-python-packages-cover.jpg"
          width="264"
          height="331"
          alt="Book cover for Publishing Python Packages: Test, share, and automate your projects by Dane Hillard from Manning Books"
        >
      </a>
    </div>
    <div class="title">
      <h1 class="heading--1">
        Publishing Python Packages<span class="subtitle">Test, share, and automate your projects</span>
      </h1>
      <span>by
        <PrimaryLink
          href="https://dane.engineering"
          target="_blank"
          trusted
        >Dane Hillard</PrimaryLink>
        with foreword by
        <PrimaryLink
          href="https://www.dabeaz.com/"
          target="_blank"
        >David Beazley</PrimaryLink></span>
    </div>
  </header>
</template>

<script>
import PrimaryLink from "./atoms/PrimaryLink.vue";

export default {
  name: "TheHeader",
  components: {
    PrimaryLink,
  },
};
</script>

<style lang="scss" scoped>
.cover {
  margin-bottom: var(--spacing-roomy);
  text-align: center;

  @at-root #{&}--with-banner {
    margin-top: var(--spacing-roomy);
  }
}
</style>
