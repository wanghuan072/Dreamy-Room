# 站点地图API修复设计文档

## 概述

本设计文档旨在解决站点地图API端点返回404错误的问题。通过分析当前架构，我们发现问题主要出现在API路由配置和部署环境的差异上。

## 问题分析

### 当前问题
1. **API端点404错误**: `/api/sitemap` 和 `/api/sitemap-json` 返回404
2. **JSON解析错误**: API返回的不是有效JSON格式
3. **路由配置问题**: Vercel API路由可能未正确配置
4. **开发环境差异**: 本地开发和生产环境的API处理方式不同

### 根本原因分析
1. **Vercel API路由限制**: Vercel的API路由需要特定的文件结构和导出格式
2. **路径别名问题**: API文件中使用的路径别名在Vercel环境下可能无法解析
3. **ES模块兼容性**: Node.js环境下的ES模块导入可能存在兼容性问题
4. **缓存和部署问题**: API文件可能未正确部署或被缓存

## 架构设计

### 整体架构
```
Frontend (Vue.js)
    ↓ HTTP Request
API Gateway (Vercel)
    ↓ Route to
API Handlers
    ↓ Import
Data Services
    ↓ Read
Static Data Files
```

### API端点设计

#### 1. XML站点地图端点
- **路径**: `/api/sitemap`
- **方法**: GET
- **响应格式**: XML
- **Content-Type**: `application/xml; charset=utf-8`
- **缓存**: 1小时

#### 2. JSON站点地图端点
- **路径**: `/api/sitemap-json`
- **方法**: GET
- **响应格式**: JSON
- **Content-Type**: `application/json; charset=utf-8`
- **缓存**: 30分钟

## 组件和接口

### 1. API处理器 (api/sitemap.js)
```javascript
// Vercel兼容的API处理器
export default async function handler(req, res) {
  // 设置CORS和缓存头
  // 生成XML站点地图
  // 返回响应
}
```

### 2. 数据服务层
```javascript
// 独立的数据服务，不依赖路径别名
class SitemapDataService {
  async getAllLevels()
  async getBlogPosts()
  async getStaticPages()
  async generateSitemapData()
}
```

### 3. 配置管理
```javascript
// 站点配置
const SITE_CONFIG = {
  baseUrl: process.env.SITE_URL || 'https://dreamy-room.net',
  cacheMaxAge: 3600,
  // ...
}
```

## 数据模型

### 站点地图条目模型
```typescript
interface SitemapEntry {
  loc: string;           // 完整URL
  lastmod: string;       // ISO日期格式
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: string;      // 0.0-1.0
}
```

### JSON响应模型
```typescript
interface SitemapResponse {
  generated: string;     // 生成时间
  totalUrls: number;     // URL总数
  baseUrl: string;       // 基础URL
  urls: SitemapEntry[];  // URL列表
}
```

## 错误处理

### 错误类型和处理策略

1. **数据加载错误**
   - 捕获文件读取异常
   - 返回部分数据而不是完全失败
   - 记录详细错误日志

2. **网络错误**
   - 设置适当的HTTP状态码
   - 返回结构化错误信息
   - 实现重试机制

3. **格式化错误**
   - 验证数据完整性
   - 提供默认值
   - 优雅降级

### 错误响应格式
```javascript
{
  error: true,
  message: "具体错误信息",
  code: "ERROR_CODE",
  timestamp: "2025-01-27T12:00:00Z"
}
```

## 测试策略

### 1. 单元测试
- 数据服务层测试
- URL生成逻辑测试
- 错误处理测试

### 2. 集成测试
- API端点响应测试
- 数据完整性测试
- 性能测试

### 3. 端到端测试
- 浏览器访问测试
- 搜索引擎爬虫测试
- 缓存行为测试

## 部署和配置

### Vercel配置
```json
{
  "functions": {
    "api/sitemap.js": {
      "maxDuration": 10
    },
    "api/sitemap-json.js": {
      "maxDuration": 10
    }
  }
}
```

### 环境变量
- `SITE_URL`: 网站基础URL
- `NODE_ENV`: 环境标识
- `DEBUG`: 调试模式开关

## 性能优化

### 1. 缓存策略
- HTTP缓存头设置
- 内存缓存（开发环境）
- CDN缓存（生产环境）

### 2. 数据优化
- 延迟加载非关键数据
- 数据预处理和缓存
- 增量更新机制

### 3. 响应优化
- 压缩响应内容
- 流式响应（大数据集）
- 并行数据处理

## 监控和日志

### 1. 性能监控
- 响应时间监控
- 错误率统计
- 资源使用监控

### 2. 日志记录
- 请求日志
- 错误日志
- 性能日志

### 3. 告警机制
- API可用性告警
- 性能异常告警
- 错误率告警

## 安全考虑

### 1. 访问控制
- 速率限制
- IP白名单（如需要）
- 请求验证

### 2. 数据安全
- 敏感信息过滤
- 输入验证
- 输出编码

### 3. 错误信息安全
- 避免泄露系统信息
- 统一错误响应格式
- 安全日志记录

## 迁移计划

### 阶段1: 修复当前API
1. 重写API处理器，移除路径别名依赖
2. 实现Vercel兼容的导出格式
3. 添加基本错误处理

### 阶段2: 增强功能
1. 添加缓存机制
2. 实现性能优化
3. 完善错误处理

### 阶段3: 监控和维护
1. 添加监控和日志
2. 实现自动化测试
3. 建立维护流程

## 技术决策

### 1. 不使用路径别名
**决策**: 在API文件中使用相对路径而不是路径别名
**原因**: Vercel环境下路径别名解析可能存在问题
**影响**: 需要重构现有API代码

### 2. 独立数据服务
**决策**: 创建独立的数据服务层
**原因**: 提高代码复用性和可测试性
**影响**: 需要重构数据访问逻辑

### 3. 环境适配
**决策**: 实现开发和生产环境的适配逻辑
**原因**: 确保在不同环境下都能正常工作
**影响**: 增加配置复杂性但提高稳定性