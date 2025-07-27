# 站点地图问题解决方案

## 问题分析

用户反馈访问 `/admin/sitemap` 和相关按钮都跳转到 NotFound 页面。经过分析，可能的原因包括：

1. **路径别名问题**: 组件中使用了 `@/data/blog.js` 等路径别名，在某些环境下可能无法正确解析
2. **组件导入失败**: 如果组件导入失败，路由会fallback到NotFound页面
3. **API端点问题**: API路径可能无法正确访问

## 解决方案

### 1. 简化SitemapManagerView组件

创建一个不依赖复杂导入的简单版本：

```vue
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
```

### 2. 修复API端点

确保API端点不依赖路径别名，直接使用相对路径导入。

### 3. 测试步骤

1. 访问 `/admin/sitemap` 检查页面是否正常显示
2. 点击页面中的链接测试API端点
3. 使用测试页面验证所有功能

## 实施计划

1. 简化组件实现
2. 修复API路径问题
3. 创建测试页面
4. 验证功能正常