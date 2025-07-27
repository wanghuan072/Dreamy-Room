import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 临时修复路径别名问题
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

// 生成XML格式的站点地图
async function generateSitemapXML() {
  const entries = await getAllSitemapEntries()
  
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>'
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  const urlsetClose = '</urlset>'
  
  const urls = entries.map(entry => {
    return `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  }).join('\n')
  
  return `${xmlHeader}\n${urlsetOpen}\n${urls}\n${urlsetClose}`
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

async function testSitemap() {
  console.log('🚀 Testing Sitemap Generation...\n')
  
  try {
    // 测试JSON格式
    console.log('📊 Generating JSON sitemap...')
    const jsonSitemap = await generateSitemapJSON()
    console.log(`✅ JSON sitemap generated successfully!`)
    console.log(`   - Total URLs: ${jsonSitemap.totalUrls}`)
    console.log(`   - Base URL: ${jsonSitemap.baseUrl}`)
    console.log(`   - Generated at: ${jsonSitemap.generated}`)
    
    // 显示URL分类统计
    const urlsByPriority = {}
    const urlsByChangefreq = {}
    
    jsonSitemap.urls.forEach(url => {
      urlsByPriority[url.priority] = (urlsByPriority[url.priority] || 0) + 1
      urlsByChangefreq[url.changefreq] = (urlsByChangefreq[url.changefreq] || 0) + 1
    })
    
    console.log('\n📈 URL Statistics:')
    console.log('   Priority distribution:')
    Object.entries(urlsByPriority)
      .sort(([a], [b]) => parseFloat(b) - parseFloat(a))
      .forEach(([priority, count]) => {
        console.log(`     ${priority}: ${count} URLs`)
      })
    
    console.log('   Change frequency distribution:')
    Object.entries(urlsByChangefreq).forEach(([freq, count]) => {
      console.log(`     ${freq}: ${count} URLs`)
    })
    
    // 测试XML格式
    console.log('\n🔧 Generating XML sitemap...')
    const xmlSitemap = await generateSitemapXML()
    console.log(`✅ XML sitemap generated successfully!`)
    console.log(`   - Size: ${(xmlSitemap.length / 1024).toFixed(2)} KB`)
    
    // 验证XML格式
    if (xmlSitemap.includes('<?xml version="1.0" encoding="UTF-8"?>') && 
        xmlSitemap.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')) {
      console.log('✅ XML format validation passed')
    } else {
      console.log('❌ XML format validation failed')
    }
    
    // 显示前5个URL作为示例
    console.log('\n📋 Sample URLs (first 5):')
    jsonSitemap.urls.slice(0, 5).forEach((url, index) => {
      console.log(`   ${index + 1}. ${url.loc}`)
      console.log(`      Priority: ${url.priority}, Changefreq: ${url.changefreq}`)
    })
    
    console.log('\n🎉 Sitemap test completed successfully!')
    
  } catch (error) {
    console.error('❌ Sitemap test failed:', error)
    process.exit(1)
  }
}

// 运行测试
testSitemap()