<template>
  <div class="sitemap-manager">
    <h1>🗺️ 站点地图管理</h1>
    <p>站点地图管理页面正常工作！</p>

    <div class="links">
      <a href="/api/sitemap" target="_blank">查看 XML 站点地图</a>
      <a href="/api/sitemap-json" target="_blank">查看 JSON 站点地图</a>
    </div>

    <div class="info">
      <h2>系统信息</h2>
      <p>当前时间: {{ currentTime }}</p>
      <p>页面路径: {{ $route.path }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentTime = ref('')

function updateTime() {
  currentTime.value = new Date().toLocaleString()
}

onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000)
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
</style>