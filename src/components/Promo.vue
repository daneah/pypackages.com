<template>
  <div v-if="isValid" class="promo">
    <p>
      {{ benefit }} with the code <code>{{ code }}</code
      >!
    </p>
  </div>
</template>

<script>
export default {
  name: "Promo",
  data() {
    return {
      code: "pbhillard3",
      benefit: "Get 45% off until December 28th",
      expiration: new Date("2021-12-28"),
    };
  },
  computed: {
    isValid() {
      console.log(new Date());
      console.log(this.expiration);
      return new Date() <= this.expiration;
    },
  },
};
</script>

<style lang="scss" scoped>
.promo {
  padding: var(--spacing-roomy);
  background: var(--color-eton-blue);
  border-radius: 2px;
}
</style>
