<template>
  <div class="download-page">
    <Header />

    <main class="main-content">
      <div class="container">
        <h1 class="page-title"><span class="download-icon">⬇️</span> Download Dreamy Room</h1>

        <div class="download-hero">
          <div class="download-content">
            <div class="download-info">
              <h2 class="download-subtitle">Start Your Dreamy Adventure</h2>
              <p class="download-description">
                Embark on a magical journey through beautifully designed rooms filled with puzzles,
                mysteries, and heartwarming stories. Download Dreamy Room now and experience the
                perfect blend of relaxation and creativity.
              </p>

              <div class="download-stats">
                <div class="stat">
                  <span class="stat-number">100+</span>
                  <span class="stat-label">Levels</span>
                </div>
                <div class="stat">
                  <span class="stat-number">4.8★</span>
                  <span class="stat-label">Rating</span>
                </div>
                <div class="stat">
                  <span class="stat-number">1M+</span>
                  <span class="stat-label">Downloads</span>
                </div>
              </div>

              <div class="download-buttons">
                <a
                  href="https://apps.apple.com/us/app/dreamy-room/id6742221896"
                  class="download-btn appstore"
                  target="_blank"
                >
                  <span class="btn-icon">🍎</span>
                  <div class="btn-content">
                    <span class="btn-label">Download on the</span>
                    <span class="btn-store">App Store</span>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.abi.dream.unpacking"
                  class="download-btn googleplay"
                  target="_blank"
                >
                  <span class="btn-icon">🤖</span>
                  <div class="btn-content">
                    <span class="btn-label">GET IT ON</span>
                    <span class="btn-store">Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            <div class="download-preview">
              <div class="phone-frame">
                <img src="/images/banner-3.webp" alt="Dreamy Room Game Preview" />
              </div>
            </div>
          </div>
        </div>

        <div class="features-section">
          <h2 class="section-title">Why Choose Dreamy Room?</h2>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">🧩</div>
              <h3 class="feature-title">Challenging Puzzles</h3>
              <p class="feature-desc">Solve unique puzzles that require creativity and logic</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🎨</div>
              <h3 class="feature-title">Beautiful Design</h3>
              <p class="feature-desc">Enjoy stunning visuals and cozy room designs</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">😌</div>
              <h3 class="feature-title">Relaxing Experience</h3>
              <p class="feature-desc">No time pressure, just peaceful organization fun</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📖</div>
              <h3 class="feature-title">Heartwarming Stories</h3>
              <p class="feature-desc">Each item tells a unique life story</p>
            </div>
          </div>
        </div>

        <div class="system-requirements">
          <h2 class="section-title">System Requirements</h2>
          <div class="requirements-grid">
            <div class="requirement-card">
              <h3 class="req-title">iOS</h3>
              <ul class="req-list">
                <li>iOS 12.0 or later</li>
                <li>iPhone 6s or later</li>
                <li>iPad (5th generation) or later</li>
                <li>500MB available space</li>
              </ul>
            </div>
            <div class="requirement-card">
              <h3 class="req-title">Android</h3>
              <ul class="req-list">
                <li>Android 6.0 or later</li>
                <li>2GB RAM minimum</li>
                <li>500MB available space</li>
                <li>OpenGL ES 3.0 support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.download-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffb6c1 0%, #e6e6fa 50%, #98fb98 100%);
}

.main-content {
  padding: 60px 0;
}
.page-title {
  font-size: 2.5rem;
  color: #2d1b69;
  text-align: center;
  margin-bottom: 40px;
  font-weight: bold;
  text-shadow: 2px 2px 8px #fff, 0 2px 16px #e6e6fa, 0 0 2px #fff;
}

.download-icon {
  font-size: 2rem;
  margin-right: 15px;
}

.download-hero {
  background: linear-gradient(135deg, #ffe4ec 0%, #f3e8ff 100%);
  border-radius: 25px;
  padding: 50px;
  margin-bottom: 60px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.download-content {
  display: flex;
  align-items: center;
  gap: 50px;
}

.download-info {
  flex: 1;
}

.download-subtitle {
  font-size: 2rem;
  color: #2d1b69;
  margin-bottom: 20px;
  font-weight: bold;
  text-shadow: 2px 2px 8px #fff, 0 2px 16px #e6e6fa, 0 0 2px #fff;
}

.download-description {
  font-size: 1.1rem;
  color: #4a4a4a;
  line-height: 1.6;
  margin-bottom: 30px;
  text-shadow: 1px 1px 4px #fff;
}

.download-stats {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: #ff69b4;
  text-shadow: 2px 2px 8px #fff;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
  text-shadow: 1px 1px 2px #fff;
}

.download-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.download-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px 25px;
  border-radius: 15px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.download-btn.appstore {
  background: linear-gradient(135deg, #e6e6fa 0%, #dda0dd 100%);
  color: #2d1b69;
}

.download-btn.googleplay {
  background: linear-gradient(135deg, #ffb6c1 0%, #dda0dd 100%);
  color: #2d1b69;
}

.download-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.btn-icon {
  font-size: 1.5rem;
}

.btn-content {
  display: flex;
  flex-direction: column;
}

.btn-label {
  font-size: 0.8rem;
  opacity: 0.8;
}

.btn-store {
  font-size: 1.1rem;
  font-weight: bold;
}

.download-preview {
  flex: 0 0 300px;
  display: flex;
  justify-content: center;
}

.phone-frame {
  width: 280px;
  height: 560px;
  background: #f6f7fb;
  border-radius: 36px;
  border: 6px solid #222;
  box-shadow: 0 8px 32px #2222, 0 1.5px 0 #fff8 inset;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-5deg);
  transition: transform 0.3s ease;
}

.phone-frame:hover {
  transform: rotate(-3deg) scale(1.05);
}

.phone-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
}

.section-title {
  font-size: 2.2rem;
  color: #2d1b69;
  text-align: center;
  margin-bottom: 40px;
  font-weight: bold;
  text-shadow: 2px 2px 8px #fff, 0 2px 16px #e6e6fa, 0 0 2px #fff;
}

.features-section {
  margin-bottom: 60px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.feature-title {
  font-size: 1.3rem;
  color: #2d1b69;
  margin-bottom: 10px;
  font-weight: bold;
}

.feature-desc {
  color: #666;
  line-height: 1.5;
}

.system-requirements {
  background: linear-gradient(135deg, #e6e6fa 0%, #f3e8ff 100%);
  border-radius: 25px;
  padding: 50px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.requirements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.requirement-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.req-title {
  font-size: 1.5rem;
  color: #2d1b69;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
}

.req-list {
  list-style: none;
  padding: 0;
}

.req-list li {
  padding: 8px 0;
  color: #666;
  border-bottom: 1px solid #eee;
  position: relative;
  padding-left: 25px;
}

.req-list li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4caf50;
  font-weight: bold;
}

.req-list li:last-child {
  border-bottom: none;
}

@media (max-width: 1024px) {
  .download-content {
    flex-direction: column;
    gap: 32px;
  }
  .download-preview {
    flex: none;
    width: 100%;
    justify-content: center;
  }
  .phone-frame {
    width: 180px;
    height: 360px;
  }
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .requirements-grid {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .download-hero,
  .system-requirements {
    padding: 30px;
  }
}
@media (max-width: 768px) {
  .main-content {
    padding: 20px 0;
  }
  .page-title {
    font-size: 1.2rem;
    margin-bottom: 14px;
  }
  .download-subtitle {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .download-description {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
  .download-hero,
  .system-requirements {
    padding: 10px;
    margin-bottom: 1rem;
  }
  .download-content {
    flex-direction: column;
    gap: 14px;
  }
  .download-preview {
    width: 100%;
    height: 180px;
  }
  .download-stats {
    margin-bottom: 1rem;
  }
  .stat-number {
    font-size: 1.2rem;
  }
  .download-btn {
    font-size: 0.8rem;
    padding: 0.5rem;
    width: 100%;
  }
  .phone-frame {
    width: 100px;
    height: 180px;
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
  .features-section {
    margin-bottom: 1rem;
  }
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .feature-icon {
    font-size: 1.5rem;
  }
  .feature-title {
    font-size: 1rem;
  }
  .feature-desc {
    font-size: 0.8rem;
  }
  .requirements-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .feature-card,
  .requirement-card {
    padding: 10px;
  }
  .download-buttons {
    flex-direction: column;
    gap: 10px;
  }
}
</style> 