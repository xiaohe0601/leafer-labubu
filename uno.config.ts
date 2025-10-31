import { defineConfig, presetIcons, presetWind3, transformerVariantGroup } from "unocss";

export default defineConfig({
  presets: [
    presetWind3(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        "display": "inline-block",
        "vertical-align": "middle"
      }
    })
  ],
  transformers: [
    transformerVariantGroup()
  ]
});