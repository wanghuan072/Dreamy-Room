import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import sitemap from 'vite-plugin-sitemap'
import { dirname, join } from 'path'
import { readFileSync, readdirSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 动态获取路由函数
function getAllRoutes() {
  const routes = []

  try {
    // 添加博客路由
    routes.push('/blog/dreamy-room-introduction')

    // 自动扫描关卡数据文件，动态检测关卡数量
    const levelsDir = join(__dirname, 'src/data/levels')
    const levelFiles = readdirSync(levelsDir).filter(file => file.endsWith('.js'))

    // 从所有关卡文件中提取关卡ID
    const allLevelIds = new Set()

    levelFiles.forEach(file => {
      try {
        const filePath = join(levelsDir, file)
        const fileContent = readFileSync(filePath, 'utf-8')

        // 使用正则表达式提取所有关卡ID - 支持两种格式：id: 1 和 "id": 1
        const levelIdMatches = fileContent.match(/id:\s*(\d+)|"id":\s*(\d+)/g)
        if (levelIdMatches) {
          levelIdMatches.forEach(match => {
            // 提取数字部分
            const idMatch = match.match(/id:\s*(\d+)/) || match.match(/"id":\s*(\d+)/)
            if (idMatch) {
              const levelId = parseInt(idMatch[1])
              allLevelIds.add(levelId)
            }
          })
        }
      } catch (error) {
        console.warn(`Warning: Could not read level file ${file}:`, error.message)
      }
    })

    // 将关卡ID排序并添加到路由中
    const sortedLevelIds = Array.from(allLevelIds).sort((a, b) => a - b)
    sortedLevelIds.forEach(levelId => {
      routes.push(`/levels/level-${levelId}`)
    })

    console.log(`✅ 自动检测到 ${sortedLevelIds.length} 个关卡: ${sortedLevelIds.join(', ')}`)

  } catch (error) {
    console.warn('Warning: Could not auto-detect levels, using fallback:', error.message)

    // 备用方案：使用硬编码的路由
    routes.push('/blog/dreamy-room-introduction')

    // 关卡路由 (1-108) - 使用当前日期
    for (let i = 1; i <= 108; i++) {
      routes.push(`/levels/level-${i}`)
    }
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
