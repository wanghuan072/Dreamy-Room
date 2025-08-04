<template>
  <div class="levels-content">
    <div class="levels-tabs">
      <button v-for="tab in levelTabs" :key="tab.label" :class="['levels-tab', { active: tab.active }]"
        @click="selectTab(tab)">
        {{ tab.label }}
      </button>
    </div>
    <div class="levels-grid-simple">
      <!-- 加载状态 -->
      <template v-if="isLoading">
        <div v-for="i in 20" :key="`skeleton-${i}`" class="level-card-simple skeleton-card">
          <div class="level-thumb-container skeleton-thumb">
            <div class="skeleton-placeholder"></div>
          </div>
          <div class="level-title-simple skeleton-title"></div>
        </div>
      </template>

      <!-- 实际内容 -->
      <template v-else-if="displayedLevels.length > 0">
        <router-link v-for="level in displayedLevels" :key="level.id"
          :to="{ name: 'level-detail', params: { addressBar: level.addressBar } }" class="level-card-simple">
          <div class="level-thumb-container">
            <img :src="level.imageSrc" :alt="level.title" class="level-thumb-simple" loading="lazy"
              @load="onImageLoad(level.id)" @error="onImageError(level.id)" />
            <div class="level-thumb-placeholder" v-if="!loadedImages.has(level.id)">
              <div class="loading-spinner"></div>
            </div>
          </div>
          <div class="level-title-simple">{{ level.title }}</div>
        </router-link>
      </template>
      <template v-else>
        <div class="no-levels-tip">No levels available for this range.</div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const displayedLevels = ref([])
const loadedImages = ref(new Set())
const isLoading = ref(false)

const levelTabs = ref([
  { label: 'Level 1-20', file: 'levels-1-20.js', range: [1, 20], active: true },
  { label: 'Level 21-40', file: 'levels-21-40.js', range: [21, 40], active: false },
  { label: 'Level 41-60', file: 'levels-41-60.js', range: [41, 60], active: false },
  { label: 'Level 61-80', file: 'levels-61-80.js', range: [61, 80], active: false },
  { label: 'Level 81-100', file: 'levels-81-100.js', range: [81, 100], active: false },
  { label: 'Level 101-120', file: 'levels-101-120.js', range: [101, 120], active: false },
])

const levelModules = {
  'levels-1-20.js': () => import('../data/levels/levels-1-20.js'),
  'levels-21-40.js': () => import('../data/levels/levels-21-40.js'),
  'levels-41-60.js': () => import('../data/levels/levels-41-60.js'),
  'levels-61-80.js': () => import('../data/levels/levels-61-80.js'),
  'levels-81-100.js': () => import('../data/levels/levels-81-100.js'),
  'levels-101-120.js': () => import('../data/levels/levels-101-120.js'),
}

async function loadLevels(tab) {
  isLoading.value = true
  loadedImages.value.clear()

  try {
    const module = await levelModules[tab.file]()
    // 兼容不同导出名
    const levelsArr = module.default || Object.values(module)[0]
    displayedLevels.value = levelsArr
  } catch (error) {
    console.error('Failed to load levels:', error)
    displayedLevels.value = []
  } finally {
    isLoading.value = false
  }
}

function selectTab(tab) {
  levelTabs.value.forEach((t) => (t.active = false))
  tab.active = true
  // 保存选中的 tab 索引到 localStorage
  const tabIndex = levelTabs.value.findIndex(t => t.label === tab.label)
  localStorage.setItem('dreamy-room-active-tab', tabIndex.toString())
  loadLevels(tab)
}

function onImageLoad(levelId) {
  loadedImages.value.add(levelId)
}

function onImageError(levelId) {
  loadedImages.value.add(levelId)
}

// goToDetail 方法已移除

onMounted(() => {
  // 从 localStorage 读取之前保存的 tab 索引
  const savedTabIndex = localStorage.getItem('dreamy-room-active-tab')

  if (savedTabIndex !== null) {
    const tabIndex = parseInt(savedTabIndex)
    // 确保索引有效
    if (tabIndex >= 0 && tabIndex < levelTabs.value.length) {
      // 重置所有 tab 状态
      levelTabs.value.forEach((t) => (t.active = false))
      // 设置保存的 tab 为激活状态
      levelTabs.value[tabIndex].active = true
      // 加载对应的关卡数据
      loadLevels(levelTabs.value[tabIndex])
      return
    }
  }

  // 如果没有保存的状态或索引无效，使用默认的第一个 tab
  const activeTab = levelTabs.value.find((tab) => tab.active)
  if (activeTab) loadLevels(activeTab)
})
</script>

<style scoped>
.levels-content {
  width: 100%;
}

.levels-tabs {
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;
  justify-content: center;
}

.levels-tab {
  background: #e0c8f9;
  color: #6a1b9a;
  border: none;
  border-radius: 20px;
  padding: 10px 28px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  opacity: 0.95;
  transition: all 0.2s;
  box-shadow: 0 1px 4px #e6e6fa33;
}

.levels-tab.active {
  background: #d1b3f9;
  color: #2d1b69;
  opacity: 1;
  box-shadow: 0 2px 8px #b39ddb33;
}

.levels-grid-simple {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  min-height: 400px;
}

.level-card-simple {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px #e6e6fa55;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  transition: box-shadow 0.2s, transform 0.2s;
}

.level-card-simple:hover {
  box-shadow: 0 6px 24px #ffb6c144;
  transform: translateY(-4px) scale(1.03);
}

.level-thumb-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
  background: #f5f5f5;
}

.level-thumb-simple {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.level-thumb-simple[src] {
  opacity: 1;
}

.level-thumb-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  border-radius: 10px;
}

.loading-spinner {
  width: 24px;
  height: 24px;
  border: 2px solid #e0c8f9;
  border-top: 2px solid #6a1b9a;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.level-title-simple {
  font-size: 1rem;
  font-weight: 600;
  color: #2d1b69;
  text-align: center;
  min-height: 1.2em;
  line-height: 1.2;
}

.no-levels-tip {
  grid-column: 1 / -1;
  text-align: center;
  color: #b39ddb;
  font-size: 1.2rem;
  padding: 40px 0;
  font-weight: 600;
}

/* 骨架屏样式 */
.skeleton-card {
  pointer-events: none;
}

.skeleton-thumb {
  background: #f0f0f0;
}

.skeleton-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 10px;
}

.skeleton-title {
  background: #f0f0f0;
  height: 1.2em;
  border-radius: 4px;
  margin-top: 10px;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: 200% 0;
  }
}

@media (max-width: 1024px) {
  .levels-grid-simple {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .levels-tabs {
    gap: 10px;
    margin-bottom: 1rem;
  }

  .levels-tab {
    padding: 5px 10px;
    font-size: 0.8rem;
    border-radius: 10px;
  }

  .levels-grid-simple {
    grid-template-columns: repeat(2, 1fr);
    min-height: 300px;
  }

  .level-card-simple {
    padding: 0.5rem;
  }

  .level-title-simple {
    font-size: 0.8rem;
  }
}
</style>