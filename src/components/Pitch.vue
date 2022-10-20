<template>
  <section>
    <p>
      The life of a package maintainer can be hard. Beyond writing working code, you have to triage
      issues, review pull requests, and create releases regularly. Don't let the logistics of
      package management get in your way.
    </p>

    <p>
      <strong
        ><em
          ><PrimaryLink
            href="https://www.manning.com/books/publishing-python-packages?utm_source=danehillard&utm_medium=affiliate&utm_campaign=book_hillard3_publishing_8_26_21&a_aid=danehillard&a_bid=3698229e"
            target="_blank"
            >Publishing Python Packages: Test, share, and automate your projects</PrimaryLink
          ></em
        ></strong
      >
      is a book about creating a streamlined, repeatable process for authoring and maintaining
      Python packages.
    </p>
  </section>
</template>

<script>
import PrimaryLink from "./atoms/PrimaryLink.vue";

export default {
  name: "Pitch",
  components: {
    PrimaryLink,
  },
};
</script>

<style scoped></style>
