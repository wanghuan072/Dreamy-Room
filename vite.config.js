import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import sitemap from 'vite-plugin-sitemap'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 动态获取路由函数
function getAllRoutes() {
  const routes = []

  // 添加博客路由 - 使用当前日期
  routes.push('/blog/dreamy-room-introduction')

  // 添加关卡路由 - 支持未来扩展
  // 当前有108个关卡，但支持更多
  const maxLevels = 150 // 预留空间给未来关卡

  for (let i = 1; i <= maxLevels; i++) {
    routes.push(`/levels/level-${i}`)
  }

  return routes
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    sitemap({
      hostname: 'https://dreamy-room.net',
      dynamicRoutes: getAllRoutes(),
      readable: true,
      exclude: ['/404', '/error', '/admin', '/api'],
      outDir: 'dist'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
