import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
    'baboon/index': './src/baboon/index.ts',
    'eidos/index': './src/eidos/index.ts',
    'everysport/index': './src/everysport/index.ts',
    'genai/index': './src/genai/index.ts',
    'ntb/index': './src/ntb/index.ts',
    'wires/index': './src/wires/index.ts'
  },
  outDir: './dist',
  format: ['cjs', 'esm'],
  dts: true,
  logLevel: 'warn'
})
