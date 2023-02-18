import { fileURLToPath, URL } from 'node:url'
import { obfuscator } from 'rollup-obfuscator'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import browserslist from 'browserslist'
const browserslistConfig = browserslist.loadConfig({ path: '.' })
import legacy from '@vitejs/plugin-legacy'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),obfuscator({
    compact: false,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    numbersToExpressions: true,
    simplify: true,
    stringArrayShuffle: true,
    splitStrings: true,
    stringArrayThreshold: 1
  }),
  legacy({
    targets: browserslistConfig,
  })
],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
