<template>
  <div class="legal-page">
    <Header />
    <div class="container">
      <div class="legal-content">
        <div class="legal-header">
          <h1 class="legal-title">Terms of Service</h1>
          <p class="legal-subtitle">Last updated: July 2025</p>
        </div>

        <div class="legal-body">
          <section class="policy-section">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using Dreamy Room Game Guides website, you accept and agree to be
              bound by the terms and provision of this agreement. If you do not agree to abide by
              the above, please do not use this service.
            </p>
          </section>

          <section class="policy-section">
            <h2>Use License</h2>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to access and use our
              website for personal, non-commercial purposes.
            </p>

            <h3>Permitted Uses:</h3>
            <ul>
              <li>Access and view content for personal use</li>
              <li>Share content through social media</li>
              <li>Use guides for educational purposes</li>
              <li>Print content for personal reference</li>
            </ul>

            <h3>Prohibited Uses:</h3>
            <ul>
              <li>Commercial reproduction or distribution</li>
              <li>Modification of content without permission</li>
              <li>Removal of copyright notices</li>
              <li>Use for malicious purposes</li>
            </ul>
          </section>

          <section class="policy-section">
            <h2>User Conduct</h2>
            <p>
              When using our website, you agree to conduct yourself in a manner that is respectful
              and appropriate. Any behavior that disrupts the service or harms other users is
              strictly prohibited.
            </p>
            <p>You agree to:</p>
            <ul>
              <li>Be respectful to other users</li>
              <li>Respect intellectual property rights</li>
              <li>Not post spam or malicious content</li>
              <li>Provide accurate information</li>
            </ul>
          </section>

          <section class="policy-section">
            <h2>Intellectual Property</h2>
            <p>
              The content on this website, including but not limited to text, graphics, images, and
              software, is the property of Dreamy Room Game Guides and is protected by copyright
              laws.
            </p>
            <p>
              All content is protected under international copyright laws. Unauthorized use may
              result in legal action.
            </p>
            <p>
              Dreamy Room and related trademarks are property of their respective owners. We use
              them for reference purposes only.
            </p>
          </section>

          <section class="policy-section">
            <h2>Disclaimer</h2>
            <p>
              The information provided on this website is for general informational purposes only.
              We make no warranties about the accuracy, completeness, or reliability of any
              information.
            </p>
            <p>
              This website is an unofficial fan site and is not affiliated with the creators of
              Dreamy Room. All game rights belong to their respective owners.
            </p>
          </section>

          <section class="policy-section">
            <h2>Limitation of Liability</h2>
            <p>
              Dreamy Room Game Guides shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use of the website or any
              content provided.
            </p>
            <p>
              This includes but is not limited to technical issues, device compatibility problems,
              internet connectivity issues, and data loss.
            </p>
          </section>

          <section class="policy-section">
            <h2>Modifications</h2>
            <p>
              We reserve the right to modify these terms of service at any time. Changes will be
              effective immediately upon posting on the website. Your continued use of the website
              constitutes acceptance of the modified terms.
            </p>
            <p>
              We will notify users of significant changes through website announcements or email
              notifications.
            </p>
          </section>

          <section class="policy-section">
            <h2>Governing Law</h2>
            <p>
              These terms of service shall be governed by and construed in accordance with the laws
              of the jurisdiction where Dreamy Room Game Guides operates, without regard to its
              conflict of law provisions.
            </p>
          </section>

          <section class="policy-section">
            <h2>Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <p><strong>Email:</strong> jennifermontai77@gmail.com</p>
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
.legal-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffb6c1 0%, #e6e6fa 50%, #98fb98 100%);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.legal-content {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.legal-header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 2px solid #e6e6fa;
}

.legal-title {
  font-size: 2.5rem;
  color: #2d1b69;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.legal-subtitle {
  font-size: 1.1rem;
  color: #666;
  font-style: italic;
}

.legal-body {
  line-height: 1.8;
}

.policy-section {
  margin-bottom: 30px;
}

.policy-section h2 {
  font-size: 1.8rem;
  color: #2d1b69;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 2px solid #ffb6c1;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.policy-section h3 {
  font-size: 1.3rem;
  color: #2d1b69;
  margin: 20px 0 10px 0;
}

.policy-section p {
  font-size: 1.1rem;
  color: #4a4a4a;
  margin-bottom: 15px;
  text-align: justify;
}

.policy-section ul {
  margin-bottom: 15px;
  padding-left: 20px;
}

.policy-section li {
  font-size: 1.1rem;
  color: #4a4a4a;
  margin-bottom: 8px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .container {
    padding: 20px 15px;
  }

  .legal-content {
    padding: 25px;
  }

  .legal-title {
    font-size: 2rem;
  }

  .policy-section h2 {
    font-size: 1.5rem;
  }

  .policy-section h3 {
    font-size: 1.2rem;
  }

  .policy-section p,
  .policy-section li {
    font-size: 1rem;
  }
}
</style> 