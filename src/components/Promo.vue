<template>
  <div
      v-if="isValid"
      class="promo"
  >
    <p>
      {{ benefit }} with the code <code>{{ code }}</code>!
    </p>

  </div>
</template>

<script>
export default {
  name: "Promo",
  data () {
    return {
      code: "mlhillard350",
      benefit: "Get 50% off in early access",
      expiration: new Date("2021-11-23"),
    }
  },
  computed: {
    isValid () {
      console.log(new Date());
      console.log(this.expiration);
      return new Date() <= this.expiration
    }
  },
}
</script>

<style lang="scss" scoped>
.promo {
  padding: var(--spacing-roomy);
  background: var(--color-eton-blue);
  border-radius: 2px;
}
</style>
