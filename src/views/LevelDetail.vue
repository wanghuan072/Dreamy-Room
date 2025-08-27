<template>
  <div class="level-detail-bg">
    <Header />
    <div class="container">
      <div class="level-detail-layout" v-if="level">
        <div class="main-content">
          <div class="title-block">
            <h1 class="level-title">{{ level.title }}</h1>
            <div class="level-meta">
              <span class="level-date">{{ formatDateToEnglish(level.publishDate) }}</span>
              <!-- <span class="level-subtitle">{{ level.pageSubtitle }}</span> -->
            </div>
          </div>
          <div class="level-video-card">
            <div v-if="!showVideo && level.imageSrc" class="video-mask">
              <img :src="level.imageSrc" :alt="level.title" class="video-mask-img" loading="lazy" width="300"
                height="200" />
              <button class="video-play-btn" @click="showVideo = true">
                <span class="play-icon">▶</span>
              </button>
            </div>
            <iframe v-if="showVideo && level.iframeUrl" :src="level.iframeUrl" frameborder="0" allowfullscreen
              title="Level Video"></iframe>
          </div>
          <div class="level-details-card" v-html="level.detailsHtml"></div>
        </div>
        <aside class="sidebar compact">
          <div class="sidebar-img-wrap">
            <div class="sidebar-img-title">{{ level.imageAlt }}</div>
            <img :src="level.imageSrc" :alt="level.imageAlt" class="level-image" loading="lazy" width="300"
              height="200" />
          </div>
          <div class="sidebar-featured" v-if="
            level.sidebarData && level.sidebarData.featured && level.sidebarData.featured.length
          ">
            <h3 class="sidebar-title"><span class="icon">🌟</span> Related Levels</h3>
            <div class="featured-list">
              <router-link v-for="item in level.sidebarData.featured" :key="item.addressBar"
                :to="{ name: 'level-detail', params: { addressBar: item.addressBar } }" class="featured-card"
                @click="handleRelatedLevelClick">
                <img :src="item.imageUrl" :alt="item.imageAlt" class="featured-img" loading="lazy" width="40"
                  height="40" />
                <div class="featured-title">{{ item.title }}</div>
              </router-link>
            </div>
          </div>
          <div v-else class="no-featured">No related levels.</div>
        </aside>
      </div>
      <div v-else class="not-found">Level not found.</div>
      <div class="level-list-bottom">
        <LevelsList />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import LevelsList from '@/components/LevelsList.vue'
import { setPageSEO, setSocialTags, generateStructuredData, generateBreadcrumbSchema } from '@/config/seo.js'

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

const route = useRoute()
const level = ref(null)
const showVideo = ref(false)

function getLevelFile(addressBar) {
  // 从 addressBar 中提取 level 数字
  const match = addressBar.match(/level-(\d+)/)
  if (!match) return null

  const levelNum = parseInt(match[1])

  // 根据 level 数字推断文件
  if (levelNum >= 1 && levelNum <= 20) return 'levels-1-20.js'
  if (levelNum >= 21 && levelNum <= 40) return 'levels-21-40.js'
  if (levelNum >= 41 && levelNum <= 60) return 'levels-41-60.js'
  if (levelNum >= 61 && levelNum <= 80) return 'levels-61-80.js'
  if (levelNum >= 81 && levelNum <= 100) return 'levels-81-100.js'
  if (levelNum >= 101 && levelNum <= 120) return 'levels-101-120.js'

  return null
}

const levelModules = {
  'levels-1-20.js': () => import('../data/levels/levels-1-20.js'),
  'levels-21-40.js': () => import('../data/levels/levels-21-40.js'),
  'levels-41-60.js': () => import('../data/levels/levels-41-60.js'),
  'levels-61-80.js': () => import('../data/levels/levels-61-80.js'),
  'levels-81-100.js': () => import('../data/levels/levels-81-100.js'),
  'levels-101-120.js': () => import('../data/levels/levels-101-120.js'),
}

async function findLevel(addressBar) {
  const fileName = getLevelFile(addressBar)
  if (!fileName) return null

  try {
    const mod = await levelModules[fileName]()
    const arr = Object.values(mod)[0]
    return arr.find((l) => l.addressBar === addressBar) || null
  } catch (error) {
    console.error('Error loading level data:', error)
    return null
  }
}

async function loadLevelData(addressBar) {
  level.value = await findLevel(addressBar)
  showVideo.value = false // 重置视频状态

  if (level.value && level.value.seo) {
    const url = window.location.origin + `/levels/${addressBar}`

    // 设置页面SEO
    setPageSEO({
      title: level.value.seo.title,
      description: level.value.seo.description,
      keywords: level.value.seo.keywords
    }, url)

    // 设置社交媒体标签
    setSocialTags({
      title: level.value.seo.title,
      description: level.value.seo.description,
      image: level.value.imageSrc || '/og-image.jpg',
      type: 'video.other'
    })

    // 生成结构化数据
    const schemas = [
      generateStructuredData({
        title: level.value.title,
        description: level.value.seo.description,
        url: url
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Levels', url: '/levels' },
        { name: level.value.title, url: url }
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: level.value.title,
        description: level.value.seo.description,
        thumbnailUrl: level.value.imageSrc,
        uploadDate: level.value.publishDate,
        contentUrl: level.value.iframeUrl || url,
        embedUrl: level.value.iframeUrl || url,
      }
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
}

onMounted(async () => {
  await loadLevelData(route.params.addressBar)
})

// 监听路由参数变化
watch(
  () => route.params.addressBar,
  async (newAddressBar, oldAddressBar) => {
    if (newAddressBar && newAddressBar !== oldAddressBar) {
      await loadLevelData(newAddressBar)
    }
  },
  { immediate: true }
)

// 处理相关关卡点击
function handleRelatedLevelClick() {
  // 确保页面滚动到顶部
  window.scrollTo(0, 0)
}
onUnmounted(() => {
  // 可选：清理meta标签内容（如需）
})
</script>

<style scoped>
.level-detail-bg {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffb6c1 0%, #e6e6fa 50%, #98fb98 100%);
}

.level-detail-layout {
  display: flex;
  gap: 32px;
  margin: 4rem 0 1rem 0;
  align-items: flex-start;
}

.main-content {
  flex: 2;
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 4px 24px #e6e6fa77;
  padding: 40px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.title-block {
  margin-bottom: 8px;
}

.level-title {
  font-size: 2.5rem;
  color: #2d1b69;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
  text-shadow: 2px 2px 8px #fff, 0 2px 16px #e6e6fa, 0 0 2px #fff;
}

.level-meta {
  display: flex;
  gap: 18px;
  color: #888;
  font-size: 1rem;
  margin-bottom: 0;
}

.level-date {
  background: #e6e6fa;
  color: #6a1b9a;
  border-radius: 10px;
  padding: 2px 14px;
  font-size: 0.95rem;
  font-weight: 600;
  box-shadow: 0 1px 4px #e6e6fa33;
}

.level-subtitle {
  color: #b39ddb;
  font-size: 1.05rem;
  font-weight: 500;
  margin-left: 8px;
}

.level-video-card {
  background: linear-gradient(135deg, #ffe4ec 0%, #f3e8ff 100%);
  border-radius: 18px;
  box-shadow: 0 2px 12px #e6e6fa55;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 0;
  position: relative;
  width: 100%;
}

.video-mask {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 8px #e6e6fa33;
}

.video-mask-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7) blur(0.5px);
  border-radius: 14px;
  transition: filter 0.3s;
  aspect-ratio: 16/9;
}

.video-play-btn {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.85);
  border: none;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: #d264b6;
  box-shadow: 0 2px 12px #e6e6fa55;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  z-index: 2;
}

.video-play-btn:hover {
  background: #ffe4ec;
  box-shadow: 0 4px 24px #ffb6c144;
}

.play-icon {
  margin-left: 6px;
}

.level-video-card iframe {
  width: 100%;
  aspect-ratio: 16/9;
  height: auto;
  min-height: 200px;
  border-radius: 14px;
  box-shadow: 0 2px 8px #e6e6fa33;
  background: #fff;
}

.level-details-card {
  /* background: linear-gradient(135deg, #f3e8ff 0%, #e6e6fa 100%); */
  /* border-radius: 16px; */
  /* box-shadow: 0 2px 8px #e6e6fa33; */
  /* padding: 28px 22px; */
  /* font-size: 1.13rem;
  color: #444;
  line-height: 1.8; */
  min-height: 120px;
}

.sidebar.compact {
  width: 240px;
  background: #f3e8ff;
  border-radius: 10px;
  box-shadow: 0 4px 24px #e6e6fa77;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.sidebar-img-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  gap: 8px;
}

.sidebar-img-title {
  font-size: 1.05rem;
  color: #6a1b9a;
  font-weight: 600;
  margin-bottom: 2px;
  text-align: center;
}

.level-image {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 16px #b39ddb55, 0 0 0 4px #ffe4ec55;
  transition: box-shadow 0.3s, transform 0.3s;
}

.sidebar-title {
  font-size: 1.1rem;
  color: #2d1b69;
  font-weight: bold;
  margin-bottom: 12px;
  text-align: left;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
}

.sidebar-title .icon {
  font-size: 1.1rem;
}

.featured-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.featured-card {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px #e6e6fa33;
  padding: 8px 6px;
  text-decoration: none;
  transition: box-shadow 0.2s, transform 0.2s, background 0.2s;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.featured-card:hover {
  box-shadow: 0 6px 24px #ffb6c144;
  transform: translateY(-2px) scale(1.04);
  background: linear-gradient(90deg, #ffe4ec 0%, #f3e8ff 100%);
}

.featured-img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 1px 4px #e6e6fa22;
}

.featured-title {
  font-size: 0.98rem;
  color: #2d1b69;
  font-weight: 600;
}

.no-featured {
  color: #b39ddb;
  font-size: 0.95rem;
  margin-top: 16px;
  text-align: center;
}

.not-found {
  text-align: center;
  color: #b39ddb;
  font-size: 1.5rem;
  margin: 80px 0;
}

.level-list-bottom {
  margin-bottom: 4rem;
  padding: 20px 0;
  background: #f3e8ff;
  border-radius: 22px;
  box-shadow: 0 4px 24px #e6e6fa77;
}

@media (max-width: 1024px) {
  .level-detail-layout {
    flex-direction: column;
    gap: 18px;
    max-width: 98vw;
    margin: 2rem 0 1rem 0;
  }

  .level-list-bottom {
    margin-bottom: 1rem;
  }

  .main-content {
    padding: 1rem;
  }

  .sidebar.compact {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    gap: 18px;
    margin-top: 12px;
  }
}

@media (max-width: 768px) {
  .level-detail-layout {
    gap: 1rem;
    margin: 1rem 0;
  }

  .level-title {
    font-size: 1.2rem;
  }

  .main-content {
    gap: 1rem;
  }

  .sidebar.compact {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    padding: 0.5rem;
    width: 100%;
  }

  .sidebar-img-title {
    font-size: 0.95rem;
  }

  .level-image {
    border-radius: 6px;
  }
}
</style>