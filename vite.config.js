import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        vue: mode === "production" ? "vue/dist/vue.runtime.esm-browser.js" : "vue/dist/vue.runtime.esm-browser.prod.js",
      }
    }
  })
}
