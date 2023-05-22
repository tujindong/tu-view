import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
// @ts-ignore
import DefineOptions from "unplugin-vue-define-options/vite";

export default defineConfig({
  build: {
    outDir: "es",
    minify: false,
    rollupOptions: {
      external: ["vue", /\.scss/],
      input: ["index.ts"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs",
          preserveModules: true,
          exports: "named",
          dir: "../tu-view/es",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          preserveModules: true,
          exports: "named",
          dir: "../tu-view/lib",
        },
      ],
    },
    lib: {
      entry: "./index.ts",
      name: "tu-view",
      fileName: "tu-view",
      formats: ["es", "umd", "cjs"],
    },
  },
  plugins: [
    vue(),
    DefineOptions(),
    dts({
      entryRoot: "src",
      outputDir: ["../tu-view/es/src", "../tu-view/lib/src"],
      tsConfigFilePath: "../../tsconfig.json",
    }),
    {
      name: "style",
      generateBundle(config, bundle) {
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler: any = bundle[key as any];
          this.emitFile({
            type: "asset",
            fileName: key,
            source: bundler.code.replace(/\.scss/g, ".css"),
          });
        }
      },
    },
  ],
});
