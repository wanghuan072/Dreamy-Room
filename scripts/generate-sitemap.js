// 简单的站点地图生成脚本
import { writeFileSync } from 'fs'

const baseUrl = 'https://dreamy-room.net'
const currentDate = new Date().toISOString().split('T')[0]

// 静态页面配置
const pages = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/levels', priority: '0.9', changefreq: 'daily' },
    { path: '/download', priority: '0.8', changefreq: 'monthly' },
    { path: '/blog', priority: '0.8', changefreq: 'daily' },
    { path: '/about-us', priority: '0.5', changefreq: 'monthly' },
    { path: '/contact-us', priority: '0.5', changefreq: 'monthly' },
    { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
    { path: '/copyright', priority: '0.3', changefreq: 'yearly' },
    { path: '/blog/dreamy-room-introduction', priority: '0.7', changefreq: 'monthly', lastmod: '2024-07-25' }
]

// 添加关卡页面 (1-100)
for (let i = 1; i <= 100; i++) {
    pages.push({
        path: `/levels/level-${i}`,
        priority: '0.7',
        changefreq: 'monthly',
        lastmod: '2025-07-24'
    })
}

// 生成XML
const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>'
const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
const urlsetClose = '</urlset>'

const urls = pages.map(page => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${page.lastmod || currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')

const xml = `${xmlHeader}\n${urlsetOpen}\n${urls}\n${urlsetClose}`

// 写入文件
writeFileSync('public/sitemap.xml', xml, 'utf-8')

console.log('✅ 站点地图生成成功!')
console.log(`   - 总页面数: ${pages.length}`)
console.log(`   - 文件位置: public/sitemap.xml`)
console.log(`   - 访问地址: ${baseUrl}/sitemap.xml`)