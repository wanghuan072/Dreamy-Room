<template>
  <div class="contact-page">
    <Header />
    <div class="container">
      <div class="contact-content">
        <div class="contact-header">
          <h1 class="contact-title">Contact Us</h1>
          <p class="contact-subtitle">Get in touch with me about Dreamy Room!</p>
        </div>

        <div class="contact-body">
          <section class="contact-section">
            <h2>Get in Touch</h2>
            <p>
              I love hearing from fellow Dreamy Room players! Whether you have questions about the
              guides, want to share your own strategies, or just want to chat about the game, feel
              free to reach out.
            </p>
            <p>
              <strong>Email:</strong>
              <a href="mailto:jennifermontai77@gmail.com">jennifermontai77@gmail.com</a>
            </p>
            <p>
              I typically respond within 24-48 hours. I'm always happy to help with game-related
              questions or discuss strategies!
            </p>
          </section>

          <section class="contact-section">
            <h2>What I Can Help With</h2>
            <ul>
              <li>Questions about specific Dreamy Room levels</li>
              <li>Game strategy discussions</li>
              <li>Feedback on guides and walkthroughs</li>
              <li>General game-related inquiries</li>
              <li>Sharing your own tips and experiences</li>
            </ul>
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
.contact-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffb6c1 0%, #e6e6fa 50%, #98fb98 100%);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.contact-content {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.contact-header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 2px solid #e6e6fa;
}

.contact-title {
  font-size: 2.5rem;
  color: #2d1b69;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-subtitle {
  font-size: 1.2rem;
  color: #666;
  font-style: italic;
}

.contact-body {
  line-height: 1.8;
}

.contact-section {
  margin-bottom: 40px;
}

.contact-section h2 {
  font-size: 1.8rem;
  color: #2d1b69;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 2px solid #ffb6c1;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.contact-section p {
  font-size: 1.1rem;
  color: #4a4a4a;
  margin-bottom: 15px;
  text-align: justify;
}

.contact-section ul {
  margin-bottom: 15px;
  padding-left: 20px;
}

.contact-section li {
  font-size: 1.1rem;
  color: #4a4a4a;
  margin-bottom: 8px;
  line-height: 1.6;
}

.contact-section a {
  color: #d264b6;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.contact-section a:hover {
  color: #2d1b69;
}

@media (max-width: 768px) {
  .container {
    padding: 20px 15px;
  }

  .contact-content {
    padding: 25px;
  }

  .contact-title {
    font-size: 2rem;
  }

  .contact-section h2 {
    font-size: 1.5rem;
  }

  .contact-section p,
  .contact-section li {
    font-size: 1rem;
  }
}
</style> 