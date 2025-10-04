<template>
  <div class="text-input">
    <label :for="id" class="text-input__label">
      <slot />
    </label>
    <input
      :id="id"
      :placeholder="placeholder"
      :type="type"
      class="text-input__input"
      :name="name"
    />
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.text-input__label {
  font-weight: var(--font-weight-bold);
}

.text-input__input {
  display: block;
  margin-top: var(--spacing-cozy);
  padding: var(--spacing-cozy);
}
</style>
