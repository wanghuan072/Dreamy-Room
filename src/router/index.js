import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: 'Dreamy Room - Home',
        description: 'Dreamy Room walkthroughs, downloads, features and latest news.',
        keywords: 'Dreamy Room, walkthrough, home, levels, download, features, news'
      }
    },
    {
      path: '/levels',
      name: 'levels',
      component: () => import('../views/LevelsView.vue'),
      meta: {
        title: 'Dreamy Room - All Level Walkthroughs',
        description: 'All Dreamy Room level walkthroughs and tips. Quickly find solutions for every level.',
        keywords: 'Dreamy Room, levels, walkthrough, solution, tips, guide'
      }
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('../views/DownloadView.vue'),
      meta: {
        title: 'Dreamy Room - Download',
        description: 'Download Dreamy Room for iOS and Android. System requirements and download stats.',
        keywords: 'Dreamy Room, download, install, iOS, Android, requirements'
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
      meta: {
        title: 'Dreamy Room - Blog',
        description: 'Official Dreamy Room blog: news, tips, developer stories and player sharing.',
        keywords: 'Dreamy Room, blog, news, tips, stories, player'
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
      component: () => import('../views/NotFound.vue'),
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
