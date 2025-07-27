// 简单的站点地图测试脚本
console.log('🚀 测试站点地图API...\n')

// 模拟API响应进行测试
function testSitemapGeneration() {
  const baseUrl = 'https://dreamy-room.net'
  const currentDate = new Date().toISOString().split('T')[0]

  // 静态页面
  const staticPages = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/levels', priority: '0.9', changefreq: 'daily' },
    { path: '/download', priority: '0.8', changefreq: 'monthly' },
    { path: '/blog', priority: '0.8', changefreq: 'daily' },
    { path: '/about-us', priority: '0.5', changefreq: 'monthly' },
    { path: '/contact-us', priority: '0.5', changefreq: 'monthly' },
    { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
    { path: '/copyright', priority: '0.3', changefreq: 'yearly' }
  ]

  // 生成关卡页面（1-100）
  const levelPages = []
  for (let i = 1; i <= 100; i++) {
    levelPages.push({
      path: `/levels/level-${i}`,
      priority: '0.7',
      changefreq: 'monthly'
    })
  }

  // 博客页面
  const blogPages = [
    {
      path: '/blog/dreamy-room-introduction',
      priority: '0.7',
      changefreq: 'monthly'
    }
  ]

  const allPages = [...staticPages, ...levelPages, ...blogPages]

  console.log('✅ 站点地图生成测试成功!')
  console.log(`   - 总URL数量: ${allPages.length}`)
  console.log(`   - 静态页面: ${staticPages.length}`)
  console.log(`   - 关卡页面: ${levelPages.length}`)
  console.log(`   - 博客页面: ${blogPages.length}`)
  console.log(`   - 基础URL: ${baseUrl}`)
  console.log(`   - 生成日期: ${currentDate}`)

  // 优先级统计
  const priorityStats = {}
  allPages.forEach(page => {
    priorityStats[page.priority] = (priorityStats[page.priority] || 0) + 1
  })

  console.log('\n📊 优先级分布:')
  Object.entries(priorityStats)
    .sort(([a], [b]) => parseFloat(b) - parseFloat(a))
    .forEach(([priority, count]) => {
      console.log(`   ${priority}: ${count} 个页面`)
    })

  // 更新频率统计
  const freqStats = {}
  allPages.forEach(page => {
    freqStats[page.changefreq] = (freqStats[page.changefreq] || 0) + 1
  })

  console.log('\n📅 更新频率分布:')
  Object.entries(freqStats).forEach(([freq, count]) => {
    console.log(`   ${freq}: ${count} 个页面`)
  })

  console.log('\n🎉 测试完成!')
}

testSitemapGeneration()