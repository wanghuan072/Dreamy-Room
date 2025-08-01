import { createRouter, createWebHistory } from 'vue-router'

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
      path: '/admin/sitemap',
      name: 'sitemap-manager',
      component: () => import('../views/SitemapManagerView.vue'),
      meta: {
        title: 'Dreamy Room - Sitemap Manager',
        description: 'Manage and monitor the website sitemap.',
        keywords: 'dreamy room, sitemap, admin, management'
      }
    },

    {
      path: '/simple-test',
      name: 'simple-test',
      component: () => import('../views/SimpleTestView.vue'),
      meta: {
        title: 'Simple Test',
        description: 'Simple test page.',
        keywords: 'test'
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

// 全局路由钩子，自动设置TDK和OG、Twitter、Canonical
router.afterEach((to) => {
  // 详情页（dynamicTDK）不在此设置TDK，交由页面组件自己设置
  if (to.meta && to.meta.dynamicTDK) {
    return
  }
  const tdk = to.meta
  const url = window.location.origin + to.fullPath
  if (tdk && tdk.title) {
    document.title = tdk.title
  }
  if (tdk && tdk.description) {
    let desc = document.querySelector('meta[name="description"]')
    if (!desc) {
      desc = document.createElement('meta')
      desc.name = 'description'
      document.head.appendChild(desc)
    }
    desc.content = tdk.description
  }
  if (tdk && tdk.keywords) {
    let keywords = document.querySelector('meta[name="keywords"]')
    if (!keywords) {
      keywords = document.createElement('meta')
      keywords.name = 'keywords'
      document.head.appendChild(keywords)
    }
    keywords.content = tdk.keywords
  }
  // Open Graph
  function setMeta(property, content) {
    let el = document.querySelector(`meta[property='${property}']`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute('property', property)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }
  setMeta('og:title', tdk.title || '')
  setMeta('og:description', tdk.description || '')
  setMeta('og:type', 'website')
  setMeta('og:url', url)
  // 可选：可在meta中加og:image字段
  // Twitter Card
  let tw = document.querySelector('meta[name="twitter:card"]')
  if (!tw) {
    tw = document.createElement('meta')
    tw.setAttribute('name', 'twitter:card')
    document.head.appendChild(tw)
  }
  tw.setAttribute('content', 'summary_large_image')
  // Canonical
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', url)
})

export default router
