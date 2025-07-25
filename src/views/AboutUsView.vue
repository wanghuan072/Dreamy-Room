<template>
  <div class="about-page">
    <Header />
    <div class="container">
      <div class="about-content">
        <div class="about-header">
          <h1 class="about-title">About Dreamy Room Game Guides</h1>
          <p class="about-subtitle">A personal sharing website for Dreamy Room enthusiasts</p>
        </div>

        <div class="about-body">
          <section class="about-section">
            <h2>About This Site</h2>
            <p>
              Welcome to Dreamy Room Game Guides! tips, and walkthroughs for the wonderful puzzle
              game Dreamy Room.
            </p>
            <p>
              As a passionate player of Dreamy Room, I created this site to help other players who
              might be stuck on certain levels or want to discover new strategies. This is purely a
              fan site and is not affiliated with the official game creators.
            </p>
          </section>

          <section class="about-section">
            <h2>What You'll Find Here</h2>
            <p>This website offers:</p>
            <ul>
              <li>
                <strong>Level Walkthroughs:</strong> Detailed step-by-step guides for various Dreamy
                Room levels
              </li>
              <li>
                <strong>Tips and Strategies:</strong> Personal insights and techniques I've
                discovered while playing
              </li>
              <li>
                <strong>Game Resources:</strong> Information about game features and mechanics
              </li>
              <li><strong>Personal Blog:</strong> My thoughts and experiences with the game</li>
            </ul>
          </section>

          <section class="about-section">
            <h2>Disclaimer</h2>
            <p>
              This is an unofficial fan website created by a player for other players. I am not
              affiliated with the creators of Dreamy Room, and all game rights belong to their
              respective owners.
            </p>
            <p>
              The content here represents my personal experiences and strategies. While I strive for
              accuracy, game updates may change solutions, so always check the latest version of the
              game.
            </p>
          </section>

          <section class="about-section">
            <h2>Contact</h2>
            <p>
              If you have questions, suggestions, or just want to share your own experiences, feel
              free to reach out:
            </p>
            <p><strong>Email:</strong> jennifermontai77@gmail.com</p>
            <p>
              I love hearing from fellow Dreamy Room players and am always happy to help or discuss
              the game!
            </p>
          </section>

          <section class="about-section">
            <h2>Thank You</h2>
            <p>
              Thank you for visiting my website! I hope these guides and tips help you enjoy Dreamy
              Room even more. Happy gaming!
            </p>
          </section>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffb6c1 0%, #e6e6fa 50%, #98fb98 100%);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.about-content {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.about-header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 2px solid #e6e6fa;
}

.about-title {
  font-size: 2.5rem;
  color: #2d1b69;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.about-subtitle {
  font-size: 1.2rem;
  color: #666;
  font-style: italic;
}

.about-body {
  line-height: 1.8;
}

.about-section {
  margin-bottom: 40px;
}

.about-section h2 {
  font-size: 1.8rem;
  color: #2d1b69;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 2px solid #ffb6c1;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.about-section p {
  font-size: 1.1rem;
  color: #4a4a4a;
  margin-bottom: 15px;
  text-align: justify;
}

.about-section ul {
  margin-bottom: 15px;
  padding-left: 20px;
}

.about-section li {
  font-size: 1.1rem;
  color: #4a4a4a;
  margin-bottom: 10px;
  line-height: 1.6;
}

.about-section a {
  color: #d264b6;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.about-section a:hover {
  color: #2d1b69;
}

@media (max-width: 768px) {
  .container {
    padding: 20px 15px;
  }

  .about-content {
    padding: 25px;
  }

  .about-title {
    font-size: 2rem;
  }

  .about-section h2 {
    font-size: 1.5rem;
  }

  .about-section p,
  .about-section li {
    font-size: 1rem;
  }
}
</style> 