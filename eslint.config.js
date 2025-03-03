import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettier,
  ...vue.configs["flat/recommended"],
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
      },
    },
    plugins: {
      vue,
    },
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
];

