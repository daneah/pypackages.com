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
          <span>by <Link href="https://dane.engineering" target="_blank" trusted>Dane Hillard</Link></span>
      </div>
    </header>
    <aside class="copies-sold">
        <em>
            Over <strong>{{numCopiesSold}}</strong> copies sold so far!
        </em>
    </aside>
    <main>
      <p>
        The life of a package maintainer can be hard.
        Beyond writing working code, you have to triage issues, review pull requests, and create releases regularly.
        Don't let the logistics of package management get in your way.
      </p>

      <p>
        I'm currently writing <strong><em><Link href="https://www.manning.com/books/publishing-python-packages?utm_source=danehillard&utm_medium=affiliate&utm_campaign=book_hillard3_publishing_8_26_21&a_aid=danehillard&a_bid=3698229e" target="_blank">Publishing Python Packages</Link></em></strong>,
        a book about creating a streamlined, repeatable process for authoring and maintaining Python packages.
      </p>

      <Promo />

      <p>
        Whether you're looking to create your first published Python package or trying to reduce the maintenance burden of the packages you already work on, <em>Publishing Python Packages</em> has something for you:
      </p>

      <ul>
        <li>
          Create an effective development environment for package authoring.
        </li>
        <li>
          Explore the anatomy of a Python package in depth.
        </li>
        <li>
          Create an automated, continuous integration pipeline for code quality and testing.
        </li>
        <li>
          Publish a Python package to the <Link href="https://pypi.org" target="_blank">Python Package Index</Link> (PyPI) and learn how to publish packages to private repositories for your organization.
        </li>
      </ul>

      <p>
        Sign up below to be the first to know about updates on the book&mdash;the first {{ numChapters }} chapters are available in Manning's early access program (MEAP), where you can provide feedback as the book evolves.
        The book is in its third and final review before heading to production.
      </p>

      <SignupForm class="email-signup" />

      <Visuals />

      <hr class="divider" />

      <p>
        Dane Hillard is a second-time author with Manning Books.
        His first book, <em><Link href="https://thepythonpro.com" target="_blank" trusted>Practices of the Python Pro</Link></em>, is translated into several languages and has sold thousands of copies internationally.
      </p>

      <p>
        To learn the basics of Python packaging, head over to the official <Link href="https://packaging.python.org/" target="_blank">Python Packaging User Guide</Link>.
      </p>
    </main>

    <footer class="footer">
      <span class="copyright">© {{ copyrightYear }} Dane Hillard</span>
    </footer>
  </div>
</template>

<script>
import Button from "./components/Button.vue";
import Link from "./components/Link.vue";
import Promo from "./components/Promo.vue";
import ProductHuntBar from "./components/ProductHuntBar.vue";
import SignupForm from "./components/SignupForm.vue";
import Visuals from "./components/Visuals.vue";

export default {
  name: 'App',
  components: {
    Button,
    Link,
    Promo,
    ProductHuntBar,
    SignupForm,
    Visuals,
  },
  data () {
    return {
        numChapters: "nine",
        numCopiesSold: 673,
    }
  },
  computed: {
    copyrightYear () {
      const firstYear = 2021;
      const currentYear = new Date().getFullYear();
      return (currentYear > firstYear) ? `${firstYear}–${currentYear}` : firstYear;
    },
    fromProductHunt () {
      return new URLSearchParams(window.location.search).get("ref") === "producthunt";
    },
  }
}
</script>

<style lang="scss">
#app {
  display: grid;
  grid-template-areas:
    ". content .";
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
</style>
