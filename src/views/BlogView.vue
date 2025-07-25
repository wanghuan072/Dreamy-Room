<template>
  <div class="blog-page">
    <Header />

    <main class="main-content">
      <div class="container">
        <h1 class="page-title">Blog</h1>

        <div class="blog-grid">
          <article
            v-for="post in blogPosts"
            :key="post.id"
            class="blog-card"
            @click="goToBlogDetail(post.addressBar)"
          >
            <div class="blog-image">
              <img
                :src="post.imageSrc"
                :alt="post.imageAlt"
                loading="lazy"
                width="400"
                height="250"
              />
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-date">{{ formatDateToEnglish(post.publishDate) }}</span>
              </div>
              <h2 class="blog-title">{{ post.title }}</h2>
            </div>
          </article>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { blogPosts } from '@/data/blog.js'

const router = useRouter()

function formatDateToEnglish(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (isNaN(date)) return dateStr
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function goToBlogDetail(addressBar) {
  router.push({ name: 'blog-detail', params: { addressBar: addressBar } })
}
</script>

<style scoped>
.blog-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffb6c1 0%, #e6e6fa 50%, #98fb98 100%);
}

.main-content {
  padding: 60px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-size: 2.5rem;
  color: #2d1b69;
  text-align: center;
  margin-bottom: 40px;
  font-weight: bold;
  text-shadow: 2px 2px 8px #fff, 0 2px 16px #e6e6fa, 0 0 2px #fff;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.blog-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.blog-image {
  height: 200px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.05);
}

.blog-content {
  padding: 25px;
}

.blog-meta {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
}

.blog-date {
  color: #666;
  font-size: 0.9rem;
}

.blog-title {
  font-size: 1.3rem;
  color: #2d1b69;
  line-height: 1.4;
  font-weight: bold;
}

@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .page-title {
    font-size: 2rem;
    margin-bottom: 28px;
  }
}
@media (max-width: 768px) {
  .main-content {
    padding: 20px 0;
  }
  .blog-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 0;
  }
  .page-title {
    font-size: 1.2rem;
    margin-bottom: 14px;
  }
  .blog-content {
    padding: 14px;
  }
  .blog-title {
    font-size: 1rem;
  }
}
</style> 