// SEO配置文件 - 参考wplace-tracer项目结构
import { blogPosts } from '@/data/blog.js'

// 网站基础配置
export const siteConfig = {
    name: 'Dreamy Room',
    url: 'https://dreamy-room.net',
    description: 'Transform Your Space, One Room at a Time - Dreamy Room Game',
    language: 'zh-CN',
    defaultImage: '/og-image.jpg',
    themeColor: '#ff69b4',
    contact: {
        email: 'support@dreamy-room.net',
        twitter: 'https://x.com/wenyong964203/status/1960543876881768510',
        facebook: 'https://facebook.com/dreamyroom'
    }
}

// 默认SEO配置
export const defaultSEO = {
    title: 'Dreamy Room - Ultimate Puzzle Escape Adventure',
    description: 'Embark on a heartwarming journey of home organization and storytelling. With over 100+ beautifully designed levels, Dreamy Room offers the perfect blend of puzzle-solving and creative expression.',
    keywords: 'Dreamy Room, puzzle game, escape room, room organization, puzzle adventure, mobile game, brain teaser',
    author: 'Dreamy Room Team',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1.0'
}

// 默认社交媒体配置
export const defaultSocial = {
    title: 'Dreamy Room - Ultimate Puzzle Escape Adventure',
    description: 'Transform Your Space, One Room at a Time. Experience the joy of transforming cluttered spaces into cozy, organized sanctuaries.',
    image: '/og-image.jpg',
    type: 'website',
    twitter: {
        card: 'summary_large_image',
        site: '@dreamyroom',
        creator: '@dreamyroom'
    },
    facebook: {
        appId: '123456789',
        type: 'website'
    }
}

// 获取所有动态路由
export function getAllRoutes() {
    const routes = []

    // 添加博客路由
    if (blogPosts && Array.isArray(blogPosts)) {
        blogPosts.forEach(post => {
            if (post.addressBar) {
                routes.push({
                    loc: `/blog/${post.addressBar}`,
                    lastmod: post.publishDate || new Date().toISOString().split('T')[0],
                    changefreq: 'weekly',
                    priority: 0.6
                })
            }
        })
    }

    // 添加关卡路由 (1-108)
    for (let i = 1; i <= 108; i++) {
        routes.push({
            loc: `/levels/level-${i}`,
            lastmod: '2025-07-24', // 使用关卡数据的发布时间
            changefreq: 'monthly',
            priority: 0.7
        })
    }

    return routes
}

// 站点地图配置
export const sitemapConfig = {
    hostname: 'https://dreamy-room.net',
    dynamicRoutes: getAllRoutes(),
    readable: true,
    exclude: ['/404', '/error', '/admin', '/api'],
    outDir: 'dist',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8
}

// SEO工具函数
/**
 * 设置页面SEO标签
 * @param {Object} seo - SEO对象，包含title, description, keywords
 * @param {string} canonicalUrl - 规范URL（可选）
 */
export function setPageSEO(seo, canonicalUrl = null) {
    const { title, description, keywords } = seo

    // 设置页面标题
    if (title) {
        document.title = title
    }

    // 设置meta描述
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.name = 'description'
        document.head.appendChild(metaDesc)
    }
    metaDesc.content = description || defaultSEO.description

    // 设置meta关键词
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.name = 'keywords'
        document.head.appendChild(metaKeywords)
    }
    metaKeywords.content = keywords || defaultSEO.keywords

    // 设置规范URL
    if (canonicalUrl) {
        setCanonicalUrl(canonicalUrl)
    }
}

/**
 * 设置社交媒体标签
 * @param {Object} social - 社交媒体配置
 */
export function setSocialTags(social = {}) {
    const config = { ...defaultSocial, ...social }

    // Open Graph标签
    setMetaTag('property', 'og:title', config.title)
    setMetaTag('property', 'og:description', config.description)
    setMetaTag('property', 'og:image', config.image)
    setMetaTag('property', 'og:url', window.location.href)
    setMetaTag('property', 'og:type', config.type)
    setMetaTag('property', 'og:site_name', siteConfig.name)

    // Twitter Card标签
    setMetaTag('name', 'twitter:card', config.twitter.card)
    setMetaTag('name', 'twitter:site', config.twitter.site)
    setMetaTag('name', 'twitter:creator', config.twitter.creator)
    setMetaTag('name', 'twitter:title', config.title)
    setMetaTag('name', 'twitter:description', config.description)
    setMetaTag('name', 'twitter:image', config.image)

    // Facebook标签
    if (config.facebook.appId) {
        setMetaTag('property', 'fb:app_id', config.facebook.appId)
    }
}

/**
 * 设置规范URL
 * @param {string} url - 规范URL
 */
export function setCanonicalUrl(url) {
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.appendChild(canonical)
    }
    canonical.href = url
}

/**
 * 设置meta标签
 * @param {string} attr - 属性名 (name 或 property)
 * @param {string} value - 属性值
 * @param {string} content - 标签内容
 */
function setMetaTag(attr, value, content) {
    let meta = document.querySelector(`meta[${attr}="${value}"]`)
    if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attr, value)
        document.head.appendChild(meta)
    }
    meta.content = content
}

/**
 * 生成robots.txt内容
 * @returns {string} robots.txt内容
 */
export function generateRobotsTxt() {
    return `# robots.txt for ${siteConfig.name}
# 允许所有主流搜索引擎抓取主站内容
User-agent: *
Allow: /

# 禁止抓取常见无用或敏感目录
Disallow: /node_modules/
Disallow: /private/
Disallow: /temp/
Disallow: /admin/
Disallow: /api/
Disallow: /cgi-bin/
Disallow: /test/
Disallow: /drafts/

# 禁止抓取URL参数
Disallow: /*?*

# 指定站点地图
Sitemap: ${siteConfig.url}/sitemap.xml

# 针对Googlebot/Bingbot等可单独定制
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 1

# 爬取延迟设置
Crawl-delay: 1`
}

/**
 * 生成结构化数据
 * @param {Object} data - 页面数据
 * @returns {Object} 结构化数据对象
 */
export function generateStructuredData(data = {}) {
    const baseSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: data.title || defaultSEO.title,
        description: data.description || defaultSEO.description,
        url: data.url || window.location.href,
        mainEntity: {
            '@type': 'Game',
            name: 'Dreamy Room',
            description: 'A puzzle escape game where players organize rooms and solve puzzles',
            genre: 'Puzzle',
            platform: ['iOS', 'Android'],
            applicationCategory: 'Game',
            operatingSystem: ['iOS 14.0+', 'Android 6.0+']
        }
    }

    return baseSchema
}

/**
 * 生成面包屑结构化数据
 * @param {Array} breadcrumbs - 面包屑数组
 * @returns {Object} 面包屑结构化数据
 */
export function generateBreadcrumbSchema(breadcrumbs) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    }
}

/**
 * 生成文章结构化数据
 * @param {Object} article - 文章数据
 * @returns {Object} 文章结构化数据
 */
export function generateArticleSchema(article) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description || article.content?.substring(0, 160),
        image: article.imageSrc,
        datePublished: article.publishDate,
        dateModified: article.publishDate,
        author: {
            '@type': 'Organization',
            name: siteConfig.name
        },
        publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
                '@type': 'ImageObject',
                url: siteConfig.defaultImage
            }
        }
    }
}

/**
 * 生成网站结构化数据
 * @returns {Object} 网站结构化数据
 */
export function generateWebsiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        potentialAction: {
            '@type': 'SearchAction',
            target: `${siteConfig.url}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
        }
    }
}

/**
 * 生成组织结构化数据
 * @returns {Object} 组织结构化数据
 */
export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
        logo: siteConfig.defaultImage,
        sameAs: [
            siteConfig.contact.twitter,
            siteConfig.contact.facebook
        ].filter(Boolean)
    }
}
