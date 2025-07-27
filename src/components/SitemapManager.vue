<template>
  <div class="sitemap-manager">
    <div class="header">
      <h2>站点地图管理</h2>
      <div class="actions">
        <button @click="refreshSitemap" :disabled="loading" class="btn-primary">
          {{ loading ? '刷新中...' : '刷新站点地图' }}
        </button>
        <button @click="downloadXML" class="btn-secondary">下载 XML</button>
        <button @click="downloadJSON" class="btn-secondary">下载 JSON</button>
      </div>
    </div>

    <div class="stats" v-if="sitemapData">
      <div class="stat-item">
        <span class="label">总URL数量:</span>
        <span class="value">{{ sitemapData.totalUrls }}</span>
      </div>
      <div class="stat-item">
        <span class="label">生成时间:</span>
        <span class="value">{{ formatDate(sitemapData.generated) }}</span>
      </div>
      <div class="stat-item">
        <span class="label">基础URL:</span>
        <span class="value">{{ sitemapData.baseUrl }}</span>
      </div>
    </div>

    <div class="url-list" v-if="sitemapData">
      <h3>URL列表</h3>
      <div class="filters">
        <input 
          v-model="searchQuery" 
          placeholder="搜索URL..." 
          class="search-input"
        >
        <select v-model="priorityFilter" class="filter-select">
          <option value="">所有优先级</option>
          <option value="1.0">1.0 (最高)</option>
          <option value="0.9">0.9</option>
          <option value="0.8">0.8</option>
          <option value="0.7">0.7</option>
          <option value="0.5">0.5</option>
          <option value="0.3">0.3 (最低)</option>
        </select>
      </div>

      <div class="table-container">
        <table class="url-table">
          <thead>
            <tr>
              <th>URL</th>
              <th>最后修改</th>
              <th>更新频率</th>
              <th>优先级</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="url in filteredUrls" :key="url.loc">
              <td class="url-cell">
                <a :href="url.loc" target="_blank" class="url-link">
                  {{ url.loc }}
                </a>
              </td>
              <td>{{ url.lastmod }}</td>
              <td>
                <span :class="['freq-badge', `freq-${url.changefreq}`]">
                  {{ url.changefreq }}
                </span>
              </td>
              <td>
                <span :class="['priority-badge', getPriorityClass(url.priority)]">
                  {{ url.priority }}
                </span>
              </td>
              <td>
                <button @click="testUrl(url.loc)" class="btn-test">测试</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="error" class="error-message">
      <h3>错误信息</h3>
      <pre>{{ error }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { generateSitemapJSON } from '@/services/sitemapService.js'

const sitemapData = ref(null)
const loading = ref(false)
const error = ref(null)
const searchQuery = ref('')
const priorityFilter = ref('')

const filteredUrls = computed(() => {
  if (!sitemapData.value?.urls) return []
  
  let urls = sitemapData.value.urls
  
  // 搜索过滤
  if (searchQuery.value) {
    urls = urls.filter(url => 
      url.loc.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }
  
  // 优先级过滤
  if (priorityFilter.value) {
    urls = urls.filter(url => url.priority === priorityFilter.value)
  }
  
  return urls
})

async function refreshSitemap() {
  loading.value = true
  error.value = null
  
  try {
    sitemapData.value = await generateSitemapJSON()
  } catch (err) {
    error.value = err.message
    console.error('Failed to refresh sitemap:', err)
  } finally {
    loading.value = false
  }
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleString('zh-CN')
}

function getPriorityClass(priority) {
  const p = parseFloat(priority)
  if (p >= 0.9) return 'high'
  if (p >= 0.7) return 'medium'
  if (p >= 0.5) return 'normal'
  return 'low'
}

async function downloadXML() {
  try {
    const response = await fetch('/api/sitemap')
    const xml = await response.text()
    downloadFile(xml, 'sitemap.xml', 'application/xml')
  } catch (err) {
    console.error('Failed to download XML:', err)
  }
}

async function downloadJSON() {
  try {
    const json = JSON.stringify(sitemapData.value, null, 2)
    downloadFile(json, 'sitemap.json', 'application/json')
  } catch (err) {
    console.error('Failed to download JSON:', err)
  }
}

function downloadFile(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

function testUrl(url) {
  window.open(url, '_blank')
}

onMounted(() => {
  refreshSitemap()
})
</script>

<style scoped>
.sitemap-manager {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid #e0e0e0;
}

.header h2 {
  margin: 0;
  color: #333;
}

.actions {
  display: flex;
  gap: 10px;
}

.btn-primary, .btn-secondary, .btn-test {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #0056b3;
}

.btn-primary:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #545b62;
}

.btn-test {
  background-color: #28a745;
  color: white;
  padding: 4px 8px;
  font-size: 12px;
}

.btn-test:hover {
  background-color: #1e7e34;
}

.stats {
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 6px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.stat-item .label {
  font-size: 12px;
  color: #666;
  font-weight: 500;
}

.stat-item .value {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.url-list h3 {
  margin-bottom: 15px;
  color: #333;
}

.filters {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.search-input, .filter-select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.search-input {
  flex: 1;
  max-width: 300px;
}

.table-container {
  overflow-x: auto;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.url-table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
}

.url-table th,
.url-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.url-table th {
  background-color: #f8f9fa;
  font-weight: 600;
  color: #333;
}

.url-cell {
  max-width: 400px;
}

.url-link {
  color: #007bff;
  text-decoration: none;
  word-break: break-all;
}

.url-link:hover {
  text-decoration: underline;
}

.freq-badge, .priority-badge {
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.freq-daily { background-color: #d4edda; color: #155724; }
.freq-monthly { background-color: #d1ecf1; color: #0c5460; }
.freq-yearly { background-color: #f8d7da; color: #721c24; }

.priority-badge.high { background-color: #d4edda; color: #155724; }
.priority-badge.medium { background-color: #fff3cd; color: #856404; }
.priority-badge.normal { background-color: #d1ecf1; color: #0c5460; }
.priority-badge.low { background-color: #f8d7da; color: #721c24; }

.error-message {
  margin-top: 20px;
  padding: 15px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 6px;
  color: #721c24;
}

.error-message h3 {
  margin-top: 0;
}

.error-message pre {
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
}
</style>