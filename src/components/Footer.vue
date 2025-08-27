<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <!-- Dreamy Room Game Guides Section -->
        <div class="footer-column">
          <h3 class="footer-title">
            Dreamy Room Game Guides
          </h3>
          <p class="footer-description">
            Discover the warmth of home in the details of life. A heartwarming gaming experience
            that transforms houses into homes.
          </p>
          <div class="social-icons">
            <a href="https://facebook.com/dreamyroom" target="_blank" rel="noopener noreferrer"
              class="social-icon facebook">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://x.com/wenyong964203/status/1960543876881768510" target="_blank" rel="noopener noreferrer"
              class="social-icon x-twitter">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
        <!-- Quick Links Section -->
        <div class="footer-column">
          <h3 class="footer-title">
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
            Levels
          </h3>
          <ul class="footer-links">
            <li>
              <router-link to="/levels/level-15" class="footer-link">Dreamy Room Level 15</router-link>
            </li>
            <li>
              <router-link to="/levels/level-16" class="footer-link">Dreamy Room Level 16</router-link>
            </li>
            <li>
              <router-link to="/levels/level-22" class="footer-link">Dreamy Room Level 22</router-link>
            </li>
            <li>
              <router-link to="/levels/level-25" class="footer-link">Dreamy Room Level 25</router-link>
            </li>
            <li>
              <router-link to="/levels/level-50" class="footer-link">Dreamy Room Level 50</router-link>
            </li>
          </ul>
        </div>
        <!-- Legal Section -->
        <div class="footer-column">
          <h3 class="footer-title">
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: #2d1b69;
}

.social-icon:hover {
  background: rgba(255, 255, 255, 0.4);
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(45, 27, 105, 0.2);
}

.social-icon.twitter:hover {
  background: rgba(29, 155, 240, 0.2);
  color: #1d9bf0;
}

.social-icon.facebook:hover {
  background: rgba(24, 119, 242, 0.2);
  color: #1877f2;
}

.social-icon.x-twitter:hover {
  background: rgba(0, 0, 0, 0.2);
  color: #000000;
}

.social-icon svg {
  transition: all 0.3s ease;
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