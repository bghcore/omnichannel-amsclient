#!/usr/bin/env node
/**
 * Test ESM import of the built library
 * Run with: node scripts/test-esm.mjs
 */

import createAMSClient from '../lib/index.mjs';

console.log('Testing ESM import...');

if (typeof createAMSClient !== 'function') {
  console.error('❌ FAILED: createAMSClient is not a function');
  process.exit(1);
}

console.log('✅ SUCCESS: ESM import works correctly');
console.log('   - createAMSClient is a function');
console.log('   - No window object errors in Node.js environment');
