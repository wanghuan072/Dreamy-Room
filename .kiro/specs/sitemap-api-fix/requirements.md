# 站点地图API修复需求文档

## 介绍

用户反馈站点地图管理页面能够正常访问，但是API端点返回404错误。具体问题包括：
1. `/api/sitemap` 返回404
2. `/api/sitemap-json` 返回404  
3. JSON API测试出现"Unexpected token"错误，说明返回的不是有效的JSON

需要修复API端点配置，确保站点地图功能完全正常工作。

## 需求

### 需求1：修复API端点配置

**用户故事：** 作为网站管理员，我希望能够访问站点地图API端点，以便获取XML和JSON格式的站点地图数据。

#### 验收标准

1. WHEN 用户访问 `/api/sitemap` THEN 系统应该返回有效的XML格式站点地图
2. WHEN 用户访问 `/api/sitemap-json` THEN 系统应该返回有效的JSON格式站点地图数据
3. WHEN API返回数据 THEN 响应状态码应该是200
4. WHEN API返回XML数据 THEN Content-Type应该是 `application/xml`
5. WHEN API返回JSON数据 THEN Content-Type应该是 `application/json`

### 需求2：确保API数据完整性

**用户故事：** 作为开发者，我希望API返回的站点地图数据包含所有必要的页面信息，以便搜索引擎能够正确索引网站。

#### 验收标准

1. WHEN API生成站点地图 THEN 应该包含所有静态页面（首页、关卡页、博客页等）
2. WHEN API生成站点地图 THEN 应该包含所有动态页面（关卡详情、博客详情）
3. WHEN API生成站点地图 THEN 每个URL应该包含正确的优先级和更新频率
4. WHEN API生成站点地图 THEN 应该包含正确的lastmod时间戳
5. WHEN API生成站点地图 THEN JSON格式应该包含统计信息（总URL数量、生成时间等）

### 需求3：API错误处理

**用户故事：** 作为系统管理员，我希望API具有良好的错误处理机制，以便在出现问题时能够快速诊断和解决。

#### 验收标准

1. WHEN API遇到数据加载错误 THEN 应该返回适当的错误响应而不是崩溃
2. WHEN API无法生成站点地图 THEN 应该返回500状态码和错误信息
3. WHEN API处理请求 THEN 应该在服务器日志中记录相关信息
4. WHEN API返回错误 THEN 错误信息应该足够详细以便调试

### 需求4：API性能优化

**用户故事：** 作为网站访问者，我希望站点地图API响应速度快，以便搜索引擎能够高效地抓取站点地图。

#### 验收标准

1. WHEN API处理请求 THEN 响应时间应该在2秒内
2. WHEN API返回数据 THEN 应该包含适当的缓存头
3. WHEN API生成站点地图 THEN 应该避免重复计算相同的数据
4. WHEN API处理大量URL THEN 应该能够高效处理而不超时

### 需求5：开发和测试工具

**用户故事：** 作为开发者，我希望有便捷的工具来测试和验证站点地图API功能，以便确保系统正常工作。

#### 验收标准

1. WHEN 开发者运行测试命令 THEN 应该能够验证API端点是否正常工作
2. WHEN 开发者访问管理界面 THEN 应该能够实时测试API功能
3. WHEN 开发者需要调试 THEN 应该有详细的日志和错误信息
4. WHEN 开发者部署更新 THEN 应该有自动化测试验证API功能
5. WHEN 开发者需要监控 THEN 应该能够查看API的健康状态和性能指标