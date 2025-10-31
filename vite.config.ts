import path from "node:path";
import process from "node:process";
import Vue from "@vitejs/plugin-vue";
import { isCustomElement } from "leafer-vue/compiler";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";

function r(...paths: string[]) {
  return path.resolve(process.cwd(), ".", ...paths);
}

export default defineConfig({
  resolve: {
    alias: {
      "@": r("src")
    }
  },
  plugins: [
    AutoImport({
      dts: "./types/auto-imports.d.ts",
      imports: [
        "vue",
        "@vueuse/core"
      ],
      dirs: [
        "src/composables",
        "src/utils"
      ],
      vueTemplate: true
    }),
    Components({
      dts: "./types/components.d.ts",
      dirs: [
        "src/components"
      ],
      directoryAsNamespace: true,
      collapseSamePrefixes: true
    }),
    Vue({
      template: {
        compilerOptions: {
          isCustomElement
        }
      }
    }),
    UnoCSS()
  ],
  build: {
    target: "es6",
    cssTarget: "chrome61"
  }
});