# Build Verification Scripts

This directory contains scripts to verify the build output works correctly across different module systems.

## Scripts

### test-cjs.cjs
Tests CommonJS import of the built library in Node.js.

**Usage:**
```bash
npm run build  # or npm run build:tsc
node scripts/test-cjs.cjs
```

**Verifies:**
- CJS import via `require()` works
- No "window is not defined" errors in Node.js
- `createAMSClient` function is accessible

### test-esm.mjs
Tests ES Module import of the built library in Node.js.

**Usage:**
```bash
npm run build
node scripts/test-esm.mjs
```

**Verifies:**
- ESM import via `import` works
- No "window is not defined" errors in Node.js
- `createAMSClient` function is accessible

### test-integration.mjs
Tests package.json exports resolution.

**Usage:**
```bash
npm run build
node scripts/test-integration.mjs
```

**Verifies:**
- Package exports field resolves correctly
- Import via package name works
- Type checking works

## When to Run

Run these scripts:
- After making changes to `vite.config.ts`
- After changing `package.json` exports field
- After upgrading TypeScript or build tools
- Before publishing to npm
- In CI/CD pipeline to verify builds

## Requirements

- Must run `npm run build` first (or `build:tsc` for CJS verification)
- Node.js 14+ required
