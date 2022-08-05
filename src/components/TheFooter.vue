<template>
  <footer class="footer">
    <span class="copyright">© {{ copyrightYear }} Dane Hillard</span>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  computed: {
    copyrightYear() {
      const firstYear = 2021;
      const currentYear = new Date().getFullYear();
      return currentYear > firstYear
          ? `${firstYear}–${currentYear}`
          : firstYear;
    },
  },
}
</script>

<style scoped>
.footer {
  margin-top: var(--spacing-roomy);
}

.copyright {
  color: var(--color-font-muted);
  font-style: italic;
}
</style>