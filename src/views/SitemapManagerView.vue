<template>
  <div class="sitemap-manager-view">
    <h1>🗺️ 站点地图管理</h1>
    <p>如果你能看到这个页面，说明 /admin/sitemap 路由工作正常！</p>

    <div class="info-card">
      <h2>📍 页面信息</h2>
      <p><strong>当前路径:</strong> {{ currentPath }}</p>
      <p><strong>当前时间:</strong> {{ currentTime }}</p>
      <p><strong>页面URL:</strong> {{ pageUrl }}</p>
    </div>

    <div class="api-card">
      <h2>🔗 API 测试</h2>
      <div class="api-buttons">
        <button @click="testXML" class="btn btn-primary">测试 XML API</button>
        <button @click="testJSON" class="btn btn-secondary">测试 JSON API</button>
        <a href="/api/sitemap" target="_blank" class="btn btn-link">查看 XML</a>
        <a href="/api/sitemap-json" target="_blank" class="btn btn-link">查看 JSON</a>
      </div>

      <div v-if="testResult" class="test-result">
        <h3>测试结果:</h3>
        <pre>{{ testResult }}</pre>
      </div>
    </div>

    <div class="navigation-card">
      <h2>🧭 导航测试</h2>
      <div class="nav-buttons">
        <a href="/" class="btn btn-nav">返回首页</a>
        <a href="/test/sitemap" class="btn btn-nav">测试页面</a>
        <a href="/levels" class="btn btn-nav">关卡页面</a>
        <a href="/blog" class="btn btn-nav">博客页面</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')
const currentPath = ref('')
const pageUrl = ref('')
const testResult = ref('')

let timeInterval = null

function updateInfo() {
  currentTime.value = new Date().toLocaleString('zh-CN')
  currentPath.value = window.location.pathname
  pageUrl.value = window.location.href
}

async function testXML() {
  testResult.value = '正在测试 XML API...'
  try {
    const response = await fetch('/api/sitemap')
    if (response.ok) {
      const text = await response.text()
      testResult.value = `✅ XML API 测试成功!
状态: ${response.status}
Content-Type: ${response.headers.get('content-type')}
内容长度: ${text.length} 字符

内容预览:
${text.substring(0, 500)}...`
    } else {
      testResult.value = `❌ XML API 测试失败!
状态: ${response.status}
错误: ${response.statusText}`
    }
  } catch (error) {
    testResult.value = `❌ XML API 测试出错!
错误: ${error.message}`
  }
}

async function testJSON() {
  testResult.value = '正在测试 JSON API...'
  try {
    const response = await fetch('/api/sitemap-json')
    if (response.ok) {
      const json = await response.json()
      testResult.value = `✅ JSON API 测试成功!
状态: ${response.status}
Content-Type: ${response.headers.get('content-type')}
总URL数量: ${json.totalUrls}
生成时间: ${json.generated}

完整响应:
${JSON.stringify(json, null, 2)}`
    } else {
      testResult.value = `❌ JSON API 测试失败!
状态: ${response.status}
错误: ${response.statusText}`
    }
  } catch (error) {
    testResult.value = `❌ JSON API 测试出错!
错误: ${error.message}`
  }
}

onMounted(() => {
  updateInfo()
  timeInterval = setInterval(updateInfo, 1000)
})

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval)
  }
})
</script>

<style scoped>
.sitemap-manager-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
}

h1 {
  color: #2d3748;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
}

.info-card,
.api-card,
.navigation-card {
  background: white;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.info-card h2,
.api-card h2,
.navigation-card h2 {
  color: #2d3748;
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.api-buttons,
.nav-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
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

.btn-link {
  background-color: #38a169;
  color: white;
}

.btn-link:hover {
  background-color: #2f855a;
}

.btn-nav {
  background-color: #ed8936;
  color: white;
}

.btn-nav:hover {
  background-color: #dd6b20;
}

.test-result {
  margin-top: 20px;
  padding: 15px;
  background-color: #f7fafc;
  border-radius: 6px;
  border-left: 4px solid #4299e1;
}

.test-result h3 {
  margin-top: 0;
  color: #2d3748;
}

.test-result pre {
  background-color: white;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 12px;
  line-height: 1.4;
  white-space: pre-wrap;
  word-wrap: break-word;
}

@media (max-width: 768px) {

  .api-buttons,
  .nav-buttons {
    flex-direction: column;
  }

  .btn {
    text-align: center;
  }
}
</style>