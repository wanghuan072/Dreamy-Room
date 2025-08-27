<template>
  <div class="blog-detail-page">
    <Header />

    <main class="main-content" v-if="post">
      <div class="container">
        <article class="blog-article">
          <div class="article-header">
            <div class="article-meta">
              <span class="article-date">{{ formatDateToEnglish(post.publishDate) }}</span>
            </div>
            <h1 class="article-title">{{ post.title }}</h1>
          </div>

          <div class="article-image">
            <img :src="post.imageSrc" :alt="post.imageAlt" loading="lazy" width="400" height="250" />
          </div>

          <div class="article-content" v-html="post.content"></div>
        </article>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { blogPosts } from '@/data/blog.js'
import { setPageSEO, setSocialTags, generateStructuredData, generateBreadcrumbSchema, generateArticleSchema } from '@/config/seo.js'

const route = useRoute()
const router = useRouter()
const post = ref(null)

function formatDateToEnglish(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (isNaN(date)) return dateStr
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

onMounted(() => {
  const addressBar = route.params.addressBar
  post.value = blogPosts.find((p) => p.addressBar === addressBar)

  if (!post.value) {
    router.push('/blog')
    return
  }

  if (post.value.seo) {
    const url = window.location.origin + `/blog/${addressBar}`

    // 设置页面SEO
    setPageSEO({
      title: post.value.seo.title,
      description: post.value.seo.description,
      keywords: post.value.seo.keywords
    }, url)

    // 设置社交媒体标签
    setSocialTags({
      title: post.value.seo.title,
      description: post.value.seo.description,
      image: post.value.imageSrc || '/og-image.jpg',
      type: 'article'
    })

    // 生成结构化数据
    const schemas = [
      generateStructuredData({
        title: post.value.title,
        description: post.value.seo.description,
        url: url
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: post.value.title, url: url }
      ]),
      generateArticleSchema({
        title: post.value.title,
        description: post.value.seo.description,
        imageSrc: post.value.imageSrc,
        publishDate: post.value.publishDate
      })
    ]

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
  }
})
onUnmounted(() => {
  // 可选：清理meta标签内容（如需）
})
</script>

<style scoped>
.blog-detail-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffb6c1 0%, #e6e6fa 50%, #98fb98 100%);
}

.main-content {
  padding: 60px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.blog-article {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 25px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.article-header {
  margin-bottom: 30px;
}

.article-meta {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.article-date {
  color: #666;
  font-size: 1rem;
}

.article-title {
  font-size: 2.5rem;
  color: #2d1b69;
  margin-bottom: 20px;
  line-height: 1.3;
  font-weight: bold;
  text-shadow: 2px 2px 8px #fff, 0 2px 16px #e6e6fa, 0 0 2px #fff;
}

.article-image {
  margin-bottom: 30px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.article-image img {
  width: 100%;
  height: auto;
  display: block;
}

.article-content {
  line-height: 1.8;
  color: #333;
}

.article-content h2 {
  font-size: 1.8rem;
  color: #2d1b69;
  margin: 30px 0 15px 0;
  font-weight: bold;
}

.article-content h3 {
  font-size: 1.4rem;
  color: #6a1b9a;
  margin: 25px 0 12px 0;
  font-weight: bold;
}

.article-content p {
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.article-content ul,
.article-content ol {
  margin: 15px 0;
  padding-left: 25px;
}

.article-content li {
  margin-bottom: 8px;
}

.article-content blockquote {
  background: linear-gradient(135deg, #ffe4ec 0%, #f3e8ff 100%);
  border-left: 4px solid #ff69b4;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  font-style: italic;
  color: #2d1b69;
}

@media (max-width: 1024px) {
  .container {
    padding: 0 10px;
  }

  .blog-article {
    padding: 28px;
  }

  .article-title {
    font-size: 2rem;
  }

  .article-image img {
    max-height: 260px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 6px;
  }

  .blog-article {
    padding: 12px;
  }

  .article-title {
    font-size: 1.2rem;
  }

  .article-image img {
    max-height: 140px;
  }
}
</style>