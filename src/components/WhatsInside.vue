<template>
  <section>
    <p>
      Whether you're looking to create your first published Python package or trying to reduce the
      maintenance burden of the packages you already work on,
      <em>Publishing Python Packages: Test, share, and automate your projects</em>
      has something for you:
    </p>

    <ul>
      <li>Create an effective development environment for package authoring.</li>
      <li>Explore the anatomy of a Python package in depth.</li>
      <li>Create an automated, continuous integration pipeline for code quality and testing.</li>
      <li>
        Publish a Python package to the
        <PrimaryLink
          href="https://pypi.org"
          target="_blank"
        >
          Python Package Index
        </PrimaryLink>
        (PyPI) and learn how to publish packages to private repositories for your organization.
      </li>
    </ul>
  </section>
</template>

<script>
import PrimaryLink from "./atoms/PrimaryLink.vue";

export default {
  name: "WhatsInside",
  components: {
    PrimaryLink,
  },
};
</script>

<style scoped></style>
