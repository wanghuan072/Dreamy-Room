<template>
  <div class="levels-page">
    <Header />

    <main class="main-content">
      <div class="container">
        <h1 class="page-title">Level Walkthroughs</h1>
        <LevelsList />
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import LevelsList from '@/components/LevelsList.vue'
import { onMounted } from 'vue'
import { setSEO } from '@/utils/seo.js'

onMounted(() => {
  const url = window.location.origin + '/levels'
  setSEO({
    title: 'Dreamy Room Level Walkthroughs',
    description:
      'Browse all Dreamy Room level walkthroughs, solutions, and tips. Find guides for every level in the relaxing puzzle game Dreamy Room.',
    keywords: 'Dreamy Room, level walkthrough, puzzle solution, game guide, relaxing',
    og: {
      title: 'Dreamy Room Level Walkthroughs',
      description: 'Browse all Dreamy Room level walkthroughs, solutions, and tips.',
      type: 'website',
      url,
      image: 'https://your-domain.com/og-image.jpg',
    },
    twitter: {
      card: 'summary_large_image',
    },
    canonical: url,
    jsonld: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Dreamy Room Level Walkthroughs',
      url,
      description: 'Browse all Dreamy Room level walkthroughs, solutions, and tips.',
    },
  })
})
</script>

<style scoped>
.levels-page {
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

@media (max-width: 1024px) {
  .container {
    padding: 0 10px;
  }
  .page-title {
    font-size: 2rem;
    margin-bottom: 28px;
  }
  .main-content {
    padding: 40px 0;
  }
}
@media (max-width: 768px) {
  .container {
    padding: 0 6px;
  }
  .page-title {
    font-size: 1.2rem;
    margin-bottom: 14px;
  }
  .main-content {
    padding: 12px 0;
  }
}
</style> 