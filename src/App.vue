<template>
  <div class="content">
    <ProductHuntBar v-if="fromProductHunt" />

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
          />
        </a>
      </div>
      <div class="title">
        <h1 class="heading--1">Publishing Python Packages</h1>
        <span
          >by
          <PrimaryLink href="https://dane.engineering" target="_blank" trusted
            >Dane Hillard</PrimaryLink
          ></span
        >
      </div>
    </header>

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

    <aside class="social-proof">
      <strong>What people are saying:</strong>

      <blockquote class="review-quote">
        <p class="review-quote__body">
          This is the best introduction to Python packaging I've ever read.
          There are a lot of good best practices outlined. I will be purchasing
          this book for each of our software team members.
        </p>
      </blockquote>

      <blockquote class="review-quote">
        <p class="review-quote__body">
          This books goes beyond software engineers to DevOps teams / SRE teams
          and anyone generally interested in using Python in a production
          environment.
        </p>
      </blockquote>

      <blockquote class="review-quote">
        <p class="review-quote__body">
          As I read the first chapter I wished I could get my entire team to
          read it.
        </p>
      </blockquote>

      <blockquote class="review-quote">
        <p class="review-quote__body">
          If you want to avoid struggling to learn how to package Python
          modules, this is the ONLY book to get.
        </p>
      </blockquote>
    </aside>

    <main>
      <p>
        The life of a package maintainer can be hard. Beyond writing working
        code, you have to triage issues, review pull requests, and create
        releases regularly. Don't let the logistics of package management get in
        your way.
      </p>

      <p>
        I'm currently writing
        <strong
          ><em
            ><PrimaryLink
              href="https://www.manning.com/books/publishing-python-packages?utm_source=danehillard&utm_medium=affiliate&utm_campaign=book_hillard3_publishing_8_26_21&a_aid=danehillard&a_bid=3698229e"
              target="_blank"
              >Publishing Python Packages</PrimaryLink
            ></em
          ></strong
        >, a book about creating a streamlined, repeatable process for authoring
        and maintaining Python packages.
      </p>

      <Promo />

      <p>
        Whether you're looking to create your first published Python package or
        trying to reduce the maintenance burden of the packages you already work
        on, <em>Publishing Python Packages</em> has something for you:
      </p>

      <ul>
        <li>
          Create an effective development environment for package authoring.
        </li>
        <li>Explore the anatomy of a Python package in depth.</li>
        <li>
          Create an automated, continuous integration pipeline for code quality
          and testing.
        </li>
        <li>
          Publish a Python package to the
          <PrimaryLink href="https://pypi.org" target="_blank"
            >Python Package Index</PrimaryLink
          >
          (PyPI) and learn how to publish packages to private repositories for
          your organization.
        </li>
      </ul>

      <p>
        Sign up below to be the first to know about updates on the
        book&mdash;right now the production team is working on making the book ready for print.
      </p>

      <SignupForm class="email-signup" />

      <Visuals />

      <hr class="divider" />

      <p>
        Dane Hillard is a second-time author with Manning Books. His first book,
        <em
          ><PrimaryLink href="https://thepythonpro.com" target="_blank" trusted
            >Practices of the Python Pro</PrimaryLink
          ></em
        >, is translated into several languages and has sold thousands of copies
        internationally.
      </p>

      <p>
        To learn the basics of Python packaging, head over to the official
        <PrimaryLink href="https://packaging.python.org/" target="_blank"
          >Python Packaging User Guide</PrimaryLink
        >.
      </p>
    </main>

    <footer class="footer">
      <span class="copyright">© {{ copyrightYear }} Dane Hillard</span>
    </footer>
  </div>
</template>

<script>
import PrimaryButton from "./components/PrimaryButton.vue";
import PrimaryLink from "./components/PrimaryLink.vue";
import Promo from "./components/Promo.vue";
import ProductHuntBar from "./components/ProductHuntBar.vue";
import SignupForm from "./components/SignupForm.vue";
import Visuals from "./components/Visuals.vue";

export default {
  name: "App",
  components: {
    PrimaryButton,
    PrimaryLink,
    Promo,
    ProductHuntBar,
    SignupForm,
    Visuals,
  },
  data() {
    return {
      numCopiesSold: 790,
    };
  },
  computed: {
    copyrightYear() {
      const firstYear = 2021;
      const currentYear = new Date().getFullYear();
      return currentYear > firstYear
        ? `${firstYear}–${currentYear}`
        : firstYear;
    },
    fromProductHunt() {
      return (
        new URLSearchParams(window.location.search).get("ref") === "producthunt"
      );
    },
  },
};
</script>

<style lang="scss">
#app {
  display: grid;
  grid-template-areas: ". content .";
  grid-template-columns: auto minmax(300px, 800px) auto;

  margin-top: 0;
}

.content {
  grid-area: content;
}

.cover {
  margin-bottom: var(--spacing-roomy);
  text-align: center;

  @at-root #{&}--with-banner {
    margin-top: var(--spacing-roomy);
  }
}

.divider {
  margin: var(--spacing-roomy) 15%;
}

.footer {
  margin-top: var(--spacing-roomy);
}

.email-signup {
  margin: var(--spacing-roomy) 0;
}

.copyright {
  color: var(--color-font-muted);
  font-style: italic;
}

.copies-sold {
  display: block;
  margin: var(--spacing-roomy) auto;
  text-align: center;
}

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
  font-family: "Times New Roman";
}

.review-quote__body {
  margin-left: var(--spacing-cozy);
}

.buy-now {
  margin-left: var(--spacing-cozy);
}
</style>
