<template>
  <div class="dreamy-home">
    <!-- Header Component -->
    <Header />

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-flex">
          <div class="hero-content">
            <div class="hero-header">
              <div class="logo-section">
                <div class="logo-icon">☕</div>
                <span class="logo-text">Game Guides Collection</span>
              </div>
            </div>
            <div class="hero-main">
              <h1 class="hero-title">View All Dreamy Room Level Guides</h1>
              <p class="hero-description">
                Explore detailed walkthroughs, tips, and strategies for each room level. Enter a
                level number to jump directly to the corresponding guide.
              </p>
              <div class="hero-stats">
                <div class="stat-item">
                  <div class="stat-icon">📋</div>
                  <div class="stat-content">
                    <div class="stat-number">100+</div>
                    <div class="stat-label">Level Guides</div>
                  </div>
                </div>
                <div class="stat-item">
                  <div class="stat-icon">▶️</div>
                  <div class="stat-content">
                    <div class="stat-number">100+</div>
                    <div class="stat-label">Video Tutorials</div>
                  </div>
                </div>
                <div class="stat-item">
                  <div class="stat-icon">🔍</div>
                  <div class="stat-content">
                    <div class="stat-label">Quick Level Search</div>
                  </div>
                </div>
              </div>
              <div class="search-section">
                <SearchLevel />
              </div>
              <div class="action-buttons">
                <router-link to="/levels" class="action-btn primary-btn">
                  <span>Browse All Level Guides</span>
                  <span class="btn-icon">→</span>
                </router-link>
                <router-link to="/download" class="action-btn secondary-btn">
                  <span>Download Game</span>
                  <span class="btn-icon">↓</span>
                </router-link>
              </div>
              <!-- <div class="play-directly">
                <div class="play-icon">🎮</div>
                <div class="play-content">
                  <div class="play-title">Want to play games directly?</div>
                  <div class="play-description">
                    Experience Dreamy Room and more games directly in your browser, no download
                    required.
                  </div>
                </div>
              </div> -->
            </div>
          </div>
          <div class="hero-image">
            <div class="phone-frame">
              <img src="/images/banner.webp" alt="Dreamy Room Preview" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Levels Section -->
    <section class="levels-section">
      <h2 class="section-title">Level Walkthroughs</h2>
      <div class="container">
        <LevelsList />
      </div>
    </section>

    <!-- Game Introduction -->
    <section class="game-intro">
      <div class="container">
        <div class="intro-content">
          <h2 class="section-title">About Dreamy Room</h2>
          <div class="intro-text">
            <p>
              Dreamy Room is an enchanting puzzle adventure game where you help a cute character
              navigate through beautifully designed rooms filled with mysteries and challenges. Each
              level presents unique puzzles that require creativity and logic to solve.
            </p>
            <div class="game-features">
              <div class="feature">
                <span class="feature-icon">🏠</span>
                <span class="feature-text">Beautiful Room Designs</span>
              </div>
              <div class="feature">
                <span class="feature-icon">🧩</span>
                <span class="feature-text">Challenging Puzzles</span>
              </div>
              <div class="feature">
                <span class="feature-icon">🎨</span>
                <span class="feature-text">Adorable Art Style</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Download Section -->
    <section class="download-section">
      <div class="container">
        <div class="download-content">
          <h2 class="section-title">
            <span class="download-icon">⬇️</span> Download Dreamy Room Game
          </h2>
          <div class="download-main">
            <div class="download-info">
              <p class="download-desc">
                Start your dreamy room journey and unlock the secrets of all levels
              </p>
              <div class="download-btns">
                <a class="download-btn appstore" href="https://apps.apple.com/us/app/dreamy-room/id6742221896"
                  target="_blank"><span class="btn-ico">🍑</span> App Store</a>
                <a class="download-btn googleplay"
                  href="https://play.google.com/store/apps/details?id=com.abi.dream.unpacking" target="_blank"><span
                    class="btn-ico">🤖</span> Google Play</a>
              </div>
            </div>
            <div class="download-phone">
              <div class="phone-frame">
                <img src="/images/banner-2.webp" alt="Dreamy Room Preview" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Game Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="features-content">
          <h2 class="section-title">Game Features</h2>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-ico">🛋️</div>
              <div class="feature-main">
                <div class="feature-name">Relaxing Escape</div>
                <div class="feature-desc">
                  Perfect blend of mindfulness and creativity, offering a peaceful retreat from
                  daily life
                </div>
              </div>
            </div>
            <div class="feature-card">
              <div class="feature-ico">⏱️</div>
              <div class="feature-main">
                <div class="feature-name">Heartwarming Story</div>
                <div class="feature-desc">
                  Each item tells a life story, revealing heartwarming moments through organization
                </div>
              </div>
            </div>
            <div class="feature-card">
              <div class="feature-ico">🏆</div>
              <div class="feature-main">
                <div class="feature-name">Cozy Atmosphere</div>
                <div class="feature-desc">
                  Soft visuals, calming music, no time pressure - enjoy the organization process
                </div>
              </div>
            </div>
            <div class="feature-card">
              <div class="feature-ico">👤</div>
              <div class="feature-main">
                <div class="feature-name">Organization Joy</div>
                <div class="feature-desc">
                  Place each item in its perfect spot to create a peaceful space
                </div>
              </div>
            </div>
            <div class="feature-card">
              <div class="feature-ico">⭐</div>
              <div class="feature-main">
                <div class="feature-name">Emotional Resonance</div>
                <div class="feature-desc">
                  From childhood bedrooms to first apartments, each room evokes shared memories
                </div>
              </div>
            </div>
            <div class="feature-card">
              <div class="feature-ico">🎮</div>
              <div class="feature-main">
                <div class="feature-name">Unique Gameplay</div>
                <div class="feature-desc">
                  Simple, intuitive, and charming game experience makes organization fun and
                  relaxing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="faq-content">
          <h2 class="section-title">FAQ</h2>
          <div class="faq-grid">
            <div class="faq-card">
              <div class="faq-q">How do I start playing?</div>
              <div class="faq-a">
                After downloading and installing the game, you can start exploring different rooms
                and create cozy living spaces by organizing items.
              </div>
            </div>
            <div class="faq-card">
              <div class="faq-q">Is the game free?</div>
              <div class="faq-a">
                The game is free to play but contains ads and in-app purchases.
              </div>
            </div>
            <div class="faq-card">
              <div class="faq-q">How do I complete levels?</div>
              <div class="faq-a">
                Carefully observe each item's characteristics and place them in appropriate
                locations. If you need help, you can use the hint feature.
              </div>
            </div>
            <div class="faq-card">
              <div class="faq-q">Is there a time limit?</div>
              <div class="faq-a">
                Some levels may have time limits, but you can extend the time by watching ads or
                using game coins.
              </div>
            </div>
            <div class="faq-card">
              <div class="faq-q">What if I can't place an item correctly?</div>
              <div class="faq-a">
                Try adjusting the item's position and angle, ensuring the placement area is correct.
                If multiple attempts fail, you can use the hint feature.
              </div>
            </div>
            <div class="faq-card">
              <div class="faq-q">What if I encounter issues?</div>
              <div class="faq-a">
                You can contact our support team through the in-game support feature or by emailing
                help@dreamyroom.com.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tips and Tricks Section -->
    <section class="tips-section">
      <div class="container">
        <div class="tips-content">
          <h2 class="section-title">
            <span class="tips-ico">💡</span> Tips and Tricks Dreamy Room Game
          </h2>
          <div class="tips-grid">
            <div class="tips-card">
              <div class="tips-ico-main">💡</div>
              <div class="tips-main">
                <div class="tips-name">Observe Details</div>
                <div class="tips-desc">
                  Carefully observe every detail in the room, they may contain key clues for solving
                  puzzles.
                </div>
              </div>
            </div>
            <div class="tips-card">
              <div class="tips-ico-main">🔍</div>
              <div class="tips-main">
                <div class="tips-name">Try Different Combinations</div>
                <div class="tips-desc">
                  Don't be afraid to try different item combinations, sometimes the most unexpected
                  pairings bring surprises.
                </div>
              </div>
            </div>
            <div class="tips-card">
              <div class="tips-ico-main">🎯</div>
              <div class="tips-main">
                <div class="tips-name">Focus on Color Matching</div>
                <div class="tips-desc">
                  Color matching is an important clue for puzzles, try placing items with the same
                  or complementary colors together.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Footer Component -->
  <Footer />
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import LevelsList from '@/components/LevelsList.vue'
import SearchLevel from '@/components/SearchLevel.vue'
</script>

<style scoped>
.dreamy-home {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffb6c1 0%, #e6e6fa 50%, #98fb98 100%);
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #ffb6c1 0%, #e6e6fa 60%, #98fb98 100%);
  padding: 60px 0;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.12) 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.4;
  pointer-events: none;
}

.hero-flex {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
}

.hero-content {
  flex: 1 1 0;
  min-width: 0;
}

.hero-image {
  flex: 0 0 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 640px;
  background: none;
  box-shadow: none;
}

.phone-frame {
  width: 300px;
  height: 600px;
  background: #f6f7fb;
  border-radius: 36px;
  border: 6px solid #222;
  box-shadow: 0 8px 32px #2222, 0 1.5px 0 #fff8 inset;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-8deg);
  transition: box-shadow 0.3s;
}

.phone-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  box-shadow: none;
}

.hero-header {
  text-align: left;
  margin-bottom: 40px;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  font-size: 1.5rem;
  color: #fff;
}

.logo-text {
  font-size: 1.1rem;
  color: #2d1b69;
  font-weight: 600;
  text-shadow: 1px 1px 4px #fff;
}

.hero-main {
  text-align: left;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  color: #2d1b69;
  margin-bottom: 20px;
  line-height: 1.2;
  text-shadow: 2px 2px 8px #fff, 0 2px 16px #e6e6fa, 0 0 2px #fff;
}

.hero-description {
  font-size: 1.1rem;
  color: #4a4a4a;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 600px;
  text-shadow: 1px 1px 6px #fff, 0 0 2px #fff;
}

.hero-stats {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.7);
  padding: 18px 28px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(210, 100, 182, 0.08);
}

.stat-icon {
  font-size: 1.5rem;
  color: #2d1b69;
  text-shadow: 1px 1px 4px #fff;
}

.stat-content {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 1.2rem;
  font-weight: bold;
  color: #2d1b69;
  text-shadow: 1px 1px 4px #fff;
}

.stat-label {
  font-size: 0.9rem;
  color: #4a4a4a;
  text-shadow: 1px 1px 4px #fff;
}

.search-section {
  margin-bottom: 30px;
}

.search-input-group {
  display: flex;
  max-width: 500px;
  gap: 10px;
}

.search-input {
  flex: 1;
  padding: 12px 16px;
  border: 1.5px solid #d264b6;
  border-radius: 8px;
  background: #fff;
  color: #2d1b69;
  font-size: 1rem;
  box-shadow: 0 1px 4px #e6e6fa44;
  text-shadow: none;
}

.search-input::placeholder {
  color: #b39ddb;
  text-shadow: none;
}

.search-button {
  padding: 12px 20px;
  background: linear-gradient(90deg, #b39ddb 0%, #d264b6 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  text-shadow: none;
  box-shadow: 0 2px 8px #d264b622;
}

.search-button:hover {
  background: linear-gradient(90deg, #d264b6 0%, #b39ddb 100%);
  transform: translateY(-2px);
}

.search-icon {
  font-size: 0.9rem;
  color: #2d1b69;
  text-shadow: 1px 1px 4px #fff;
}

.action-buttons {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.action-btn {
  padding: 15px 25px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  min-width: 200px;
  justify-content: center;
  color: #2d1b69;
  box-shadow: 0 2px 12px #ffe4ec33;
  text-shadow: none;
  background: none;
}

.primary-btn {
  background: linear-gradient(90deg, #ffe4ec 0%, #ffb6c1 100%);
}

.primary-btn:hover {
  background: linear-gradient(90deg, #ffb6c1 0%, #ffe4ec 100%);
  transform: translateY(-2px);
}

.secondary-btn {
  background: linear-gradient(90deg, #e6e6fa 0%, #f3e8ff 100%);
}

.secondary-btn:hover {
  background: linear-gradient(90deg, #f3e8ff 0%, #e6e6fa 100%);
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 1.1rem;
  color: #2d1b69;
  text-shadow: 1px 1px 4px #fff;
}

.play-directly {
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(210, 100, 182, 0.08);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px #d264b622;
  max-width: 500px;
}

.play-icon {
  font-size: 2rem;
  color: #2d1b69;
  text-shadow: 1px 1px 4px #fff;
}

.play-content {
  flex: 1;
}

.play-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d1b69;
  margin-bottom: 5px;
  text-shadow: none;
}

.play-description {
  font-size: 0.9rem;
  color: #4a4a4a;
  line-height: 1.4;
  text-shadow: none;
}

/* Section Styles */
.game-intro {
  background: linear-gradient(135deg, #ffe4ec 0%, #fff8fb 100%);
  padding: 60px 0;
  margin: 0;
  border-radius: 0;
  box-shadow: none;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #2d1b69;
  margin-bottom: 30px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Comic Sans MS', cursive, sans-serif;
}

.intro-content {
  text-align: center;
}

.intro-text p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.game-features {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #ffe4e1, #e6e6fa);
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.feature-text {
  font-weight: 600;
  color: #8b4513;
}

/* Levels Section */
.levels-section {
  background: linear-gradient(135deg, #e6e6fa 0%, #f3e8ff 100%);
  padding: 60px 0;
  min-height: 600px;
  contain: layout style paint;
}

.section-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 40px;
}

.difficulty {
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
}

.difficulty.easy {
  background: #90ee90;
  color: #006400;
}

.difficulty.medium {
  background: #ffd700;
  color: #b8860b;
}

.difficulty.hard {
  background: #ffb6c1;
  color: #8b0000;
}

.duration {
  color: #888;
  font-weight: 600;
}

/* Download Section */
.download-section {
  background: linear-gradient(135deg, #e6e6fa 0%, #f3e8ff 100%);
  padding: 60px 0;
}

.download-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.8rem;
  font-weight: bold;
  color: #2d1b69;
  text-shadow: 1px 1px 4px #fff;
}

.download-icon {
  font-size: 1.5rem;
  color: #ff69b4;
}

.download-main {
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.download-info {
  flex: 1;
  min-width: 350px;
}

.download-heading {
  font-size: 2.2rem;
  color: #2d1b69;
  margin-bottom: 15px;
  text-shadow: 2px 2px 8px #fff, 0 2px 16px #e6e6fa, 0 0 2px #fff;
}

.download-desc {
  font-size: 1.1rem;
  color: #4a4a4a;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 500px;
  text-shadow: 1px 1px 6px #fff, 0 0 2px #fff;
}

.download-btns {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.download-btn {
  padding: 15px 30px;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  min-width: 200px;
  justify-content: center;
  color: #fff;
  box-shadow: 0 2px 12px #d264b622;
  text-shadow: none;
}

.download-btn.appstore {
  background: linear-gradient(90deg, #ff69b4 0%, #ffb6c1 100%);
}

.download-btn.appstore:hover {
  background: linear-gradient(90deg, #ffb6c1 0%, #ff69b4 100%);
  transform: translateY(-2px);
}

.download-btn.googleplay {
  background: linear-gradient(90deg, #4285f4 0%, #34a853 100%);
}

.download-btn.googleplay:hover {
  background: linear-gradient(90deg, #34a853 0%, #4285f4 100%);
  transform: translateY(-2px);
}

.btn-ico {
  font-size: 1.2rem;
  color: #fff;
}

.download-phone {
  flex: 0 0 320px;
  height: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  box-shadow: none;
}

.download-phone .phone-frame {
  transform: rotate(0deg);
  /* Ensure it's upright for download section */
}

/* Game Features Section */
.features-section {
  background: linear-gradient(135deg, #f3e8ff 0%, #e6e6fa 100%);
  padding: 60px 0;
}

.features-content {
  text-align: center;
}

.features-title {
  font-size: 2.5rem;
  color: #2d1b69;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.features-desc {
  font-size: 1.1rem;
  color: #4a4a4a;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 600px;
  text-shadow: 1px 1px 6px #fff, 0 0 2px #fff;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  justify-items: center;
}

.feature-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-ico {
  font-size: 3rem;
  color: #ff69b4;
  margin-bottom: 15px;
}

.feature-main {
  flex: 1;
}

.feature-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d1b69;
  margin-bottom: 8px;
  text-shadow: 1px 1px 4px #fff;
}

.feature-desc {
  font-size: 0.9rem;
  color: #4a4a4a;
  line-height: 1.5;
  text-shadow: 1px 1px 4px #fff;
}

/* FAQ Section */
.faq-section {
  background: linear-gradient(135deg, #ffe4ec 0%, #fff8fb 100%);
  padding: 60px 0;
}

.faq-content {
  text-align: center;
}

.faq-title {
  font-size: 2.5rem;
  color: #2d1b69;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.faq-desc {
  font-size: 1.1rem;
  color: #4a4a4a;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 600px;
  text-shadow: 1px 1px 6px #fff, 0 0 2px #fff;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  justify-items: center;
}

.faq-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.faq-card:hover {
  transform: translateY(-5px);
}

.faq-q {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d1b69;
  text-shadow: 1px 1px 4px #fff;
}

.faq-a {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  text-shadow: 1px 1px 4px #fff;
}

/* Tips and Tricks Section */
.tips-section {
  background: linear-gradient(135deg, #e6e6fa 0%, #f3e8ff 100%);
  padding: 60px 0;
}

.tips-content {
  text-align: center;
}

.tips-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.8rem;
  font-weight: bold;
  color: #2d1b69;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.tips-ico {
  font-size: 1.5rem;
  color: #ff69b4;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  justify-items: center;
}

.tips-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tips-card:hover {
  transform: translateY(-5px);
}

.tips-ico-main {
  font-size: 3rem;
  color: #ff69b4;
  margin-bottom: 15px;
}

.tips-main {
  flex: 1;
}

.tips-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d1b69;
  margin-bottom: 8px;
  text-shadow: 1px 1px 4px #fff;
}

.tips-desc {
  font-size: 0.9rem;
  color: #4a4a4a;
  line-height: 1.5;
  text-shadow: 1px 1px 4px #fff;
}

@media (max-width: 1024px) {
  .hero-flex {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  .hero-content {
    width: 100%;
  }

  .hero-header {
    margin-bottom: 1rem;
  }

  .hero-image {
    height: 400px;
    flex: none;
    margin: 0 auto;
  }

  .phone-frame {
    width: 220px;
    height: 440px;
  }

  .download-main {
    flex-direction: column;
    gap: 32px;
  }

  .download-info {
    width: 100%;
    min-width: 0;
  }

  .download-phone {
    height: 400px;
    flex: none;
    margin: 0 auto;
  }

  .phone-frame {
    width: 220px;
    height: 440px;
  }

  .features-grid,
  .faq-grid,
  .tips-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .game-features {
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .hero-flex {
    gap: 1rem;
  }

  .hero-section,
  .levels-section,
  .game-intro,
  .download-section,
  .features-section,
  .faq-section,
  .tips-section {
    padding: 1rem 0;
  }

  .levels-section {
    min-height: 400px;
  }

  .hero-title {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  .hero-description {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .logo-text {
    font-size: 1rem;
  }

  .hero-stats {
    /* flex-direction: column; */
    gap: 10px;
    margin-bottom: 1rem;
  }

  .stat-item {
    padding: 0.5rem;
    gap: 0.5rem;
  }

  .stat-icon {
    font-size: 1rem;
  }

  .stat-number {
    font-size: 1rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .intro-text p {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .search-input {
    font-size: 0.8rem;
    padding: 0.5rem;
    width: 100%;
  }

  .search-input-group {
    flex-direction: column;
    gap: 8px;
  }

  .search-section {
    margin-bottom: 1rem;
  }

  .search-button {
    font-size: 0.8rem;
    padding: 0.5rem;
    width: 100%;
  }

  .action-btn {
    font-size: 0.8rem;
    padding: 0.5rem;
    width: 100%;
  }

  .action-buttons {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 20px;
  }

  .download-desc {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .download-btn {
    font-size: 0.8rem;
    padding: 0.5rem;
    width: 100%;
  }

  .features-desc {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .play-directly {
    flex-direction: column;
    gap: 8px;
    max-width: 100%;
    padding: 12px;
  }

  .hero-image,
  .download-phone {
    height: 220px;
  }

  .phone-frame {
    width: 120px;
    height: 220px;
    border-width: 3px;
    border-radius: 10px;
  }

  .phone-frame img {
    border-radius: 10px;
  }

  .section-title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .tips-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .feature-card {
    border-radius: 10px;
    padding: 1rem;
    gap: 0.5rem;
  }

  .feature-name {
    font-size: 1rem;
  }

  .feature-desc {
    font-size: 0.8rem;
  }

  .game-features {
    flex-direction: column;
    gap: 10px;
  }

  .feature {
    padding: 12px;
  }

  .download-main {
    flex-direction: column;
    gap: 16px;
  }

  .download-btns {
    flex-direction: column;
    gap: 10px;
  }

  .faq-desc {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .faq-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .faq-card {
    border-radius: 10px;
    padding: 1rem;
  }
}
</style>