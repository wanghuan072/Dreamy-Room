<template>
  <div class="notfound-bg">
    <Header />
    <div class="notfound-content">
      <h1 class="notfound-title">404 - Page Not Found</h1>
      <p class="notfound-desc">Sorry, the page you are looking for does not exist.</p>
      <router-link to="/" class="notfound-home-btn">Return to Home</router-link>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { onMounted } from 'vue'
import { setSEO } from '@/utils/seo.js'

onMounted(() => {
  const url = window.location.origin + window.location.pathname
  setSEO({
    title: '404 - Page Not Found',
    description: 'Sorry, the page you are looking for does not exist.',
    og: {
      title: '404 - Page Not Found',
      description: 'Sorry, the page you are looking for does not exist.',
      type: 'website',
      url,
    },
    canonical: url,
  })
  // 动态插入 noindex
  let robots = document.querySelector('meta[name="robots"]')
  if (!robots) {
    robots = document.createElement('meta')
    robots.name = 'robots'
    document.head.appendChild(robots)
  }
  robots.content = 'noindex, nofollow'
})
</script>

<style scoped>
.notfound-bg {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffb6c1 0%, #e6e6fa 50%, #98fb98 100%);
  display: flex;
  flex-direction: column;
}
.notfound-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
}
.notfound-title {
  font-size: 2.5rem;
  color: #2d1b69;
  margin-bottom: 20px;
  font-weight: bold;
  text-shadow: 2px 2px 8px #fff, 0 2px 16px #e6e6fa, 0 0 2px #fff;
}
.notfound-desc {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
}
.notfound-home-btn {
  display: inline-block;
  padding: 12px 28px;
  background: linear-gradient(90deg, #ffe4ec 0%, #ffb6c1 100%);
  color: #2d1b69;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 2px 12px #ffe4ec33;
  transition: background 0.2s, color 0.2s;
}
.notfound-home-btn:hover {
  background: linear-gradient(90deg, #ffb6c1 0%, #ffe4ec 100%);
  color: #6a1b9a;
}
</style> 