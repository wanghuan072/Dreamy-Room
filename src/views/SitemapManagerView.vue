<template>
  <div class="sitemap-view">
    <h1>🗺️ 站点地图</h1>
    <p>网站站点地图已生成并可供访问</p>

    <div class="sitemap-info">
      <h2>📍 站点地图信息</h2>
      <p><strong>站点地图URL:</strong> <a href="/sitemap.xml" target="_blank">https://dreamy-room.net/sitemap.xml</a></p>
      <p><strong>格式:</strong> XML (标准格式)</p>
      <p><strong>更新时间:</strong> 2025-01-27</p>
      <p><strong>包含页面:</strong> 主要页面 + 关卡页面 + 博客页面</p>
    </div>

    <div class="sitemap-links">
      <h2>🔗 快速链接</h2>
      <div class="links">
        <a href="/sitemap.xml" target="_blank" class="btn btn-primary">查看站点地图</a>
        <a href="/" class="btn btn-secondary">返回首页</a>
        <a href="/levels" class="btn btn-secondary">查看关卡</a>
        <a href="/blog" class="btn btn-secondary">查看博客</a>
      </div>
    </div>

    <div class="sitemap-status">
      <h2>✅ 状态检查</h2>
      <p><strong>robots.txt:</strong> 已配置站点地图引用</p>
      <p><strong>搜索引擎:</strong> 可提交到 Google Search Console</p>
      <p><strong>格式验证:</strong> 符合 XML Sitemap 标准</p>
    </div>
  </div>
</template>

<style scoped>
.sitemap-view {
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

.sitemap-info,
.sitemap-links,
.sitemap-status {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sitemap-info h2,
.sitemap-links h2,
.sitemap-status h2 {
  color: #2d3748;
  margin-top: 0;
  margin-bottom: 15px;
}

.sitemap-info a {
  color: #4299e1;
  text-decoration: none;
}

.sitemap-info a:hover {
  text-decoration: underline;
}

.links {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
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

@media (max-width: 768px) {
  .links {
    flex-direction: column;
  }

  .btn {
    text-align: center;
  }
}
</style>