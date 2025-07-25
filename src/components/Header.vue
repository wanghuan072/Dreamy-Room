<template>
  <header class="header" :class="{ 'menu-open': showMobileMenu }">
    <div class="header-container">
      <div class="logo-section">
        <img src="/images/logo.png" alt="Dreamy Room" class="logo-icon" />
        <span class="site-title">Dreamy Room</span>
      </div>
      <nav class="navigation" v-if="!showMobileMenu">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/levels" class="nav-link">Levels</router-link>
        <router-link to="/download" class="nav-link">Download</router-link>
        <router-link to="/blog" class="nav-link">Blog</router-link>
      </nav>
      <button class="menu-btn" @click="showMobileMenu = true" v-if="isMobile && !showMobileMenu">
        <span class="menu-icon">☰</span>
      </button>
    </div>
    <transition name="fade">
      <div class="mobile-menu" v-if="showMobileMenu">
        <button class="close-btn" @click="showMobileMenu = false">×</button>
        <nav class="mobile-nav">
          <router-link to="/" class="mobile-nav-link" @click="closeMenu">Home</router-link>
          <router-link to="/levels" class="mobile-nav-link" @click="closeMenu">Levels</router-link>
          <router-link to="/download" class="mobile-nav-link" @click="closeMenu"
            >Download</router-link
          >
          <router-link to="/blog" class="mobile-nav-link" @click="closeMenu">Blog</router-link>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
const showMobileMenu = ref(false)
const isMobile = ref(false)

function checkMobile() {
  isMobile.value = window.innerWidth <= 768
}

function closeMenu() {
  showMobileMenu.value = false
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #e6e6fa 0%, #dda0dd 100%);
  padding: 15px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo-icon {
  position: relative;
  width: 40px;
  height: 40px;
}

.box {
  width: 100%;
  height: 100%;
  background: #d2b48c;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.box::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background: linear-gradient(135deg, #f5deb3, #deb887);
  border-radius: 6px;
}

.items {
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
}

.item {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.item1 {
  background: #87ceeb;
  top: 2px;
  left: 2px;
}

.item2 {
  background: #ffb6c1;
  top: 2px;
  right: 2px;
}

.item3 {
  background: #98fb98;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
}

.site-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #2d1b69;
  margin: 0;
  text-shadow: 2px 2px 4px #fff, 0 0 10px #fff8, 0 0 20px #fff5;
  -webkit-text-stroke: 1px #fff;
}

.navigation {
  display: flex;
  gap: 30px;
  align-items: center;
}

.nav-link {
  font-size: 1rem;
  color: #2d1b69;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 8px 12px;
  border-radius: 15px;
  text-shadow: 1px 1px 4px #fff;
  -webkit-text-stroke: 0.5px #fff9;
}

.nav-link:hover {
  color: #6a1b9a;
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  text-shadow: 2px 2px 6px #fff;
}

.menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: #2d1b69;
  cursor: pointer;
  z-index: 201;
}
.menu-icon {
  font-size: 2.2rem;
}

@media (max-width: 768px) {
  .header {
    padding: 10px 0;
  }
  .site-title {
    font-size: 1.4rem;
  }
  .header-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
    padding: 0 10px;
  }
  .navigation {
    display: none;
  }
  .menu-btn {
    display: block;
  }
  .header {
    transition: height 0.3s;
  }
  .header.menu-open {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 201;
    background: linear-gradient(135deg, #e6e6fa 0%, #dda0dd 100%);
  }
  .nav-link {
    font-size: 0.9rem;
    padding: 6px 10px;
  }
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #e6e6fa 0%, #dda0dd 100%);
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s;
}
.close-btn {
  position: absolute;
  top: 30px;
  right: 30px;
  background: none;
  border: none;
  font-size: 2.5rem;
  color: #2d1b69;
  cursor: pointer;
}
.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
}
.mobile-nav-link {
  font-size: 2rem;
  color: #2d1b69;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s;
  text-shadow: 1px 1px 4px #fff;
}
.mobile-nav-link:hover {
  color: #6a1b9a;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style> 