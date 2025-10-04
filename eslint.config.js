import globals from "globals";
import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...vue.configs["flat/recommended"],
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      vue,
      prettier,
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/html-indent": "off",
      "vue/html-closing-bracket-newline": "off",
      "vue/html-self-closing": "off",
      "vue/max-attributes-per-line": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/multiline-html-element-content-newline": "off",
      "vue/attributes-order": "warn",
      "vue/no-useless-template-attributes": "warn",
    },
  },
];
