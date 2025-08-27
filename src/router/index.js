import { createRouter, createWebHistory } from 'vue-router'
import { setPageSEO, setSocialTags, generateStructuredData, generateBreadcrumbSchema, generateArticleSchema, generateWebsiteSchema, generateOrganizationSchema } from '@/config/seo.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置（浏览器前进后退），则恢复到该位置
    if (savedPosition) {
      return savedPosition
    }
    // 否则滚动到顶部
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: 'Dreamy Room – Game Level Videos & Walkthroughs',
        description: 'Explore Dreamy Room game levels with detailed walkthrough videos. Learn tips, tricks, and strategies to complete every stage with ease and fun.',
        keywords: 'Dreamy Room, game walkthrough, level videos, gameplay guide, game tips, puzzle solutions'
      }
    },
    {
      path: '/levels',
      name: 'levels',
      component: () => import('../views/LevelsView.vue'),
      meta: {
        title: 'Dreamy Room Levels List – All Stage Walkthrough Videos',
        description: 'Browse the complete list of Dreamy Room levels. Watch walkthrough videos, explore puzzle solutions, and master every stage of the game.',
        keywords: 'Dreamy Room levels, stage list, walkthrough videos, game stages, puzzle guide, level solutions'
      }
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('../views/DownloadView.vue'),
      meta: {
        title: 'Download Dreamy Room – Play the Creative Puzzle Game',
        description: 'Download Dreamy Room now and enjoy creative puzzle-solving fun. Build, explore, and master levels in this relaxing and addictive game experience.',
        keywords: 'Dreamy Room download, puzzle game download, free game download, creative puzzle, relaxing gameplay'
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
      meta: {
        title: 'Dreamy Room Blog – Tips, Updates & Game Insights',
        description: 'Read the Dreamy Room blog for tips, updates, guides, and insights. Discover strategies, game news, and creative ideas to enhance your gameplay experience.',
        keywords: 'Dreamy Room blog, game tips, updates, guides, gameplay insights, puzzle strategies, game news'
      }
    },
    {
      path: '/blog/:addressBar',
      name: 'blog-detail',
      component: () => import('../views/BlogDetailView.vue'),
      meta: {
        title: 'Dreamy Room - Blog Detail',
        description: 'Dreamy Room blog detail page, read full articles and author sharing.',
        keywords: 'Dreamy Room, blog, detail, article, sharing',
        dynamicTDK: true
      }
    },
    {
      path: '/levels/:addressBar',
      name: 'level-detail',
      component: () => import('../views/LevelDetail.vue'),
      meta: {
        title: 'Dreamy Room - Level Detail',
        description: 'Dreamy Room level detail page, see walkthrough and video for each level.',
        keywords: 'Dreamy Room, level, detail, walkthrough, video',
        dynamicTDK: true
      }
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPolicyView.vue'),
      meta: {
        title: 'Dreamy Room - Privacy Policy',
        description: 'Privacy policy for Dreamy Room Game Guides. Learn how we collect, use, and protect your information.',
        keywords: 'dreamy room, privacy policy, data protection, cookies, personal information'
      }
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: () => import('../views/TermsOfServiceView.vue'),
      meta: {
        title: 'Dreamy Room - Terms of Service',
        description: 'Terms of service for Dreamy Room Game Guides. Read our terms and conditions for using our website.',
        keywords: 'dreamy room, terms of service, terms and conditions, user agreement, legal'
      }
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: () => import('../views/CopyrightView.vue'),
      meta: {
        title: 'Dreamy Room - Copyright Notice',
        description: 'Copyright information for Dreamy Room Game Guides. Learn about our intellectual property rights.',
        keywords: 'dreamy room, copyright, intellectual property, fair use, DMCA'
      }
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/AboutUsView.vue'),
      meta: {
        title: 'Dreamy Room - About Us',
        description: 'Learn about Dreamy Room Game Guides team, mission, and our commitment to helping players.',
        keywords: 'dreamy room, about us, team, mission, game guides'
      }
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../views/ContactUsView.vue'),
      meta: {
        title: 'Dreamy Room - Contact Us',
        description: 'Contact Dreamy Room Game Guides. Get in touch with our team for support, feedback, or inquiries.',
        keywords: 'dreamy room, contact us, support, feedback, help'
      }
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('../views/SimpleNotFound.vue'),
      meta: {
        title: '404 - Page Not Found',
        description: 'Sorry, the page you are looking for does not exist.',
        keywords: '404, not found, dreamy room'
      }
    }
  ],
})

// 全局路由钩子，使用新的SEO配置系统
router.afterEach((to) => {
  // 详情页（dynamicTDK）不在此设置TDK，交由页面组件自己设置
  if (to.meta && to.meta.dynamicTDK) {
    return
  }

  const seo = to.meta
  const url = window.location.origin + to.fullPath

  // 设置页面SEO
  if (seo && (seo.title || seo.description || seo.keywords)) {
    setPageSEO(seo, url)
  }

  // 设置社交媒体标签
  if (seo) {
    setSocialTags({
      title: seo.title,
      description: seo.description,
      image: seo.image || '/og-image.jpg'
    })
  }

  // 生成结构化数据
  const schemas = [generateWebsiteSchema(), generateOrganizationSchema()]

  // 根据路由类型添加特定的结构化数据
  if (to.name === 'blog-detail' && to.params?.addressBar) {
    // 博客详情页 - 添加面包屑和文章结构化数据
    schemas.push(
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: seo?.title || 'Blog Post', url: url }
      ])
    )
  }

  if (to.name === 'level-detail' && to.params?.addressBar) {
    // 关卡详情页 - 添加面包屑和游戏结构化数据
    schemas.push(
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Levels', url: '/levels' },
        { name: `Level ${to.params.addressBar}`, url: url }
      ])
    )
  }

  // 移除旧的JSON-LD脚本
  const oldScripts = document.querySelectorAll('script[type="application/ld+json"]')
  oldScripts.forEach(script => script.remove())

  // 添加新的结构化数据
  schemas.forEach(schema => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  })
})

export default router
