<template>
  <div class="root">
    <div class="content">
      <ProductHuntBar v-if="fromProductHunt" />

      <TheHeader />

      <main>
        <BuyNow />
        <Pitch />
        <SocialProof />
        <Promo />
        <WhatsInside />
        <SignupForm />
        <FreeContent />
        <Informational />
        <Visuals />

        <hr class="divider" />

        <AboutTheAuthor />
        <PyPA />
      </main>

      <TheFooter />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

import Promo from "./components/Promo.vue";
import SignupForm from "./components/SignupForm.vue";
import Visuals from "./components/Visuals.vue";
import SocialProof from "./components/SocialProof.vue";
import FreeContent from "./components/FreeContent.vue";
import TheFooter from "./components/TheFooter.vue";
import Informational from "./components/Informational.vue";
import AboutTheAuthor from "./components/AboutTheAuthor.vue";
import WhatsInside from "./components/WhatsInside.vue";
import BuyNow from "./components/BuyNow.vue";
import TheHeader from "./components/TheHeader.vue";
import Pitch from "./components/Pitch.vue";
import PyPA from "./components/PyPA.vue";

export default {
  name: "App",
  components: {
    PyPA,
    Pitch,
    TheHeader,
    BuyNow,
    WhatsInside,
    AboutTheAuthor,
    TheFooter,
    Informational,
    FreeContent,
    SocialProof,
    Promo,
    ProductHuntBar: defineAsyncComponent(() => import("./components/ProductHuntBar.vue")),
    SignupForm,
    Visuals,
  },
  computed: {
    fromProductHunt() {
      return new URLSearchParams(window.location.search).get("ref") === "producthunt";
    },
  },
};
</script>

<style lang="scss">
.root {
  display: grid;
  grid-template-areas: ". content .";
  grid-template-columns: auto minmax(300px, 800px) auto;

  margin-top: 0;
}

.content {
  grid-area: content;
}

.divider {
  margin: var(--spacing-roomy) 15%;
}
</style>
