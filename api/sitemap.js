import fs from 'fs'
import path from 'path'

const SITE_URL = 'https://dreamy-room.net' // 根据实际域名修改

// 静态页面配置
function getStaticPages() {
  const now = new Date().toISOString()
  return [
    { path: '/', changefreq: 'daily', priority: '1.0', lastmod: now },
    { path: '/levels', changefreq: 'daily', priority: '0.9', lastmod: now },
    { path: '/download', changefreq: 'monthly', priority: '0.8', lastmod: now },
    { path: '/blog', changefreq: 'daily', priority: '0.8', lastmod: now },
    { path: '/about-us', changefreq: 'monthly', priority: '0.5', lastmod: now },
    { path: '/contact-us', changefreq: 'monthly', priority: '0.5', lastmod: now },
    { path: '/copyright', changefreq: 'yearly', priority: '0.3', lastmod: now },
    { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3', lastmod: now },
    { path: '/terms-of-service', changefreq: 'yearly', priority: '0.3', lastmod: now }
  ]
}

function getAllLevels() {
  const levelsDir = path.join(process.cwd(), 'src/data/levels')
  const files = fs.readdirSync(levelsDir).filter(f => f.endsWith('.js'))
  let all = []
  for (const file of files) {
    const mod = require(path.join(levelsDir, file))
    const arr = mod.default || Object.values(mod)[0]
    if (Array.isArray(arr)) {
      all = all.concat(arr)
    }
  }
  return all
}

function getAllBlogs() {
  const blogFile = path.join(process.cwd(), 'src/data/blog.js')
  const mod = require(blogFile)
  return mod.blogPosts || []
}

function genSitemapXml(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(p => `  <url><loc>${p.url}</loc><lastmod>${p.lastmod}</lastmod><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`).join('\n')}\n</urlset>`
}

export default function handler(req, res) {
  const staticPages = getStaticPages().map(page => ({
    url: SITE_URL + page.path,
    lastmod: page.lastmod,
    changefreq: page.changefreq,
    priority: page.priority
  }))
  const dynamicLevels = getAllLevels().map(l => ({
    url: `${SITE_URL}/levels/${l.addressBar}`,
    lastmod: l.publishDate || new Date().toISOString(),
    changefreq: 'monthly',
    priority: '0.7'
  }))
  const dynamicBlogs = getAllBlogs().map(b => ({
    url: b.addressBar.startsWith('http') ? b.addressBar : `${SITE_URL}${b.addressBar.startsWith('/') ? '' : '/blog/'}${b.addressBar}`,
    lastmod: b.publishDate || new Date().toISOString(),
    changefreq: 'monthly',
    priority: '0.7'
  }))
  const allPages = [...staticPages, ...dynamicLevels, ...dynamicBlogs]
  const xml = genSitemapXml(allPages)
  res.setHeader('Content-Type', 'application/xml')
  res.status(200).send(xml)
} 