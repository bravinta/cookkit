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
    lib: {
      entry: path.join(__dirname, "src/index.ts"),
      name: "cookkit",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `cookkit.${format}.js`,
    },
  },
});
