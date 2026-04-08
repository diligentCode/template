import "./home.css";
import foodImage1 from "./assets/images/food-image1.jpg";
import foodImage2 from "./assets/images/food-image2.jpg";
import foodImage3 from "./assets/images/food-image3.jpg";

const home = () => {
  //Select the main content div
  const header = document.querySelector(`header`);
  const div = document.querySelector(`.main-content`);

  //Clear the main content div
  div.innerHTML = ``;

  //Create the home page section
  div.innerHTML = `<section class="hero">
        <div class="hero-content">
          <h1>Sort of Famous<br />THIN CRUST PIZZA</h1>
          <button class="order-btn-large">ORDER NOW</button>
        </div>
      </section>

      <section class="seasonal">
        <div class="seasonal-img">
          <img
            src="${foodImage1}"
            alt="Spicy Chicken Ranch Pizza"
          />
        </div>
        <div class="seasonal-text">
          <h3>MEET OUR SEASONAL SPECIAL</h3>
          <h1>SPICY CHICKEN <br />RANCH</h1>
          <p>
            crispy breaded chicken topped with bacon, sliced jalapeños, jalapeño
            ranch, and crunchy fried onions
          </p>
          <button class="order-btn-small">ORDER NOW</button>
        </div>
      </section>

      <div class="scrolling-text-static">
        SORT OF FAMOUS SORT OF FAMOUS SORT OF FAMOUS SORT OF FAMOUS SORT OF
        <br />
        FAMOUS SORT OF FAMOUS SORT OF FAMOUS SORT OF FAMOUS SORT OF <br />
        FAMOUS SORT OF FAMOUS SORT OF FAMOUS SORT OF FAMOUS SORT OF <br />
        FAMOUS SORT OF FAMOUS SORT OF FAMOUS SORT OF FAMOUS SORT OF
      </div>

      <section class="catering">
        <div class="catering-content">
          <h3>MAKE YOUR NEXT EVENT</h3>
          <h1>UNFORGETTABLE</h1>
          <p>One less thing to think about.</p>
          <button class="order-btn-white">ORDER CATERING</button>
        </div>
        <div class="catering-img">
          <img src="${foodImage2}" alt="Catering Spread" />
        </div>
      </section>

      <section class="rewards">
        <div class="rewards-img">
          <img
            src="${foodImage3}"
            alt="Person eating pizza"
          />
        </div>
        <div class="rewards-content">
          <h3>BECOME SORT OF FAMOUS</h3>
          <h1>JOIN OUR REWARDS</h1>
          <p>
            Earn 1 point for every $1 spent and unlock $5 off every 100 points.
          </p>
          <button class="order-btn-large">SIGN UP</button>
        </div>
      </section>

      <footer>
        <div class="footer-links">
          <div class="col">
            <a href="#">CAREERS</a>
            <a href="#">CONTACT US</a>
          </div>
          <div class="footer-logo">
            <img
              src="https://images.squarespace-cdn.com/content/v1/698b5bb3dab2035bd1cb920d/a6ba6f41-f933-4aa0-85f5-2a0d50488d63/Main+Biker.png?format=500w"
              alt="Delivery Icon"
            />
          </div>
          <div class="col">
            <a href="#">PRIVACY POLICY</a>
            <a href="#">TERMS OF USE</a>
          </div>
        </div>
        <p class="copyright">
          Copyright © Eats & Treats 2026 All Rights Reserved
        </p>
      </footer>`;

  header.after(div);
};

export { home };
