# 动态站点地图系统

## 概述

这个项目实现了一个完全动态的站点地图系统，能够自动从数据源生成XML和JSON格式的站点地图。

## 特性

- ✅ **动态生成**: 基于实际数据文件自动生成站点地图
- ✅ **多格式支持**: 支持XML和JSON两种格式
- ✅ **缓存优化**: API响应包含适当的缓存头
- ✅ **管理界面**: 提供可视化的站点地图管理界面
- ✅ **SEO优化**: 符合搜索引擎标准的XML格式
- ✅ **错误处理**: 完善的错误处理和日志记录
- ✅ **测试工具**: 内置测试脚本验证功能

## 文件结构

```
├── src/services/sitemapService.js    # 核心站点地图服务
├── src/components/SitemapManager.vue # 管理界面组件
├── src/views/SitemapManagerView.vue  # 管理页面
├── api/sitemap.js                    # XML格式API端点
├── api/sitemap-json.js              # JSON格式API端点
├── scripts/test-sitemap.js          # 测试脚本
└── docs/SITEMAP.md                  # 本文档
```

## API 端点

### XML 站点地图
- **URL**: `/sitemap.xml` 或 `/api/sitemap`
- **格式**: XML
- **缓存**: 1小时
- **用途**: 搜索引擎提交

### JSON 站点地图
- **URL**: `/api/sitemap-json`
- **格式**: JSON
- **缓存**: 30分钟
- **用途**: 调试和管理

## 管理界面

访问 `/admin/sitemap` 可以查看站点地图管理界面，功能包括：

- 📊 **统计信息**: 显示URL总数、生成时间等
- 🔍 **搜索过滤**: 按URL内容和优先级过滤
- 📥 **下载功能**: 下载XML和JSON格式文件
- 🔗 **URL测试**: 直接测试每个URL的可访问性
- 🔄 **实时刷新**: 手动刷新站点地图数据

## 配置说明

### 静态页面配置

在 `src/services/sitemapService.js` 中的 `STATIC_PAGES` 数组：

```javascript
const STATIC_PAGES = [
  {
    path: '/',
    changefreq: 'daily',
    priority: '1.0',
    title: 'Dreamy Room - Home'
  },
  // ... 更多页面
]
```

### 站点配置

```javascript
const SITE_CONFIG = {
  baseUrl: 'https://dreamy-room.net',
  defaultChangefreq: 'monthly',
  defaultPriority: '0.5'
}
```

## 优先级说明

| 优先级 | 页面类型 | 说明 |
|--------|----------|------|
| 1.0 | 首页 | 最高优先级 |
| 0.9 | 关卡列表页 | 核心功能页面 |
| 0.8 | 下载页、博客首页 | 重要功能页面 |
| 0.7 | 关卡详情、博客详情 | 内容页面 |
| 0.5 | 关于我们、联系我们 | 一般页面 |
| 0.3 | 法律页面 | 低优先级页面 |

## 更新频率说明

| 频率 | 页面类型 | 说明 |
|------|----------|------|
| daily | 首页、关卡列表、博客首页 | 每日更新 |
| monthly | 关卡详情、博客详情、一般页面 | 每月更新 |
| yearly | 法律页面 | 每年更新 |

## 使用方法

### 1. 测试站点地图

```bash
npm run test:sitemap
```

### 2. 访问XML站点地图

```
https://your-domain.com/sitemap.xml
```

### 3. 访问JSON站点地图

```
https://your-domain.com/api/sitemap-json
```

### 4. 访问管理界面

```
https://your-domain.com/admin/sitemap
```

## 数据源

站点地图自动从以下数据源生成URL：

1. **静态页面**: 硬编码在服务中的固定页面
2. **关卡数据**: `src/data/levels/` 目录下的所有JS文件
3. **博客数据**: `src/data/blog.js` 文件中的博客文章

## 搜索引擎提交

站点地图已在 `public/robots.txt` 中声明：

```
Sitemap: https://dreamy-room.net/sitemap.xml
```

建议手动提交到主要搜索引擎：

- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [Yandex Webmaster](https://webmaster.yandex.com/)

## 监控和维护

### 定期检查

1. 访问管理界面检查URL数量是否正常
2. 测试随机URL的可访问性
3. 检查搜索引擎的抓取状态

### 故障排除

如果站点地图生成失败：

1. 检查数据文件格式是否正确
2. 查看服务器日志中的错误信息
3. 运行测试脚本诊断问题
4. 确认所有依赖的数据文件存在

## 性能优化

- API响应包含适当的缓存头
- 使用异步加载避免阻塞
- 错误处理确保服务稳定性
- 支持增量更新（未来功能）

## 扩展功能

未来可以考虑添加：

- 📈 **分析统计**: URL访问统计和SEO分析
- 🔔 **变更通知**: 站点地图变更时自动通知搜索引擎
- 🗂️ **分类管理**: 按内容类型分组管理URL
- 📱 **移动优化**: 针对移动端的站点地图优化
- 🌍 **多语言支持**: 多语言站点的站点地图生成