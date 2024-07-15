import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      include: "src/",
    }),
  ],
  build: {
    minify: true,
    lib: {
      entry: path.join(__dirname, "src/index.ts"),
      name: "cookkit",
      formats: ["es", "umd"],
      fileName: (format) => `cookkit.${format}.js`,
    },
    rollupOptions: {
      output: {
        compact: true,
      },
      treeshake: true
    }
  },
});
