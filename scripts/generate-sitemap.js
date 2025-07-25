// scripts/generate-sitemap.js
const fs = require('fs')
const path = require('path')

const SITE_URL = 'https://dreamy-room.net' // TODO: 替换为你的正式域名

// 静态页面
const staticRoutes = [
  '/',
  '/levels',
  '/download',
  '/blog'
]

// 读取所有关卡
function getAllLevels() {
  const levelsDir = path.join(__dirname, '../src/data/levels')
  const files = fs.readdirSync(levelsDir).filter(f => f.endsWith('.js'))
  let all = []
  for (const file of files) {
    const mod = require(levelsDir + '/' + file)
    const arr = Object.values(mod)[0]
    if (Array.isArray(arr)) {
      all = all.concat(arr)
    }
  }
  return all
}

// 读取所有博客
function getAllBlogs() {
  const blogFile = path.join(__dirname, '../src/data/blog.js')
  // 兼容ESM导出
  const code = fs.readFileSync(blogFile, 'utf-8')
  const match = code.match(/export const blogPosts = (\[.*\]);/s)
  if (!match) return []
  // eslint-disable-next-line no-eval
  return eval(match[1])
}

function genSitemapXml(urls) {
  const now = new Date().toISOString()
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u}</loc><lastmod>${now}</lastmod></url>`).join('\n')}
</urlset>`
}

function main() {
  const urls = staticRoutes.map(r => SITE_URL + r)

  // 动态关卡
  getAllLevels().forEach(l => {
    if (l.addressBar) {
      urls.push(`${SITE_URL}/levels/${l.addressBar}`)
    }
  })
  // 动态博客
  getAllBlogs().forEach(b => {
    if (b.addressBar) {
      urls.push(`${SITE_URL}/blog/${b.addressBar}`)
    }
  })

  const xml = genSitemapXml(urls)
  const outPath = path.join(__dirname, '../public/sitemap.xml')
  fs.writeFileSync(outPath, xml, 'utf-8')
  console.log('sitemap.xml generated:', outPath)
}

main() 