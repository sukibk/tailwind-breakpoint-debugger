import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: ["react", "react-dom", "tailwindcss"],
  sourcemap: true,
  minify: true,
  splitting: false,
  treeshake: true,
  target: "es2020",
  bundle: true,
  outDir: "dist",
  platform: "browser",
});
