const MarkdownPlugin = require('./build/plugin/markdown-plugin')
import DemoRoute from './build/plugin/demo-route'
import path from 'path'
import VuePlugin from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [DemoRoute(),MarkdownPlugin(),VuePlugin({
    include:[/\.vue$/, /\.md$/]
  })],
  resolve: {
    // In production site build, we want to import @phoeon/free-ui from node_modules
    alias:
        process.env.NODE_ENV !== 'production'
        ? [
            {
              find: '@phoeon/free-ui',
              replacement: path.resolve(__dirname, './src')
            },
            {
                find: "@demo",
                replacement: path.resolve(__dirname, './demos')
            }
          ]
        : undefined
  }
})
