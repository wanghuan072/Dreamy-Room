<template>
  <div class="sitemap-manager-view">
    <div class="container">
      <h1>🗺️ 站点地图管理</h1>
      <p class="subtitle">管理和监控网站站点地图</p>

      <div class="status-card">
        <h2>✅ 页面状态</h2>
        <p><strong>路由状态:</strong> 正常工作</p>
        <p><strong>当前路径:</strong> {{ currentPath }}</p>
        <p><strong>当前时间:</strong> {{ currentTime }}</p>
      </div>

      <div class="api-section">
        <h2>🔗 API 端点</h2>
        <div class="api-links">
          <div class="api-card">
            <h3>XML 站点地图</h3>
            <p>标准XML格式，用于搜索引擎</p>
            <div class="api-actions">
              <a href="/api/sitemap" target="_blank" class="btn btn-primary">查看 XML</a>
              <button @click="testAPI('/api/sitemap')" class="btn btn-secondary">测试 API</button>
            </div>
            <div class="api-status" :class="xmlStatus.class">{{ xmlStatus.message }}</div>
          </div>

          <div class="api-card">
            <h3>JSON 站点地图</h3>
            <p>JSON格式，用于调试和管理</p>
            <div class="api-actions">
              <a href="/api/sitemap-json" target="_blank" class="btn btn-primary">查看 JSON</a>
              <button @click="testAPI('/api/sitemap-json')" class="btn btn-secondary">测试 API</button>
            </div>
            <div class="api-status" :class="jsonStatus.class">{{ jsonStatus.message }}</div>
          </div>
        </div>
      </div>

      <div class="tools-section">
        <h2>🛠️ 管理工具</h2>
        <div class="tools">
          <button @click="downloadXML" class="btn btn-download">下载 XML</button>
          <button @click="downloadJSON" class="btn btn-download">下载 JSON</button>
          <button @click="refreshAll" class="btn btn-refresh">刷新状态</button>
        </div>
      </div>

      <div class="info-section">
        <h2>📊 系统信息</h2>
        <div class="info-grid">
          <div class="info-item">
            <span class="label">用户代理:</span>
            <span class="value">{{ userAgent }}</span>
          </div>
          <div class="info-item">
            <span class="label">页面URL:</span>
            <span class="value">{{ pageUrl }}</span>
          </div>
          <div class="info-item">
            <span class="label">时间戳:</span>
            <span class="value">{{ timestamp }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')
const currentPath = ref('')
const userAgent = ref('')
const pageUrl = ref('')
const timestamp = ref('')

const xmlStatus = ref({ message: '未测试', class: 'unknown' })
const jsonStatus = ref({ message: '未测试', class: 'unknown' })

let timeInterval = null

function updateTime() {
  currentTime.value = new Date().toLocaleString('zh-CN')
  timestamp.value = new Date().toISOString()
}

function updateInfo() {
  currentPath.value = window.location.pathname
  userAgent.value = navigator.userAgent.substring(0, 100) + '...'
  pageUrl.value = window.location.href
}

async function testAPI(endpoint) {
  const isXML = endpoint.includes('sitemap') && !endpoint.includes('json')
  const statusRef = isXML ? xmlStatus : jsonStatus

  statusRef.value = { message: '测试中...', class: 'testing' }

  try {
    const response = await fetch(endpoint)
    if (response.ok) {
      const contentType = response.headers.get('content-type') || 'unknown'
      statusRef.value = {
        message: `正常 (${contentType.split(';')[0]})`,
        class: 'success'
      }
    } else {
      statusRef.value = {
        message: `错误 ${response.status}`,
        class: 'error'
      }
    }
  } catch (error) {
    statusRef.value = {
      message: `连接失败: ${error.message}`,
      class: 'error'
    }
  }
}

async function downloadXML() {
  try {
    const response = await fetch('/api/sitemap')
    if (response.ok) {
      const xml = await response.text()
      downloadFile(xml, 'sitemap.xml', 'application/xml')
    } else {
      alert('下载失败: ' + response.status)
    }
  } catch (error) {
    alert('下载失败: ' + error.message)
  }
}

async function downloadJSON() {
  try {
    const response = await fetch('/api/sitemap-json')
    if (response.ok) {
      const json = await response.text()
      downloadFile(json, 'sitemap.json', 'application/json')
    } else {
      alert('下载失败: ' + response.status)
    }
  } catch (error) {
    alert('下载失败: ' + error.message)
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

function refreshAll() {
  updateTime()
  updateInfo()
  testAPI('/api/sitemap')
  testAPI('/api/sitemap-json')
}

onMounted(() => {
  updateTime()
  updateInfo()
  timeInterval = setInterval(updateTime, 1000)

  // 自动测试API
  setTimeout(() => {
    testAPI('/api/sitemap')
    testAPI('/api/sitemap-json')
  }, 1000)
})

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval)
  }
})
</script>

<style scoped>
.sitemap-manager {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

h1 {
  color: #2d3748;
  text-align: center;
  margin-bottom: 20px;
}

.links {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 30px 0;
}

.links a {
  padding: 10px 20px;
  background-color: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.links a:hover {
  background-color: #5a67d8;
}

.info {
  background-color: #f7fafc;
  padding: 20px;
  border-radius: 8px;
  margin-top: 30px;
}

.info h2 {
  color: #2d3748;
  margin-top: 0;
}

.info p {
  color: #4a5568;
  margin: 10px 0;
}
</style><style
tyle scoped>
.sitemap-manager-view {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #2d3748;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.subtitle {
  text-align: center;
  color: #4a5568;
  font-size: 1.1rem;
  margin-bottom: 30px;
}

.status-card, .api-section, .tools-section, .info-section {
  background: white;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.status-card h2, .api-section h2, .tools-section h2, .info-section h2 {
  color: #2d3748;
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.api-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.api-card {
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease;
}

.api-card:hover {
  border-color: #4299e1;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 153, 225, 0.15);
}

.api-card h3 {
  color: #2d3748;
  margin-top: 0;
  margin-bottom: 8px;
}

.api-card p {
  color: #718096;
  margin-bottom: 15px;
}

.api-actions {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.api-status {
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
}

.api-status.unknown {
  background-color: #f7fafc;
  color: #4a5568;
}

.api-status.testing {
  background-color: #ebf8ff;
  color: #2b6cb0;
}

.api-status.success {
  background-color: #f0fff4;
  color: #22543d;
}

.api-status.error {
  background-color: #fed7d7;
  color: #c53030;
}

.btn {
  display: inline-block;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: #4299e1;
  color: white;
}

.btn-primary:hover {
  background-color: #3182ce;
}

.btn-secondary {
  background-color: #718096;
  color: white;
}

.btn-secondary:hover {
  background-color: #4a5568;
}

.btn-download {
  background-color: #38a169;
  color: white;
}

.btn-download:hover {
  background-color: #2f855a;
}

.btn-refresh {
  background-color: #ed8936;
  color: white;
}

.btn-refresh:hover {
  background-color: #dd6b20;
}

.tools {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.info-grid {
  display: grid;
  gap: 15px;
}

.info-item {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f7fafc;
  border-radius: 6px;
}

.info-item .label {
  font-weight: 600;
  color: #2d3748;
  min-width: 100px;
  margin-right: 15px;
}

.info-item .value {
  color: #4a5568;
  word-break: break-all;
  flex: 1;
}

@media (max-width: 768px) {
  .api-links {
    grid-template-columns: 1fr;
  }
  
  .api-actions {
    flex-direction: column;
  }
  
  .tools {
    flex-direction: column;
  }
  
  .btn {
    text-align: center;
  }
}
</style>