import { defineConfig } from "@xiaohe01/stylelint-config";

export default defineConfig({
  ignoreFiles: [
    "./**/node_modules/**",
    "./**/public/**",
    "./**/dist/**"
  ]
});