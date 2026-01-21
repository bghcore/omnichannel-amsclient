#!/usr/bin/env node
/**
 * Test CommonJS import of the built library
 * Run with: node scripts/test-cjs.cjs
 */

const createAMSClient = require('../lib/index.cjs');

console.log('Testing CommonJS import...');

if (typeof createAMSClient !== 'function' && typeof createAMSClient.default !== 'function') {
  console.error('❌ FAILED: createAMSClient is not a function');
  process.exit(1);
}

// Handle both default export and named export
const client = typeof createAMSClient === 'function' ? createAMSClient : createAMSClient.default;

if (typeof client !== 'function') {
  console.error('❌ FAILED: createAMSClient.default is not a function');
  process.exit(1);
}

console.log('✅ SUCCESS: CommonJS import works correctly');
console.log('   - createAMSClient is a function');
console.log('   - No window object errors in Node.js environment');
