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
  target: "es2020", // Ensures broader compatibility
  bundle: true, // Explicitly bundle the package
  outDir: "dist", // Explicitly set output directory
  platform: "browser", // Specifies browser targeting
});
