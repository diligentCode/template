import "./contact.css";

export const contact = () => {
  const div = document.querySelector(`.main-content`);
  div.innerHTML = ``;

  div.innerHTML = `<main class="site-content">
        <section class="newsletter-section">
          <div class="newsletter-overlay">
            <div class="form-container">
              <h2>JOIN OUR MAILING LIST</h2>
              <form class="mailing-list-form">
                <div class="input-group">
                  <label for="newsletter-email">Enter your email here *</label>
                  <input type="email" id="newsletter-email" required />
                </div>

                <div class="checkbox-group">
                  <input type="checkbox" id="subscribe-check" required />
                  <label for="subscribe-check"
                    >Yes, subscribe me to your newsletter *</label
                  >
                </div>

                <button type="submit" class="btn-subscribe">
                  SUBSCRIBE NOW
                </button>
              </form>
            </div>
          </div>
        </section>

        <section class="contact-section">
          <div class="container">
            <h2 class="section-title">CONTACT &<br />LOCATION</h2>
            <p class="subtitle">TELL US WHAT YOU THINK AND HOW WE'RE DOING</p>

            <form class="contact-form">
              <div class="row">
                <div class="input-field">
                  <label>First name *</label>
                  <input type="text" required />
                </div>
                <div class="input-field">
                  <label>Last name *</label>
                  <input type="text" required />
                </div>
              </div>

              <div class="row">
                <div class="input-field">
                  <label>Email *</label>
                  <input type="email" required />
                </div>
                <div class="input-field">
                  <label>Phone</label>
                  <input type="tel" />
                </div>
              </div>

              <div class="input-field full-width">
                <label>Type your message here...</label>
                <textarea rows="4"></textarea>
              </div>

              <button type="submit" class="btn-submit">SUBMIT</button>
            </form>
          </div>
        </section>
      </main>`;
};
