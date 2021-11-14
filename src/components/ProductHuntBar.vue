<template>
  <div class="banner">
    <img class="logo" src="/producthunt-cat.png" height="250" width="250">
    <p class="offer">
      Welcome, hunters! Get 35% off with the code <span class="offer__code">producthunt35</span> at checkout!
    </p>
  </div>
</template>

<script>
export default {
  name: "ProductHuntBar",
}
</script>

<style lang="scss" scoped>
.banner {
  top: 0;
  left: 0;

  margin-bottom: var(--spacing-roomy);
  padding: var(--spacing-comfortable);
  background: var(--color-product-hunt);
  border-radius: 2px;

  display: grid;
  grid-template-columns: 100px auto;
  grid-gap: var(--spacing-roomy);
  align-items: center;
}

.offer {
  margin: 0;
  text-align: left;
  color: var(--color-font-inverse);

  @at-root #{&}__code {
    color: var(--color-font-inverse);
    font-family: var(--font-family-fixed-width);
    font-weight: var(--font-weight-bold);
  }
}

.logo {
  max-width: 100%;
  height: auto;
}
</style>
