<template>
  <aside class="social-proof">
    <div>
      <strong>What people are saying:</strong>

      <blockquote class="review-quote">
        <p class="review-quote__body">
          This is the best introduction to Python packaging I've ever read. There are a lot of good
          best practices outlined. I will be purchasing this book for each of our software team
          members.
        </p>
      </blockquote>

      <blockquote class="review-quote">
        <p class="review-quote__body">
          This books goes beyond software engineers to DevOps teams / SRE teams and anyone generally
          interested in using Python in a production environment.
        </p>
      </blockquote>

      <blockquote class="review-quote">
        <p class="review-quote__body">
          As I read the first chapter I wished I could get my entire team to read it.
        </p>
      </blockquote>

      <blockquote class="review-quote">
        <p class="review-quote__body">
          If you want to avoid struggling to learn how to package Python modules, this is the ONLY
          book to get.
        </p>
      </blockquote>
    </div>

    <div>
      <strong>Success stories:</strong>

      <ul>
        <li>
          <em>
            <PrimaryLink
              href="https://doughellmann.com/posts/virtualenvwrapper-removing-bitrot-packaging/"
              target="_blank"
            >
              Removing Bitrot From Virtualenvwrapper's Packaging, with a little help from my friends
            </PrimaryLink>
          </em>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import PrimaryLink from "./atoms/PrimaryLink.vue";

export default {
  name: "SocialProof",
  components: {
    PrimaryLink,
  },
};
</script>

<style scoped>
.social-proof {
  border: 1px solid var(--color-font-muted);
  padding: var(--spacing-roomy);
}

.review-quote {
  font-style: italic;
  display: flex;
}

.review-quote::before {
  content: "“";
  color: var(--color-font-muted);
  font-size: var(--font-size-huge);
  font-family: "Times New Roman", serif;
}

.review-quote__body {
  margin-left: var(--spacing-cozy);
}
</style>
