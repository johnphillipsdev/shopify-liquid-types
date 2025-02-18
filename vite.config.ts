import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "./src/index.ts",
      output: {
        entryFileNames: "bundle.js",
      },
    },
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
});
