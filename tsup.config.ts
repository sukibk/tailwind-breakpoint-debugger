import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'], // Adjust path if different
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    external: ['react', 'react-dom', 'tailwindcss'],
    sourcemap: true, // Recommended for debugging
    minify: true, // Optional: minifies output
    splitting: false, // Keeps component bundle together
    treeshake: true, // Removes unused code
});