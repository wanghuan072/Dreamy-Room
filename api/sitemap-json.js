// 临时修复路径别名问题 - 直接导入数据
import { blogPosts } from '../src/data/blog.js'

// 动态导入所有关卡数据
async function getAllLevels() {
  const levelModules = [
    () => import('../src/data/levels/levels-1-20.js'),
    () => import('../src/data/levels/levels-21-40.js'),
    () => import('../src/data/levels/levels-41-60.js'),
    () => import('../src/data/levels/levels-61-80.js'),
    () => import('../src/data/levels/levels-81-100.js')
  ]

  const allLevels = []
  
  for (const moduleLoader of levelModules) {
    try {
      const module = await moduleLoader()
      const levels = Object.values(module)[0]
      if (Array.isArray(levels)) {
        allLevels.push(...levels)
      }
    } catch (error) {
      console.warn('Failed to load level module:', error)
    }
  }
  
  return allLevels
}

// 站点地图配置
const SITE_CONFIG = {
  baseUrl: 'https://dreamy-room.net',
  defaultChangefreq: 'monthly',
  defaultPriority: '0.5'
}

// 静态页面配置
const STATIC_PAGES = [
  {
    path: '/',
    changefreq: 'daily',
    priority: '1.0',
    title: 'Dreamy Room - Home'
  },
  {
    path: '/levels',
    changefreq: 'daily',
    priority: '0.9',
    title: 'All Level Walkthroughs'
  },
  {
    path: '/download',
    changefreq: 'monthly',
    priority: '0.8',
    title: 'Download Game'
  },
  {
    path: '/blog',
    changefreq: 'daily',
    priority: '0.8',
    title: 'Blog'
  },
  {
    path: '/about-us',
    changefreq: 'monthly',
    priority: '0.5',
    title: 'About Us'
  },
  {
    path: '/contact-us',
    changefreq: 'monthly',
    priority: '0.5',
    title: 'Contact Us'
  },
  {
    path: '/privacy-policy',
    changefreq: 'yearly',
    priority: '0.3',
    title: 'Privacy Policy'
  },
  {
    path: '/terms-of-service',
    changefreq: 'yearly',
    priority: '0.3',
    title: 'Terms of Service'
  },
  {
    path: '/copyright',
    changefreq: 'yearly',
    priority: '0.3',
    title: 'Copyright Notice'
  }
]

// 生成站点地图URL条目
function createSitemapEntry(url, lastmod, changefreq, priority) {
  const entry = {
    loc: url,
    lastmod: lastmod || new Date().toISOString().split('T')[0],
    changefreq: changefreq || SITE_CONFIG.defaultChangefreq,
    priority: priority || SITE_CONFIG.defaultPriority
  }
  return entry
}

// 获取所有站点地图条目
async function getAllSitemapEntries() {
  const entries = []
  const currentDate = new Date().toISOString().split('T')[0]

  // 添加静态页面
  STATIC_PAGES.forEach(page => {
    entries.push(createSitemapEntry(
      `${SITE_CONFIG.baseUrl}${page.path}`,
      currentDate,
      page.changefreq,
      page.priority
    ))
  })

  // 添加关卡页面
  try {
    const levels = await getAllLevels()
    levels.forEach(level => {
      if (level.addressBar) {
        entries.push(createSitemapEntry(
          `${SITE_CONFIG.baseUrl}/levels/${level.addressBar}`,
          level.publishDate || currentDate,
          'monthly',
          '0.7'
        ))
      }
    })
  } catch (error) {
    console.error('Error loading levels for sitemap:', error)
  }

  // 添加博客页面
  blogPosts.forEach(post => {
    let blogUrl
    if (post.addressBar.startsWith('http')) {
      blogUrl = post.addressBar
    } else if (post.addressBar.startsWith('/')) {
      blogUrl = `${SITE_CONFIG.baseUrl}${post.addressBar}`
    } else {
      blogUrl = `${SITE_CONFIG.baseUrl}/blog/${post.addressBar}`
    }

    entries.push(createSitemapEntry(
      blogUrl,
      post.publishDate || currentDate,
      'monthly',
      '0.7'
    ))
  })

  return entries
}

// 生成JSON格式的站点地图
async function generateSitemapJSON() {
  const entries = await getAllSitemapEntries()
  return {
    generated: new Date().toISOString(),
    totalUrls: entries.length,
    baseUrl: SITE_CONFIG.baseUrl,
    urls: entries
  }
}

export default async function handler(req, res) {
  try {
    // 设置缓存头（缓存30分钟）
    res.setHeader('Cache-Control', 'public, max-age=1800, s-maxage=1800')
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    
    // 生成站点地图JSON
    const sitemapJSON = await generateSitemapJSON()
    
    res.status(200).json(sitemapJSON)
  } catch (error) {
    console.error('Error generating sitemap JSON:', error)
    res.status(500).json({ 
      error: 'Failed to generate sitemap JSON',
      message: error.message 
    })
  }
}