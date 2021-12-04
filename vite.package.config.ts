const MarkdownPlugin = require('./build/plugin/markdown-plugin')
import DemoRoute from './build/plugin/demo-route'
import path from 'path'
import VuePlugin from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
export default defineConfig({
  plugins: [DemoRoute(),MarkdownPlugin(),VuePlugin({
    include:[/\.vue$/]
  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'free-ui',
      fileName: (format) => `free-ui.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
