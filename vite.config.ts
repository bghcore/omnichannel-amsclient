import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => {
        // Generate index.mjs for ESM, index.cjs for CommonJS
        // Note: .cjs extension required because package.json has "type": "module"
        return format === 'es' ? 'index.mjs' : 'index.cjs';
      }
    },
    outDir: 'lib',
    // Target ES2018 for modern browsers, but not too cutting-edge
    target: 'es2018',
    // Source maps configurable via environment (default: true for development)
    // Set SOURCEMAP=false to disable in production builds
    sourcemap: process.env.SOURCEMAP !== 'false',
    // Minification off for library (let consumers decide)
    minify: false,
    rollupOptions: {
      // Ensure no external deps are bundled (they should be peer deps)
      external: [],
      output: {
        // Preserve module structure for better tree-shaking
        preserveModules: false,
        // Export named exports
        exports: 'named',
        // Ensure interop between CJS and ESM
        interop: 'auto'
      }
    }
  },
  plugins: [
    // Generate TypeScript declarations
    dts({
      insertTypesEntry: true,
      rollupTypes: true  // Single .d.ts file
    })
  ]
});
