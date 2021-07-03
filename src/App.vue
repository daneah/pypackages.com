<template>
  <div class="content">
    <div class="twitter-wrapper">
      <div class="sticky-wrapper">
        <a
            href="https://twitter.com/intent/tweet?screen_name=easyaspython&ref_src=twsrc%5Etfw"
            class="twitter-mention-button"
            data-show-screen-name="false"
            data-dnt="true"
            data-show-count="false"
        >
          Tweet to @easyaspython
        </a>
        <a
            class="twitter-timeline"
            target="_blank"
            rel="noopener nofollow"
            href="https://twitter.com/easyaspython/timelines/1405995131099127811?ref_src=twsrc%5Etfw"
            data-height="500"
        >
          Praise for <em>Publishing Python Packages</em> on Twitter
        </a>
      </div>
    </div>

    <header class="header">
      <h1 class="heading--1">Publishing Python Packages</h1>
      <span>by <Link href="https://dane.engineering" target="_blank" trusted>Dane Hillard</Link></span>
    </header>
    <main class="main">
      <p>
        The life of a package maintainer can be hard.
        Beyond writing working code, you have to triage issues, review pull requests, and create releases regularly.
        Don't let the logistics of package management get in your way.
      </p>

      <p>
        I'm currently writing <strong><em>Publishing Python Packages</em></strong>, a book about creating a streamlined, repeatable process for authoring and maintaining Python packages.
        Whether you're looking to create your first published Python package or trying to reduce the maintenance burden of the packages you already work on, <em>Publishing Python Packages</em> has something for you.
      </p>

      <p>
        Sign up below to be the first to know about updates on the book&mdash;I'm currently working toward making the book available in Manning's early access program (MEAP), where you can provide feedback as the book evolves.
      </p>

      <SignupForm class="email-signup" />

      <p>
        In <em>Publishing Python Packages</em>, you'll:
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
            Publish a Python package to the <Link href="https://pypi.org" target="_blank">Python Package Index</Link> (PyPI).
          </li>
        </ul>
      </p>

      <Visuals />

      <hr class="divider" />

      <p>
        Dane Hillard is a second-time author with Manning Books.
        His first book, <em><Link href="https://thepythonpro.com" target="_blank" trusted>Practices of the Python Pro</Link></em>, has sold thousands of copies internationally and is translated into Korean and Chinese.
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
import SignupForm from "./components/SignupForm.vue";
import Visuals from "./components/Visuals.vue";

export default {
  name: 'App',
  components: {
    Button,
    Link,
    SignupForm,
    Visuals,
  },
  computed: {
    copyrightYear () {
      const firstYear = 2021;
      const currentYear = new Date().getFullYear();
      return (currentYear > firstYear) ? `${firstYear}–${currentYear}` : firstYear;
    }
  }
}
</script>

<style lang="scss">
.content {
  display: grid;
  grid-template-areas:
    ". header . twitter"
    ". main . twitter"
    ". footer . .";
  grid-template-columns: auto minmax(300px, 800px) auto 250px;

  margin-top: 0;

  @media screen and (max-width: 1240px) {
    grid-template-areas:
      ". header . ."
      ". main . ."
      ". twitter . ."
      ". footer . .";
    grid-template-columns: auto minmax(300px, 800px) auto;
  }
}

.header {
  margin-top: 0;
  grid-area: header;
}

.main {
  grid-area: main;
}

.divider {
  margin: var(--spacing-roomy) 15%;
}

.footer {
  grid-area: footer;
  margin-top: var(--spacing-roomy);
}

.email-signup {
  margin: var(--spacing-roomy) 0;
}

.copyright {
  color: var(--color-font-muted);
  font-style: italic;
}

.twitter-wrapper {
  grid-area: twitter;

  @media screen and (max-width: 1240px) {
    margin-top: var(--spacing-roomy);
  }
}

.sticky-wrapper {
  @media screen and (min-width: 1241px) {
    position: sticky;
    top: var(--spacing-roomy);
  }
}
</style>
