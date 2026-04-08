import "./menu.css";

export const menu = () => {
  const div = document.querySelector(`.main-content`);
  div.innerHTML = ``;

  div.innerHTML = `<main class="site-content">
        <section class="menu-section">
          <div class="menu-container">
            <h1 class="menu-main-title">DINNER MENU</h1>

            <div class="menu-category">
              <h2 class="category-title">STEAK</h2>
              <p class="category-description">
                Our steaks are hand-selected, aged for 28 days, and grilled to
                your exact preference over an open flame.
              </p>

              <div class="menu-items-list">
                <div class="menu-item">
                  <div class="item-header">
                    <span class="item-name">Center-Cut Filet Mignon</span>
                    <span class="item-price">$9.00</span>
                  </div>
                  <p class="item-description">
                    The most tender cut of beef, lean yet succulent, served with
                    our signature herb butter.
                  </p>
                </div>

                <div class="menu-item">
                  <div class="item-header">
                    <span class="item-name">Porterhouse Steak</span>
                    <span class="item-price">$9.00</span>
                  </div>
                  <p class="item-description">
                    The best of both worlds: a tender filet and a flavorful strip,
                    bone-in for maximum taste.
                  </p>
                </div>

                <div class="menu-item">
                  <div class="item-header">
                    <span class="item-name">Center-Cut Prime Ribeye</span>
                    <span class="item-price">$9.00</span>
                  </div>
                  <p class="item-description">
                    Rich, juicy, and full-flavored with generous marbling
                    throughout.
                  </p>
                </div>

                <div class="menu-item">
                  <div class="item-header">
                    <span class="item-name">★ Double-Cut Rib Lamb Chops</span>
                    <span class="item-price">$9.00</span>
                  </div>
                  <p class="item-description">
                    Marinated in rosemary and garlic, served with a mint
                    reduction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>`;
};
