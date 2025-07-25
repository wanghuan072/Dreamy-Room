<template>
  <div class="levels-content">
    <div class="levels-tabs">
      <button
        v-for="tab in levelTabs"
        :key="tab.label"
        :class="['levels-tab', { active: tab.active }]"
        @click="selectTab(tab)"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="levels-grid-simple">
      <template v-if="displayedLevels.length > 0">
        <router-link
          v-for="level in displayedLevels"
          :key="level.id"
          :to="{ name: 'level-detail', params: { addressBar: level.addressBar } }"
          class="level-card-simple"
        >
          <img :src="level.imageSrc" :alt="level.title" class="level-thumb-simple" />
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

const levelTabs = ref([
  { label: 'Level 1-20', file: 'levels-1-20.js', range: [1, 20], active: true },
  { label: 'Level 21-40', file: 'levels-21-40.js', range: [21, 40], active: false },
  { label: 'Level 41-60', file: 'levels-41-60.js', range: [41, 60], active: false },
  { label: 'Level 61-80', file: 'levels-61-80.js', range: [61, 80], active: false },
  { label: 'Level 81-100', file: 'levels-81-100.js', range: [81, 100], active: false },
])

async function loadLevels(tab) {
  const module = await import(`../data/levels/${tab.file}`)
  // 兼容不同导出名
  const levelsArr = module.default || Object.values(module)[0]
  displayedLevels.value = levelsArr
}

function selectTab(tab) {
  levelTabs.value.forEach((t) => (t.active = false))
  tab.active = true
  loadLevels(tab)
}

// goToDetail 方法已移除

onMounted(() => {
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
.level-thumb-simple {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}
.level-title-simple {
  font-size: 1rem;
  font-weight: 600;
  color: #2d1b69;
  text-align: center;
}
.no-levels-tip {
  grid-column: 1 / -1;
  text-align: center;
  color: #b39ddb;
  font-size: 1.2rem;
  padding: 40px 0;
  font-weight: 600;
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
  }
  .level-card-simple {
    padding: 0.5rem;
  }
  .level-title-simple {
    font-size: 0.8rem;
  }
}
</style> 