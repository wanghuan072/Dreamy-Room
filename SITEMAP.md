# 站点地图说明

## 概述

这是一个简单的静态站点地图实现，包含网站的所有主要页面。

## 文件位置

- **站点地图文件**: `public/sitemap.xml`
- **生成脚本**: `scripts/generate-sitemap.js`
- **管理页面**: `/admin/sitemap`

## 访问地址

- **站点地图**: https://dreamy-room.net/sitemap.xml
- **管理界面**: https://dreamy-room.net/admin/sitemap

## 包含的页面

### 静态页面 (9个)
- 首页 (优先级: 1.0)
- 关卡页面 (优先级: 0.9)
- 下载页面 (优先级: 0.8)
- 博客页面 (优先级: 0.8)
- 关于我们 (优先级: 0.5)
- 联系我们 (优先级: 0.5)
- 隐私政策 (优先级: 0.3)
- 服务条款 (优先级: 0.3)
- 版权声明 (优先级: 0.3)

### 动态页面 (101个)
- 关卡详情页 1-100 (优先级: 0.7)
- 博客文章页 (优先级: 0.7)

**总计**: 110个页面

## 使用方法

### 生成站点地图
```bash
npm run sitemap
```

### 测试站点地图
```bash
npm run test:sitemap
```

## 搜索引擎提交

站点地图已在 `robots.txt` 中声明：
```
Sitemap: https://dreamy-room.net/sitemap.xml
```

建议手动提交到：
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

## 更新频率

- **daily**: 首页、关卡列表、博客首页
- **monthly**: 关卡详情、博客详情、一般页面
- **yearly**: 法律页面

## 维护

当添加新页面时，更新 `scripts/generate-sitemap.js` 中的页面配置，然后运行：

```bash
npm run sitemap
```

这样就完成了！简单、直接、有效。