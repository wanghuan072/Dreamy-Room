<template>
  <div class="legal-page">
    <Header />
    <div class="container">
      <div class="legal-content">
        <div class="legal-header">
          <h1 class="legal-title">Copyright Notice</h1>
          <p class="legal-subtitle">Last updated: July 2025</p>
        </div>

        <div class="legal-body">
          <section class="policy-section">
            <h2>Copyright Statement</h2>
            <p>
              All content on Dreamy Room Game Guides website, including but not limited to text,
              graphics, images, videos, and software, is the property of Dreamy Room Game Guides and
              is protected by international copyright laws. Unauthorized use, reproduction, or
              distribution of this content is strictly prohibited.
            </p>
          </section>

          <section class="policy-section">
            <h2>What We Own</h2>
            <p>We own the following types of content:</p>
            <ul>
              <li>
                <strong>Original Content:</strong> All written content, guides, tutorials, and
                reviews created by our team.
              </li>
              <li>
                <strong>Website Design:</strong> Layout, styling, user interface, and overall
                website design elements.
              </li>
              <li>
                <strong>Original Images:</strong> Photographs, screenshots, and graphics created
                specifically for this website.
              </li>
              <li>
                <strong>Code & Software:</strong> Website code, scripts, and software developed for
                this platform.
              </li>
            </ul>
          </section>

          <section class="policy-section">
            <h2>Third-Party Content</h2>
            <p>
              We respect the intellectual property rights of others. Some content on our website may
              include references, images, or information related to Dreamy Room game, which belongs
              to their respective owners.
            </p>
            <p>
              <strong>Game Content:</strong> Dreamy Room game, characters, and related assets are
              property of their original creators. We use them for reference and educational
              purposes only.
            </p>
            <p>
              <strong>External Links:</strong> Links to external websites are provided for
              convenience. We do not control or endorse the content of these external sites.
            </p>
          </section>

          <section class="policy-section">
            <h2>Fair Use Policy</h2>
            <p>
              We support fair use of our content for educational, research, and personal purposes.
              However, commercial use requires explicit permission.
            </p>
            <h3>Allowed Uses:</h3>
            <ul>
              <li>Personal study and research</li>
              <li>Educational purposes</li>
              <li>Non-commercial sharing</li>
              <li>Criticism and commentary</li>
            </ul>
            <h3>Restricted Uses:</h3>
            <ul>
              <li>Commercial reproduction</li>
              <li>Mass distribution</li>
              <li>Modification without permission</li>
              <li>Removal of attribution</li>
            </ul>
          </section>

          <section class="policy-section">
            <h2>DMCA Compliance</h2>
            <p>
              We comply with the Digital Millennium Copyright Act (DMCA). If you believe your
              copyrighted work has been used without permission, please contact us immediately.
            </p>
            <p>To file a DMCA takedown notice, please include:</p>
            <ol>
              <li>Specific details about the copyrighted material</li>
              <li>Proof that you own the rights to the content</li>
              <li>A formal DMCA takedown notice sent to our designated agent</li>
            </ol>
          </section>

          <section class="policy-section">
            <h2>Attribution Requirements</h2>
            <p>
              When using our content under fair use or with permission, proper attribution is
              required.
            </p>
          </section>

          <section class="policy-section">
            <h2>License Requests</h2>
            <p>
              For commercial use, licensing, or other permissions, please contact us with your
              specific request.
            </p>
            <p>Your request should include:</p>
            <ul>
              <li>Specific content you want to use</li>
              <li>Intended purpose and audience</li>
              <li>Duration of use</li>
              <li>Contact information</li>
            </ul>
            <p><strong>Contact Information:</strong></p>
            <p>Email: jennifermontai77@gmail.com</p>
          </section>

          <section class="policy-section">
            <h2>Updates to Copyright Notice</h2>
            <p>
              This copyright notice may be updated periodically. The most recent version will always
              be available on this page. Continued use of our website constitutes acceptance of any
              changes.
            </p>
            <p>Check this page regularly for updates to our copyright policy.</p>
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

.policy-section ul,
.policy-section ol {
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