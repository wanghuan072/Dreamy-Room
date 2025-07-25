<template>
  <div class="legal-page">
    <Header />
    <div class="container">
      <div class="legal-content">
        <div class="legal-header">
          <h1 class="legal-title">Privacy Policy</h1>
          <p class="legal-subtitle">Last updated: July 2025</p>
        </div>

        <div class="legal-body">
          <section class="policy-section">
            <h2>Introduction</h2>
            <p>
              Welcome to Dreamy Room Game Guides. We respect your privacy and are committed to
              protecting your personal data. This privacy policy explains how we collect, use, and
              safeguard your information when you visit our website.
            </p>
          </section>

          <section class="policy-section">
            <h2>Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <ul>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with our website,
                including pages visited, time spent, and navigation patterns.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies to enhance your browsing experience and
                analyze website traffic.
              </li>
              <li>
                <strong>Device Information:</strong> We may collect information about your device,
                including browser type, operating system, and IP address.
              </li>
            </ul>
          </section>

          <section class="policy-section">
            <h2>How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>To provide and maintain our website services</li>
              <li>To improve user experience and website functionality</li>
              <li>To analyze website usage and optimize performance</li>
              <li>To communicate with you about updates and changes</li>
              <li>To ensure website security and prevent fraud</li>
            </ul>
          </section>

          <section class="policy-section">
            <h2>Data Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third
              parties without your consent, except as described in this policy or as required by
              law.
            </p>
            <p>
              We may share data with trusted third-party service providers who assist us in
              operating our website, and we may disclose information when required by law or to
              protect our rights and safety.
            </p>
          </section>

          <section class="policy-section">
            <h2>Your Rights</h2>
            <p>You have the following rights regarding your personal data:</p>
            <ul>
              <li>
                <strong>Right to Access:</strong> You can request access to your personal data
              </li>
              <li>
                <strong>Right to Rectify:</strong> You can request correction of inaccurate data
              </li>
              <li>
                <strong>Right to Erase:</strong> You can request deletion of your personal data
              </li>
              <li><strong>Right to Object:</strong> You can object to processing of your data</li>
            </ul>
          </section>

          <section class="policy-section">
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. This includes
              encryption, firewall protection, and regular monitoring.
            </p>
          </section>

          <section class="policy-section">
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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

  .policy-section p,
  .policy-section li {
    font-size: 1rem;
  }
}
</style> 