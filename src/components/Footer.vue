<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <!-- Dreamy Room Game Guides Section -->
        <div class="footer-column">
          <h3 class="footer-title">
            <span class="icon">📚</span>
            Dreamy Room Game Guides
          </h3>
          <p class="footer-description">
            Discover the warmth of home in the details of life. A heartwarming gaming experience
            that transforms houses into homes.
          </p>
          <div class="social-icons">
            <div class="social-icon twitter">
              <div class="icon-shape"></div>
            </div>
            <div class="social-icon facebook">
              <div class="icon-shape"></div>
            </div>
            <div class="social-icon instagram">
              <div class="icon-shape"></div>
            </div>
          </div>
        </div>
        <!-- Quick Links Section -->
        <div class="footer-column">
          <h3 class="footer-title">
            <span class="icon">🔗</span>
            Quick Links
          </h3>
          <ul class="footer-links">
            <li><router-link to="/" class="footer-link">Home</router-link></li>
            <li><router-link to="/levels" class="footer-link">Game Guides</router-link></li>
            <li><router-link to="/blog" class="footer-link">Blog</router-link></li>
            <li><router-link to="/download" class="footer-link">Download</router-link></li>
          </ul>
        </div>
        <!-- Levels Section -->
        <div class="footer-column">
          <h3 class="footer-title">
            <span class="icon">🎮</span>
            Levels
          </h3>
          <ul class="footer-links">
            <li>
              <router-link to="/levels/level-15" class="footer-link"
                >Dreamy Room Level 15</router-link
              >
            </li>
            <li>
              <router-link to="/levels/level-16" class="footer-link"
                >Dreamy Room Level 16</router-link
              >
            </li>
            <li>
              <router-link to="/levels/level-22" class="footer-link"
                >Dreamy Room Level 22</router-link
              >
            </li>
            <li>
              <router-link to="/levels/level-25" class="footer-link"
                >Dreamy Room Level 25</router-link
              >
            </li>
            <li>
              <router-link to="/levels/level-50" class="footer-link"
                >Dreamy Room Level 50</router-link
              >
            </li>
          </ul>
        </div>
        <!-- Legal Section -->
        <div class="footer-column">
          <h3 class="footer-title">
            <span class="icon">📄</span>
            Legal
          </h3>
          <ul class="footer-links">
            <li>
              <router-link to="/privacy-policy" class="footer-link">Privacy Policy</router-link>
            </li>
            <li>
              <router-link to="/terms-of-service" class="footer-link">Terms of Service</router-link>
            </li>
            <li><router-link to="/copyright" class="footer-link">Copyright</router-link></li>
            <li><router-link to="/about-us" class="footer-link">About Us</router-link></li>
            <li><router-link to="/contact-us" class="footer-link">Contact Us</router-link></li>
          </ul>
        </div>
      </div>
      <!-- Copyright Section -->
      <div class="copyright-section">
        <p class="copyright">© 2025 Dreamy Room. All rights reserved.</p>
        <p class="disclaimer">
          Disclaimer: This website is an unofficial fan site and is not affiliated with the creators
          of Dreamy Room. All rights belong to their respective owners.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component logic
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #ffb6c1 0%, #e6e6fa 100%);
  padding: 40px 0 20px 0;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-column {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #2d1b69;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-shadow: 2px 2px 4px #fff, 0 0 8px #fff8;
  -webkit-text-stroke: 1px #fff;
}

.icon {
  font-size: 1.1rem;
}

.footer-description {
  font-size: 0.9rem;
  color: #4a4a4a;
  line-height: 1.5;
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px #fff;
  -webkit-text-stroke: 0.5px #fff9;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 8px;
}

.footer-link {
  font-size: 0.9rem;
  color: #4a4a4a;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  text-shadow: 1px 1px 2px #fff;
  -webkit-text-stroke: 0.5px #fff9;
}

.footer-link:hover {
  color: #2d1b69;
  transform: translateX(5px);
  text-shadow: 2px 2px 4px #fff;
}

.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.social-icon {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.social-icon:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.icon-shape {
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 2px;
  position: relative;
}

.twitter .icon-shape::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 8px;
  border: 2px solid #1da1f2;
  border-radius: 10px 10px 0 0;
  border-bottom: none;
}

.facebook .icon-shape::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 12px;
  background: #1877f2;
  border-radius: 2px;
}

.instagram .icon-shape::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border: 2px solid #e4405f;
  border-radius: 50%;
}

.copyright-section {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}

.copyright {
  font-size: 0.8rem;
  color: #4a4a4a;
  margin-bottom: 8px;
  text-shadow: 1px 1px 2px #fff;
  -webkit-text-stroke: 0.5px #fff9;
}

.disclaimer {
  font-size: 0.7rem;
  color: #666666;
  line-height: 1.4;
  max-width: 600px;
  margin: 0 auto;
  text-shadow: 1px 1px 2px #fff;
  -webkit-text-stroke: 0.3px #fff9;
}

@media (max-width: 768px) {
  .footer {
    padding: 20px 0 10px 0;
  }
  .footer-content {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .footer-title {
    font-size: 1.1rem;
  }
  .social-icons {
    justify-content: center;
  }
}
</style> 